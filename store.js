const KEY = "skillforge_state";
const USERS_KEY = "skillforge_users";

function defaultState() {
  return {
    user: null,
    domain: null,
    level: "Curious Beginner",
    assessmentScore: 0,
    xp: 0,
    completed: [],
    completedLessons: [],
    skillScores: {},
    badges: [],
    challengeHistory: [],
    activity: [],
    lastChallenge: null,
    missionsCompleted: [],
    streak: 0,
    bestStreak: 0,
    lastMission: null,
    modules: {},
    finalTaskCompleted: false,
    finalQuizScore: 0
  };
}

function normalizeState(raw = {}) {
  const state = Object.assign(defaultState(), raw || {});
  if (!Array.isArray(state.completed)) state.completed = [];
  if (!Array.isArray(state.completedLessons)) state.completedLessons = [];
  if (!Array.isArray(state.badges)) state.badges = [];
  if (!Array.isArray(state.challengeHistory)) state.challengeHistory = [];
  if (!Array.isArray(state.activity)) state.activity = [];
  if (!Array.isArray(state.missionsCompleted)) state.missionsCompleted = [];
  if (!state.skillScores || typeof state.skillScores !== "object") state.skillScores = {};
  if (!state.modules || typeof state.modules !== "object") state.modules = {};
  state.streak = Number(state.streak) || 0;
  state.bestStreak = Number(state.bestStreak) || 0;
  state.finalQuizScore = Number(state.finalQuizScore) || 0;
  return state;
}

function ensureModuleState(state, moduleId) {
  if (!state.modules) state.modules = {};
  const key = String(moduleId);
  if (!state.modules[key]) {
    state.modules[key] = {
      completed: false,
      lessonsCompleted: []
    };
  }
  return state.modules[key];
}

function getState() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    return normalizeState(raw || {});
  } catch (error) {
    return defaultState();
  }
}

function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(normalizeState(state)));
}

function getUsers() {
  try {
    const raw = JSON.parse(localStorage.getItem(USERS_KEY));
    return Array.isArray(raw) ? raw.filter(Boolean) : [];
  } catch (error) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(Array.isArray(users) ? users : []));
}

function findUserByEmail(email) {
  const normalized = String(email || "").trim().toLowerCase();
  return getUsers().find(user => (user.email || "").toLowerCase() === normalized) || null;
}

function clearSession() {
  const state = getState();
  state.user = null;
  saveState(state);
  return state;
}

function resetProgress() {
  const current = getState();
  const fresh = defaultState();
  fresh.user = current.user;
  saveState(fresh);
  return fresh;
}

function logActivity(state, text) {
  state.activity = [{ text, time: new Date().toLocaleString() }, ...(state.activity || [])].slice(0, 10);
}

function levelInfo(xp) {
  let index = 0;
  LEVELS.forEach((level, i) => { if (xp >= level.xp) index = i; });
  const current = LEVELS[index];
  const next = LEVELS[index + 1];
  return {
    num: index + 1,
    name: current.name,
    xpInLevel: xp - current.xp,
    xpNeeded: next ? next.xp - xp : 0,
    next: next ? next.name : null,
    max: !next
  };
}

function addXP(state, amount, reason) {
  state.xp += amount;
  state.level = levelInfo(state.xp).name;
  logActivity(state, `+${amount} XP: ${reason}`);
  refreshBadges(state);
}

function skillScore(state, skill) {
  const data = state.skillScores && state.skillScores[skill];
  if (!data) return null;
  const scoreNumbers = [data.quiz, data.challenge].filter(value => typeof value === "number");
  if (!scoreNumbers.length) return null;
  if (typeof data.quiz === "number" && typeof data.challenge === "number") {
    return Math.round(data.quiz * 0.5 + data.challenge * 0.5);
  }
  return Math.round(scoreNumbers[0]);
}

function skillStatus(score) {
  if (score === null || typeof score === "undefined") {
    return { label: "Not started", cls: "" };
  }
  if (score < 50) return { label: "Needs Improvement", cls: "bad" };
  if (score <= 75) return { label: "Good", cls: "warn" };
  return { label: "Excellent", cls: "good" };
}

