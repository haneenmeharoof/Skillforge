const NAV = [
  ["dashboard.html", "📊 Dashboard"],
  ["roadmap.html", "🗺️ My Roadmap"],
  ["learning.html", "📘 Learn"],
  ["games.html", "🎮 Games & Missions"],
  ["challenges.html", "⚔️ Challenges"],
  ["skillgaps.html", "🎯 Skill Gaps"],
  ["achievements.html", "🏅 Achievements"],
  ["assistant.html", "🤖 AI Assistant"],
  ["profile.html", "👤 Profile"]
];

function requireLogin() {
  const state = getState();
  if (!state.user) {
    window.location.href = "login.html";
    return null;
  }
  return state;
}

function requireDomain() {
  const state = requireLogin();
  if (state && !state.domain) {
    window.location.href = "select.html";
    return null;
  }
  return state;
}

function renderSidebar() {
  const side = document.getElementById("sidebar");
  if (!side) return;

  const here = window.location.pathname.split("/").pop() || "dashboard.html";
  side.innerHTML = `
    <div class="logo" style="margin-bottom: 1rem; display: inline-block;">SkillForge</div>
    <nav aria-label="Main navigation">
      ${NAV.map(([href, label]) => `<a href="${href}" class="${href === here ? "active" : ""}">${label}</a>`).join("")}
    </nav>
  `;

  const toggle = document.getElementById("mobileToggle");
  if (toggle) {
    toggle.addEventListener("click", () => side.classList.toggle("open"));
  }
}

function animateBars() {
  setTimeout(() => {
    document.querySelectorAll(".bar > i[data-w]").forEach(bar => {
      bar.style.width = `${bar.dataset.w}%`;
    });
  }, 80);
}

function renderTopProfile(state) {
  const profile = document.getElementById("topProfile");
  if (!profile) return;
  const name = state.user ? state.user.name : "Learner";
  profile.innerHTML = `
    <div class="profile-pill">
      <span class="avatar">${getUserInitials(name)}</span>
      <span>${name}</span>
    </div>
  `;
}