function setSkillScore(state, skill, type, value) {
  state.skillScores[skill] = state.skillScores[skill] || { quiz: null, challenge: null };
  state.skillScores[skill][type] = value;
}

function applyPlacement(state) {
  const road = ROADMAPS[state.domain] || [];
  if (!road.length) return;
  const placement = { Beginner: 0, Intermediate: 1, Advanced: 2 }[state.level] || 0;
  state.completed = road.slice(0, placement).map(stage => stage.id);
}

function stageStatus(state, index) {
  const road = ROADMAPS[state.domain] || [];
  if (!road[index]) return "locked";
  if (state.completed.includes(road[index].id)) return "done";
  const firstOpen = road.findIndex(stage => !state.completed.includes(stage.id));
  return index === firstOpen ? "current" : "locked";
}

function overallProgress(state) {
  const road = ROADMAPS[state.domain] || [];
  if (!road.length) return 0;
  return Math.round((state.completed.length / road.length) * 100);
}

function recommendedStage(state) {
  const road = ROADMAPS[state.domain] || [];
  if (!road.length) return null;

  const weakSkills = Object.keys(state.skillScores || {})
    .map(skill => ({ skill, score: skillScore(state, skill) }))
    .filter(item => item.score !== null && item.score < 50)
    .sort((a, b) => a.score - b.score);

  if (!weakSkills.length) return null;
  const bestWeak = weakSkills[0];
  return {
    skill: bestWeak.skill,
    score: bestWeak.score,
    stage: road.find(stage => stage.skill === bestWeak.skill) || road[0]
  };
}

function getSkillGapData(state) {
  const domainRoad = ROADMAPS[state.domain] || [];
  const trackedSkills = [...new Set(domainRoad.map(item => item.skill))];
  return trackedSkills.map(skill => {
    const score = skillScore(state, skill);
    return {
      skill,
      score: score === null ? 0 : score,
      status: skillStatus(score)
    };
  });
}

function refreshBadges(state) {
  const ids = new Set(state.badges || []);
  if (state.completedLessons.length >= 1) ids.add("first");
  if (state.challengeHistory.filter(item => item.correct).length >= 5) ids.add("master");
  if (state.completedLessons.length >= 5) ids.add("builder");
  if (state.xp >= 500) ids.add("quick");
  if ((ROADMAPS[state.domain] || []).length && state.completed.length >= (ROADMAPS[state.domain] || []).length) ids.add("explorer");
  if ((state.missionsCompleted || []).length >= 2) ids.add("mission-master");
  state.badges = [...ids];
  return state.badges;
}

function getDomainLabel(domainId) {
  const found = DOMAINS.find(item => item.id === domainId);
  return found ? found.name : "Your domain";
}

function getUserInitials(name) {
  if (!name) return "SF";
  return name.split(" ").slice(0, 2).map(part => part[0].toUpperCase()).join("") || "SF";
}

function markLessonComplete(state, lessonId) {
  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
    addXP(state, 25, "Lesson completed");
  }
  refreshBadges(state);
}

function awardChallengeResult(state, isCorrect, xpValue) {
  const challengeRecord = { correct: isCorrect, xp: xpValue, time: new Date().toLocaleString() };
  state.challengeHistory.push(challengeRecord);
  state.lastChallenge = challengeRecord;
  if (isCorrect) {
    addXP(state, xpValue, "Challenge solved");
    state.streak = (state.streak || 0) + 1;
    state.bestStreak = Math.max(state.bestStreak || 0, state.streak);
  } else {
    state.streak = 0;
  }
  refreshBadges(state);
}

function awardMission(state, missionId, xpValue, skillLabel) {
  if (!state.missionsCompleted) state.missionsCompleted = [];
  if (state.missionsCompleted.includes(missionId)) { return false; }

  state.missionsCompleted.push(missionId);
  state.lastMission = { id: missionId, xp: xpValue, skill: skillLabel || "General", time: new Date().toLocaleString() };
  addXP(state, xpValue, `Mission complete: ${missionId}`);
  refreshBadges(state);
  return true;
}

