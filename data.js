const DOMAINS = [
  { id: "cybersecurity", name: "Cybersecurity", icon: "🛡️", desc: "Protect systems, networks, and digital assets.", ready: true },
  { id: "webdev", name: "Web Development", icon: "🌐", desc: "Design, build, and ship modern digital products.", ready: true },
  { id: "ai", name: "Artificial Intelligence", icon: "🤖", desc: "Build intelligent systems and automation workflows.", ready: true },
  { id: "datascience", name: "Data Science", icon: "📊", desc: "Turn raw data into insight and decisions.", ready: true },
  { id: "cloud", name: "Cloud Computing", icon: "☁️", desc: "Deploy resilient systems at scale.", ready: true },
  { id: "uiux", name: "UI/UX Design", icon: "🎨", desc: "Design engaging experiences that drive adoption.", ready: true }
];

const ASSESSMENTS = {
  cybersecurity: [
    { q: "What is the purpose of a firewall?", o: ["Speed up the internet", "Filter network traffic by rules", "Store passwords", "Remove viruses from files"], a: 1, skill: "Networking" },
    { q: "Which protocol is commonly used for secure web communication?", o: ["HTTP", "FTP", "HTTPS", "Telnet"], a: 2, skill: "Cryptography" },
    { q: "What does CIA stand for in cybersecurity?", o: ["Confidentiality, Integrity, Availability", "Control, Identify, Authorize", "Central Intelligence Agency", "Cyber Intelligence Analysis"], a: 0, skill: "Fundamentals" },
    { q: "Which Linux command lists files?", o: ["cat", "ls", "cd", "rm"], a: 1, skill: "Linux" },
    { q: "What is phishing?", o: ["Fake messages that trick users into giving data", "A type of firewall", "A password manager", "Network cable testing"], a: 0, skill: "Web Security" }
  ],
  webdev: [
    { q: "Which language provides structure to a webpage?", o: ["JavaScript", "CSS", "HTML", "SQL"], a: 2, skill: "HTML" },
    { q: "What does CSS control?", o: ["Page logic", "Database queries", "Layout and styling", "Backend routing"], a: 2, skill: "CSS" },
    { q: "Which is the correct way to declare a variable in JavaScript?", o: ["var name = 1;", "const name = 1;", "let name = 1;", "Both B and C"], a: 3, skill: "JavaScript" },
    { q: "What is responsive design?", o: ["A design that adapts to different screens", "A server backup method", "A database schema", "A testing framework"], a: 0, skill: "Responsive Design" },
    { q: "Which tool is commonly used to manage dependencies in web apps?", o: ["npm", "SSH", "FTP", "Docker"], a: 0, skill: "Tooling" }
  ],
  ai: [
    { q: "What is a model in AI?", o: ["A training dataset", "A mathematical representation learned from data", "A cloud storage bucket", "A network switch"], a: 1, skill: "Modeling" },
    { q: "What does supervised learning use?", o: ["Only unlabeled data", "Labeled examples", "Hardware sensors", "Manual debugging"], a: 1, skill: "Machine Learning" },
    { q: "What does a neural network learn from?", o: ["Past errors and patterns in data", "Only static HTML code", "Operating system logs", "Browser cache"], a: 0, skill: "Neural Networks" },
    { q: "Why is data preprocessing important?", o: ["It improves model quality and consistency", "It removes all code", "It encrypts websites", "It is only for UI"], a: 0, skill: "Data Preparation" },
    { q: "Which metric is often used to evaluate classification models?", o: ["Accuracy", "File size", "RAM speed", "Screen resolution"], a: 0, skill: "Evaluation" }
  ],
  datascience: [
    { q: "What does data cleaning usually involve?", o: ["Fixing missing or inconsistent entries", "Changing your internet plan", "Compressing images", "Running a firewall"], a: 0, skill: "Data Cleaning" },
    { q: "Which visualization is best for trends over time?", o: ["Bar chart", "Line chart", "Pie chart", "Scatterplot"], a: 1, skill: "Visualization" },
    { q: "What does correlation measure?", o: ["How related two variables are", "Server uptime", "Image brightness", "Disk space"], a: 0, skill: "Statistics" },
    { q: "Which SQL statement fetches rows from a table?", o: ["SELECT", "UPDATE", "DELETE", "CREATE"], a: 0, skill: "SQL" },
    { q: "What is a common goal of predictive modeling?", o: ["Improve future forecasting", "Make code smaller", "Reduce traffic", "Write marketing copy"], a: 0, skill: "Predictive Modeling" }
  ],
  cloud: [
    { q: "What does IaaS provide?", o: ["Managed application services", "Virtualized computing resources", "Only UI components", "Only local files"], a: 1, skill: "Infrastructure" },
    { q: "What is the purpose of autoscaling?", o: ["To grow or shrink resources based on demand", "To format a database", "To design icons", "To write HTML"], a: 0, skill: "Scaling" },
    { q: "Which is a common cloud cost optimization practice?", o: ["Right-sizing resources", "Deleting every user", "Disabling backups", "Doubling all instances"], a: 0, skill: "Cost Optimization" },
    { q: "What does IAM help with?", o: ["Identity and access control", "Device drivers", "Network cable routing", "Code compilation"], a: 0, skill: "Security" },
    { q: "What is a container used for?", o: ["Packaging applications and dependencies", "Editing videos", "Creating design mockups", "Writing documentation"], a: 0, skill: "Containers" }
  ],
  uiux: [
    { q: "What is user-centered design focused on?", o: ["Technical performance only", "The needs and goals of the user", "Server response speed", "Database indexing"], a: 1, skill: "Research" },
    { q: "What does wireframing help with?", o: ["Testing early layout and flow", "Deploying to production", "Writing SQL queries", "Managing cloud rules"], a: 0, skill: "Wireframes" },
    { q: "What is information architecture?", o: ["Structuring content and navigation", "Setting up cloud infrastructure", "Optimizing database indexes", "Building APIs"], a: 0, skill: "IA" },
    { q: "Why are design systems useful?", o: ["They ensure consistency and scalability", "They replace all developers", "They are only for marketing", "They are just color palettes"], a: 0, skill: "Design Systems" },
    { q: "What is accessibility intended to support?", o: ["Inclusive use by a broad range of users", "Shorter code", "More JavaScript", "Lower storage"], a: 0, skill: "Accessibility" }
  ]
};

const DAILY_CHALLENGE = {
  scenario: "An employee receives an email asking them to verify their account using an unfamiliar link. What is the strongest indication that this could be a phishing attack?",
  question: "What is the strongest indication that the message is a phishing attempt?",
  options: [
    "The email uses urgency, a mismatched domain, and asks for login credentials.",
    "The sender has a professional signature block.",
    "It is sent during business hours.",
    "The message includes a polite greeting."
  ],
  correctIndex: 0,
  explanation: "Legitimate companies rarely ask for account verification through unfamiliar links and urgent requests. A mismatched domain and login prompt are classic phishing signals.",
  skill: "Web Security"
};

const LESSONS = {
  cybersecurity: {
    cs1: { title: "Computer Fundamentals", summary: "Learn the foundations of digital systems, operating systems, and the CIA triad.", explanation: "Security starts with understanding how systems work. You need to know how devices process data, how operating systems manage resources, and how confidentiality, integrity, and availability protect information.", example: "A password manager protects confidentiality by hiding credentials, while backups preserve availability.", concepts: ["Hardware basics", "Operating systems", "CIA triad", "Threat awareness"] },
    cs2: { title: "Networking Fundamentals", summary: "Understand IP, DNS, ports, and traffic patterns across networks.", explanation: "Networks carry communication between systems. Packet flow, IP addressing, DNS resolution, and port usage help you analyze and secure traffic.", example: "When a browser loads a website, DNS resolves the domain name to an IP, then HTTPS uses port 443.", concepts: ["IP addressing", "DNS", "TCP/UDP", "Ports"] },
    cs3: { title: "Linux Fundamentals", summary: "Practice the terminal, permissions, and system administration basics.", explanation: "Linux is a core operating system in cybersecurity. Mastering commands, file permissions, and process control gives you a practical foundation for incident response and hardening.", example: "Using ls, chmod, and ps helps you inspect files, adjust access, and manage processes.", concepts: ["Terminal commands", "Permissions", "Filesystems", "Processes"] },
    cs4: { title: "Network Security", summary: "Protect traffic with firewalls, segmentation, and monitoring.", explanation: "Network security reduces the attack surface by filtering traffic, enforcing access policies, and monitoring suspicious patterns.", example: "A firewall can allow web traffic on port 443 while blocking unapproved ports and suspicious IP ranges.", concepts: ["Firewalls", "IDS/IPS", "Segmentation", "Monitoring"] },
    cs5: { title: "Ethical Hacking", summary: "Explore recon, scanning, and vulnerability discovery in a legal setting.", explanation: "Ethical hackers test systems to uncover weaknesses before malicious actors can exploit them. This requires careful planning, scope definition, and permission.", example: "A pentester may scan exposed ports to identify open services before reporting the risk.", concepts: ["Reconnaissance", "Scanning", "Enumeration", "Responsible testing"] },
    cs6: { title: "Web Security", summary: "Defend applications against common attacks and exploit patterns.", explanation: "Web security focuses on protecting the browser-server layer from vulnerabilities like injection, broken authentication, and XSS.", example: "Using input validation prevents malicious payloads from being executed in a query or script context.", concepts: ["OWASP", "XSS", "SQLi", "Session control"] },
    cs7: { title: "Penetration Testing", summary: "Run structured, evidence-based testing to validate detection and defense.", explanation: "Penetration testing uses a lifecycle approach: gather intelligence, map vulnerabilities, exploit in a controlled setting, and report findings with remediation advice.", example: "A test may validate whether an authentication flaw allows escalation, then document and patch it.", concepts: ["Planning", "Exploitation", "Privilege escalation", "Reporting"] },
    cs8: { title: "Security Operations", summary: "Monitor incidents, triage alerts, and maintain a resilient defense posture.", explanation: "Security operations combines monitoring, investigations, and response workflows. It keeps the organization aware of emerging threats and reduces dwell time.", example: "SOC analysts correlate alerts from SIEM tools to spot patterns like brute-force attempts across multiple accounts.", concepts: ["SIEM", "Incident response", "Alert triage", "Monitoring"] }
  },
  webdev: { 
    wd1: { title: "HTML Foundations", summary: "Build the structure of modern web pages.", explanation: "HTML defines the semantics and content structure of a page. It organizes text, headings, navigation, forms, and media.", example: "A landing page uses headings, nav links, and buttons to guide the user journey.", concepts: ["Elements", "Attributes", "Semantic markup", "Forms"] },
    wd2: { title: "CSS Fundamentals", summary: "Apply layout, spacing, typography, and responsive design.", explanation: "CSS controls the visual layer of a site. It shapes colors, spacing, alignment, and transitions across different screen sizes.", example: "A card layout with hover states and consistent spacing gives the interface a polished feel.", concepts: ["Selectors", "Box model", "Flexbox", "Grid"] },
    wd3: { title: "JavaScript Essentials", summary: "Add behavior and dynamic interactions to your page.", explanation: "JavaScript allows user interactions, animations, DOM updates, and logic for forms and dashboards.", example: "A button can open a modal, validate a form, or update a chart on click.", concepts: ["Variables", "Functions", "Events", "DOM manipulation"] },
    wd4: { title: "Responsive UI", summary: "Build layouts that adapt to mobile and desktop screens.", explanation: "Responsive design ensures that apps remain comfortable and usable on all screen sizes, helping content adapt intelligently.", example: "A card grid turns into a single column on mobile while keeping a multi-column layout on desktop.", concepts: ["Media queries", "Breakpoints", "Fluid layouts", "Accessibility"] },
    wd5: { title: "Frontend Thinking", summary: "Design interfaces with usability and clarity in mind.", explanation: "Strong frontend work balances aesthetics, performance, and usability. Every interaction should help the user accomplish a goal.", example: "A clean dashboard groups actions, highlights progress, and reduces visual noise.", concepts: ["UX patterns", "Performance", "User flow", "Design systems"] }
  },
  ai: {
    ai1: { title: "AI Fundamentals", summary: "Understand what models, tasks, and learning paradigms are.", explanation: "Artificial intelligence systems learn patterns from data and use them to make predictions or generate outputs.", example: "A recommendation model predicts which course a learner is likely to enjoy based on prior behavior.", concepts: ["Supervised learning", "Unsupervised learning", "Models", "Tasks"] },
    ai2: { title: "Data Preparation", summary: "Clean and structure information for reliable machine learning.", explanation: "Good data quality is essential for model accuracy. The process includes handling missing values, scaling, and splitting datasets.", example: "Normalizing numeric values prevents one feature from dominating another in training.", concepts: ["Cleaning", "Normalization", "Splitting", "Validation"] },
    ai3: { title: "Neural Networks", summary: "Build intuition for how deep learning systems process patterns.", explanation: "Neural networks use layers of connected nodes to learn complex patterns in data such as speech, vision, and language.", example: "Image models learn edges and textures across layers before recognizing a complete object.", concepts: ["Layers", "Weights", "Activation", "Backpropagation"] },
    ai4: { title: "Evaluation", summary: "Measure the quality of your model and avoid overconfidence.", explanation: "Evaluation tells you whether your model is solving the right problem and whether it generalizes beyond training data.", example: "Accuracy and precision reveal how often a model is correct and how often it misclassifies important cases.", concepts: ["Accuracy", "Precision", "Recall", "Validation"] },
    ai5: { title: "AI Product Thinking", summary: "Use AI to create useful, trustworthy experiences.", explanation: "The best AI systems solve real user problems and remain explainable, safe, and transparent in how they operate.", example: "An AI tutor can explain a wrong answer and suggest the next practice exercise instead of only grading it.", concepts: ["Human-centered AI", "Safety", "Trust", "UX"] }
  },
  datascience: {
    ds1: { title: "Data Exploration", summary: "Inspect raw data and identify patterns, anomalies, and value.", explanation: "Data exploration helps analysts understand what is in the data and whether the signals are trustworthy.", example: "A table plot may reveal unusual spikes or missing values that need investigation.", concepts: ["Distribution", "Outliers", "Missing values", "Summary stats"] },
    ds2: { title: "Visualization", summary: "Present data clearly with strong visual storytelling.", explanation: "Charts make it easier to explain trends, compare categories, and communicate key insights to stakeholders.", example: "A line chart can show the change in engagement over time across several campaigns.", concepts: ["Charts", "Storytelling", "Encoding", "Axes"] },
    ds3: { title: "Statistics", summary: "Apply probability and correlation to draw grounded conclusions.", explanation: "Statistics gives you a framework for measuring uncertainty and comparing patterns in data.", example: "A correlation analysis can reveal whether traffic volume is tied to conversion rate.", concepts: ["Probability", "Correlation", "Variance", "Hypothesis testing"] },
    ds4: { title: "SQL for Analysis", summary: "Query and aggregate data with clarity and precision.", explanation: "SQL helps you filter, aggregate, and join data from relational tables to answer business questions.", example: "A query can calculate monthly retention by combining user events and signup tables.", concepts: ["SELECT", "JOIN", "GROUP BY", "Filters"] },
    ds5: { title: "Predictive Modeling", summary: "Turn patterns into future-facing decisions.", explanation: "Predictive models estimate outcomes based on past observations, enabling smarter planning across product, pricing, and operations.", example: "A churn prediction model flags users at risk before they cancel a subscription.", concepts: ["Feature engineering", "Training", "Validation", "Forecasting"] }
  },
  cloud: {
    cl1: { title: "Cloud Foundations", summary: "Understand core cloud concepts, regions, and resource models.", explanation: "Cloud computing offers scalable infrastructure and managed services that simplify deployment and operations.", example: "A team can spin up a web server in minutes instead of buying and maintaining hardware.", concepts: ["Regions", "Availability zones", "Compute", "Storage"] },
    cl2: { title: "Networking in the Cloud", summary: "Learn VPCs, routing, load balancing, and secure connectivity.", explanation: "Networking is essential for secure and efficient cloud workloads, including public internet access and private communication.", example: "A load balancer spreads requests across multiple instances to improve resilience and performance.", concepts: ["VPC", "DNS", "Load balancing", "Routing"] },
    cl3: { title: "Containers & Orchestration", summary: "Package and manage applications reliably across environment boundaries.", explanation: "Containers help applications run consistently across development and production, while orchestrators automate deployment and recovery.", example: "A Kubernetes cluster keeps multiple application replicas available even when one node fails.", concepts: ["Containers", "Docker", "Kubernetes", "Service discovery"] },
    cl4: { title: "Security & Identity", summary: "Protect resources with least privilege and access controls.", explanation: "Cloud security requires careful policy design, identity management, and network segmentation.", example: "IAM roles limit application permissions to only the resources each service needs.", concepts: ["IAM", "Policies", "Encryption", "Audit logs"] },
    cl5: { title: "Cost & Reliability", summary: "Design systems that are stable, efficient, and scalable.", explanation: "Well-architected cloud systems carefully balance cost, availability, and performance to avoid waste.", example: "Autoscaling and monitoring allow workloads to expand during demand spikes without overprovisioning all the time.", concepts: ["Autoscaling", "Monitoring", "Costs", "Resilience"] }
  },
  uiux: {
    ux1: { title: "UX Research", summary: "Learn how to understand user problems before adding features.", explanation: "User research reveals the underlying needs, pain points, and goals that should guide your interface decisions.", example: "Interviewing users can uncover that a form is too long and creates friction during onboarding.", concepts: ["Interviews", "Surveys", "Pain points", "Personas"] },
    ux2: { title: "Wireframing", summary: "Turn high-level ideas into concrete interaction flows.", explanation: "Wireframes provide a structure for layout, content hierarchy, and the journey between screens.", example: "A simple mobile signup flow can be sketched to test whether the steps are clear and quick.", concepts: ["Layout", "Hierarchy", "Navigation", "Flow"] },
    ux3: { title: "Design Systems", summary: "Create reusable components and consistent patterns.", explanation: "Design systems make interfaces scalable, maintainable, and easier for teams to build together.", example: "Reusable buttons, cards, and form fields ensure every screen feels consistent.", concepts: ["Components", "Tokens", "Patterns", "Consistency"] },
    ux4: { title: "Accessibility", summary: "Ensure digital products are usable by more people.", explanation: "Accessibility means designing for contrast, keyboard use, screen readers, and careful semantics.", example: "Clear labels and focus states help keyboard users navigate the product without confusion.", concepts: ["Contrast", "Focus", "Keyboard support", "ARIA"] },
    ux5: { title: "Prototyping", summary: "Validate interfaces before scaling into larger products.", explanation: "Prototypes enable testing flows, interactions, and user expectations without the cost of full implementation.", example: "A clickable prototype reveals whether a user can complete onboarding without confusion.", concepts: ["Prototypes", "Testing", "Feedback", "Iteration"] }
  }
};

const ROADMAPS = {
  cybersecurity: [
    { id: "cs1", title: "Computer Fundamentals", skill: "Fundamentals", desc: "How hardware, operating systems and the CIA triad fit together.", time: "4 hrs", level: "Beginner" },
    { id: "cs2", title: "Networking Fundamentals", skill: "Networking", desc: "IP, DNS, TCP vs UDP, ports and firewalls.", time: "6 hrs", level: "Beginner" },
    { id: "cs3", title: "Linux Fundamentals", skill: "Linux", desc: "The terminal, file permissions and process management.", time: "6 hrs", level: "Beginner" },
    { id: "cs4", title: "Network Security", skill: "Networking", desc: "Firewalls, VPNs, IDS/IPS and secure network design.", time: "8 hrs", level: "Intermediate" },
    { id: "cs5", title: "Ethical Hacking", skill: "Cryptography", desc: "Reconnaissance, scanning and safe exploitation practice.", time: "10 hrs", level: "Intermediate" },
    { id: "cs6", title: "Web Security", skill: "Web Security", desc: "OWASP Top 10, SQL injection, XSS and phishing defense.", time: "8 hrs", level: "Intermediate" },
    { id: "cs7", title: "Penetration Testing", skill: "Web Security", desc: "Plan and run a structured penetration test.", time: "12 hrs", level: "Advanced" },
    { id: "cs8", title: "Security Operations", skill: "Fundamentals", desc: "Monitoring, incident response and SIEM basics.", time: "10 hrs", level: "Advanced" }
  ],
  webdev: [
    { id: "wd1", title: "HTML Foundations", skill: "HTML", desc: "Build the content structure of a website.", time: "3 hrs", level: "Beginner" },
    { id: "wd2", title: "CSS Fundamentals", skill: "CSS", desc: "Styling layouts, spacing, and visual systems.", time: "4 hrs", level: "Beginner" },
    { id: "wd3", title: "JavaScript Essentials", skill: "JavaScript", desc: "Add interactivity and dynamic client-side behavior.", time: "5 hrs", level: "Beginner" },
    { id: "wd4", title: "Responsive UI", skill: "Responsive Design", desc: "Adapt layouts to devices and user contexts.", time: "6 hrs", level: "Intermediate" },
    { id: "wd5", title: "Frontend Thinking", skill: "Tooling", desc: "Refine workflows, performance, and user experience.", time: "7 hrs", level: "Intermediate" }
  ],
  ai: [
    { id: "ai1", title: "AI Fundamentals", skill: "Modeling", desc: "Understand the core concepts behind intelligent systems.", time: "4 hrs", level: "Beginner" },
    { id: "ai2", title: "Data Preparation", skill: "Machine Learning", desc: "Clean, label, and shape the data models consume.", time: "5 hrs", level: "Beginner" },
    { id: "ai3", title: "Neural Networks", skill: "Neural Networks", desc: "Learn how layered architectures detect patterns.", time: "6 hrs", level: "Intermediate" },
    { id: "ai4", title: "Evaluation", skill: "Evaluation", desc: "Measure performance and avoid misleading results.", time: "4 hrs", level: "Intermediate" },
    { id: "ai5", title: "AI Product Thinking", skill: "UX", desc: "Turn AI features into valuable and trustworthy experiences.", time: "5 hrs", level: "Advanced" }
  ],
  datascience: [
    { id: "ds1", title: "Data Exploration", skill: "Data Cleaning", desc: "Understand distributions, gaps, and anomalies.", time: "4 hrs", level: "Beginner" },
    { id: "ds2", title: "Visualization", skill: "Visualization", desc: "Map stories and trends in a compelling way.", time: "4 hrs", level: "Beginner" },
    { id: "ds3", title: "Statistics", skill: "Statistics", desc: "Measure uncertainty and structure insights.", time: "5 hrs", level: "Intermediate" },
    { id: "ds4", title: "SQL for Analysis", skill: "SQL", desc: "Query and aggregate data with confidence.", time: "6 hrs", level: "Intermediate" },
    { id: "ds5", title: "Predictive Modeling", skill: "Predictive Modeling", desc: "Use patterns to estimate future outcomes.", time: "7 hrs", level: "Advanced" }
  ],
  cloud: [
    { id: "cl1", title: "Cloud Foundations", skill: "Infrastructure", desc: "Learn compute, storage, and regional concepts.", time: "4 hrs", level: "Beginner" },
    { id: "cl2", title: "Networking in the Cloud", skill: "Networking", desc: "Explore VPCs, routing, balancing, and resiliency.", time: "5 hrs", level: "Beginner" },
    { id: "cl3", title: "Containers & Orchestration", skill: "Containers", desc: "Package and scale applications consistently.", time: "6 hrs", level: "Intermediate" },
    { id: "cl4", title: "Security & Identity", skill: "Security", desc: "Control access and guard critical resources.", time: "6 hrs", level: "Intermediate" },
    { id: "cl5", title: "Cost & Reliability", skill: "Scaling", desc: "Design efficient and resilient cloud systems.", time: "7 hrs", level: "Advanced" }
  ],
  uiux: [
    { id: "ux1", title: "UX Research", skill: "Research", desc: "Understand the behaviors and needs behind the product.", time: "4 hrs", level: "Beginner" },
    { id: "ux2", title: "Wireframing", skill: "Wireframes", desc: "Sketch flows and layout structure before building.", time: "4 hrs", level: "Beginner" },
    { id: "ux3", title: "Design Systems", skill: "Design Systems", desc: "Create scalable, reusable components and patterns.", time: "5 hrs", level: "Intermediate" },
    { id: "ux4", title: "Accessibility", skill: "Accessibility", desc: "Design for inclusion and usability across devices.", time: "5 hrs", level: "Intermediate" },
    { id: "ux5", title: "Prototyping", skill: "Prototyping", desc: "Validate interaction ideas with rapid feedback loops.", time: "6 hrs", level: "Advanced" }
  ]
};

const LEVELS = [
  { xp: 0, name: "Curious Beginner" },
  { xp: 200, name: "Apprentice" },
  { xp: 500, name: "Practitioner" },
  { xp: 900, name: "Skilled Explorer" },
  { xp: 1400, name: "Security Explorer" },
  { xp: 2000, name: "Expert" }
];

const BADGES = [
  { id: "first", icon: "🔥", name: "First Step", desc: "Complete your first lesson." },
  { id: "quick", icon: "🧠", name: "Quick Learner", desc: "Score 80%+ on a quiz." },
  { id: "master", icon: "🎯", name: "Challenge Master", desc: "Complete 5 practical challenges." },
  { id: "builder", icon: "🚀", name: "Skill Builder", desc: "Complete 5 roadmap modules." },
  { id: "explorer", icon: "🏆", name: "Domain Explorer", desc: "Finish an entire skill domain." }
];

const AI_RESPONSES = {
  default: "I can help you plan your next learning step, explain a concept, or turn a weak area into a challenge you can practice.",
  next: "Your strongest next move is to revisit the first unfinished stage in your roadmap and finish one small win. You are already building momentum.",
  networking: "Networking is about how devices communicate across a system. Think in terms of IP addresses, ports, protocols, and access control.",
  wrong: "When you miss a question, focus on the concept behind it: identify the core rule first, then work backward to the example or scenario.",
  challenge: "Try a short security scenario. Look for unusual sender behavior, urgency, mismatched links, and requests for sensitive information."
};

const MODULE_LIBRARY = {
  cybersecurity: [
    { id: 1, title: "Introduction to Cybersecurity", description: "Understand the foundation of cyber defense and security principles.", lessons: [
      { title: "What is Cybersecurity?", summary: "Learn the basic goals and risk model behind secure systems." },
      { title: "Security Principles", summary: "Review confidentiality, integrity, and availability in real systems." },
      { title: "Threat Landscape", summary: "Identify common threats, attackers, and vulnerabilities." },
      { title: "Security Mindset", summary: "Build an approach for thinking like a security professional." }
    ] },
    { id: 2, title: "Network Security Basics", description: "Study how traffic, protocols, and firewall rules protect modern systems.", lessons: [
      { title: "Networking Fundamentals", summary: "Understand how devices communicate and exchange data." },
      { title: "Firewall Rules", summary: "Learn how policies filter traffic and reduce exposure." },
      { title: "Ports and Services", summary: "Review common ports and why they matter for defense." },
      { title: "Secure Network Design", summary: "Explore segmentation, monitoring, and access control." }
    ] },
    { id: 3, title: "Linux and Shell Skills", description: "Practice the command line tools used in security operations and troubleshooting.", lessons: [
      { title: "Linux Essentials", summary: "Master the shell, files, and system navigation." },
      { title: "Permissions", summary: "Learn how access control shapes security outcomes." },
      { title: "Processes and Logs", summary: "Inspect activity and identify suspicious behavior." },
      { title: "Troubleshooting", summary: "Use practical commands to investigate and solve incidents." }
    ] },
    { id: 4, title: "Web Security", description: "Explore common application risks and prevention techniques.", lessons: [
      { title: "Web Attacks", summary: "Understand the most common exploitation paths against websites." },
      { title: "XSS and SQLi", summary: "Learn how input handling creates opportunities for abuse." },
      { title: "Authentication Basics", summary: "Review login controls, tokens, and session protection." },
      { title: "Secure Applications", summary: "Use validation and best practices to reduce vulnerabilities." }
    ] },
    { id: 5, title: "Ethical Hacking and Defense", description: "Apply knowledge by testing systems safely and responding to threats.", lessons: [
      { title: "Reconnaissance", summary: "Find information safely and responsibly before testing." },
      { title: "Vulnerability Discovery", summary: "Learn how to identify risky patterns in systems." },
      { title: "Defense Response", summary: "Understand how teams respond to and contain threats." },
      { title: "Final Security Review", summary: "Review performance, resilience, and reporting strategies." }
    ] }
  ],
  webdev: [
    { id: 1, title: "HTML Foundations", description: "Learn how websites are structured and how content is organized semantically.", lessons: [
      { title: "What is HTML?", summary: "Understand document structure and page semantics." },
      { title: "Headings and Layout", summary: "Build clear hierarchy for readable interfaces." },
      { title: "Forms and Inputs", summary: "Create user entry flows and data capture patterns." },
      { title: "Semantic Structure", summary: "Use accessible and structured markup for better UX." }
    ] },
    { id: 2, title: "CSS Fundamentals", description: "Design polished interfaces using layout, color, spacing, and responsiveness.", lessons: [
      { title: "CSS Basics", summary: "Review selectors, declarations, and cascade rules." },
      { title: "Box Model", summary: "Control spacing, sizing, borders, and layout behavior." },
      { title: "Flexbox and Grid", summary: "Create modern layouts that adapt to screen size." },
      { title: "Responsive Styling", summary: "Build UI that feels good on mobile and desktop." }
    ] },
    { id: 3, title: "JavaScript Essentials", description: "Add interactivity and logic to your web applications.", lessons: [
      { title: "Variables and Data", summary: "Understand values, types, and how data flows in code." },
      { title: "Functions", summary: "Organize logic into reusable blocks of behavior." },
      { title: "DOM Interactions", summary: "Respond to user actions and update the interface." },
      { title: "Events and Logic", summary: "Build dynamic interactions with real behavior." }
    ] },
    { id: 4, title: "Frontend Design Systems", description: "Build clean, maintainable interfaces with reusable patterns.", lessons: [
      { title: "UI Patterns", summary: "Use consistent patterns for forms, cards, and navigation." },
      { title: "Design Systems", summary: "Scale components and keep styles predictable." },
      { title: "Accessibility", summary: "Create interfaces that work for everyone." },
      { title: "Performance", summary: "Improve speed and polish without unnecessary complexity." }
    ] },
    { id: 5, title: "Frontend Project Thinking", description: "Turn practical knowledge into a complete digital product approach.", lessons: [
      { title: "Project Planning", summary: "Organize goals, modules, and milestones for a product." },
      { title: "User Flow", summary: "Arrange actions and screens to guide users clearly." },
      { title: "Testing and Iteration", summary: "Use evaluation to improve usability and reliability." },
      { title: "Launch Thinking", summary: "Prepare a polished project for real-world delivery." }
    ] }
  ],
  ai: [
    { id: 1, title: "Introduction to Artificial Intelligence", description: "Learn the basics, history, and core ideas behind AI systems.", lessons: [
      { title: "What is AI?", summary: "Understand what makes a system intelligent and useful." },
      { title: "History of AI", summary: "Review major milestones and turning points in AI development." },
      { title: "Types of AI", summary: "Differentiate narrow, general, and task-specific systems." },
      { title: "AI Applications", summary: "Explore how AI impacts everyday tools and workflows." }
    ] },
    { id: 2, title: "Machine Learning Basics", description: "Understand the building blocks of supervised and unsupervised learning.", lessons: [
      { title: "Introduction to ML", summary: "Learn how learning from data becomes prediction." },
      { title: "Supervised Learning", summary: "Train models using labeled examples and known outcomes." },
      { title: "Unsupervised Learning", summary: "Identify patterns in unlabeled examples." },
      { title: "Model Training", summary: "See how data, labels, and iteration shape performance." }
    ] },
    { id: 3, title: "Neural Networks", description: "Explore how layered models capture complex patterns in data.", lessons: [
      { title: "Neural Networks", summary: "Understand the role of neurons and interconnected layers." },
      { title: "Layers and Activation", summary: "Review how signals flow and transform across a network." },
      { title: "Deep Learning", summary: "Learn how deeper architectures solve harder tasks." },
      { title: "Practical Applications", summary: "See neural networks used in vision, language, and prediction." }
    ] },
    { id: 4, title: "AI Tools and Applications", description: "Work with modern tools and workflows used in AI-powered products.", lessons: [
      { title: "AI Tools", summary: "Discover common toolchains for experimentation and delivery." },
      { title: "Generative AI", summary: "Understand how generation models create text and media." },
      { title: "Prompting", summary: "Write stronger instructions for better AI responses." },
      { title: "AI Productivity", summary: "Use AI to streamline research, writing, and planning." }
    ] },
    { id: 5, title: "Real-World AI", description: "Connect theory to responsible, useful, and ethical AI deployment.", lessons: [
      { title: "Real-World AI", summary: "Study examples of AI used in business and society." },
      { title: "AI Projects", summary: "Review how prototypes become real experiences." },
      { title: "AI Ethics", summary: "Consider fairness, transparency, and risk in system design." },
      { title: "Final Practical Application", summary: "Build a thoughtful AI solution with clear objectives and constraints." }
    ] }
  ],
  datascience: [
    { id: 1, title: "Data Fundamentals", description: "Learn how raw information becomes a structured story for decision-making.", lessons: [
      { title: "Data Basics", summary: "Understand data types, structure, and real-world sources." },
      { title: "Data Quality", summary: "Review missing values, inconsistencies, and anomalies." },
      { title: "Data Collection", summary: "Study where useful information comes from in practice." },
      { title: "Preparing Data", summary: "Clean and shape information before deeper analysis." }
    ] },
    { id: 2, title: "Statistics and Analysis", description: "Use statistical thinking to reason clearly about patterns and uncertainty.", lessons: [
      { title: "Probability", summary: "Learn how chance models uncertainty and signal." },
      { title: "Correlation", summary: "Measure how variables move together." },
      { title: "Descriptive Statistics", summary: "Summarize data clearly and accurately." },
      { title: "Hypothesis Testing", summary: "Make evidence-based decisions using data." }
    ] },
    { id: 3, title: "Visualization", description: "Turn numbers into clear visual stories that communicate insight.", lessons: [
      { title: "Chart Basics", summary: "Learn which chart type works for which question." },
      { title: "Storytelling", summary: "Build a narrative around trends, comparisons, and outliers." },
      { title: "Dashboards", summary: "Design views that let users explore insight quickly." },
      { title: "Readability", summary: "Improve clarity, contrast, and accessibility in visuals." }
    ] },
    { id: 4, title: "SQL and Data Queries", description: "Query databases to filter, aggregate, and join records confidently.", lessons: [
      { title: "SELECT Queries", summary: "Retrieve relevant rows and columns from a table." },
      { title: "Filtering", summary: "Narrow the dataset to the important records." },
      { title: "Grouping", summary: "Aggregate data to surface trends and totals." },
      { title: "Joins", summary: "Combine data from multiple tables into one answer." }
    ] },
    { id: 5, title: "Predictive Modeling", description: "Use features and models to forecast outcomes and guide decisions.", lessons: [
      { title: "Feature Engineering", summary: "Transform raw signals into useful model inputs." },
      { title: "Model Evaluation", summary: "Measure bias, variance, and performance quality." },
      { title: "Forecasting", summary: "Predict future outcomes from historical data." },
      { title: "Ethics in Data", summary: "Assess responsible use and impact on people." }
    ] }
  ],
  cloud: [
    { id: 1, title: "Cloud Foundations", description: "Learn the main concepts behind modern compute, storage, and platform services.", lessons: [
      { title: "Cloud Basics", summary: "Understand why cloud platforms changed software delivery." },
      { title: "Regions and Zones", summary: "Learn how geography impacts availability and latency." },
      { title: "Compute", summary: "Review virtual machines, containers, and managed services." },
      { title: "Storage", summary: "Understand object, block, and file storage patterns." }
    ] },
    { id: 2, title: "Networking in the Cloud", description: "Review routing, private networks, load balancing, and secure access.", lessons: [
      { title: "VPC and Routing", summary: "Understand network topology in a cloud environment." },
      { title: "Load Balancing", summary: "Distribute traffic for reliability and performance." },
      { title: "DNS Basics", summary: "Map service names to infrastructure and endpoints." },
      { title: "Traffic Security", summary: "Use controls to restrict unwanted network access." }
    ] },
    { id: 3, title: "Containers and Orchestration", description: "Package and scale workloads with modern deployment patterns.", lessons: [
      { title: "Containers", summary: "Package software so it behaves consistently in any environment." },
      { title: "Docker Basics", summary: "Learn how container images and runtime behavior work together." },
      { title: "Kubernetes", summary: "Manage application scale, recovery, and deployment." },
      { title: "Deployment Patterns", summary: "Understand production-ready architecture choices." }
    ] },
    { id: 4, title: "Cloud Security", description: "Protect cloud resources with identity, policy, and monitoring controls.", lessons: [
      { title: "IAM", summary: "Control who can access what and under which conditions." },
      { title: "Policies", summary: "Use least privilege to reduce risk and improve clarity." },
      { title: "Monitoring", summary: "Detect drift, changes, and suspicious activity." },
      { title: "Encryption", summary: "Protect data in transit and at rest." }
    ] },
    { id: 5, title: "Scaling and Reliability", description: "Design resilient systems that meet demand without unnecessary waste.", lessons: [
      { title: "Autoscaling", summary: "Expand or shrink workloads as demand changes." },
      { title: "Reliability", summary: "Think through failover, recovery, and availability." },
      { title: "Cost Control", summary: "Balance performance with budget awareness." },
      { title: "Operational Readiness", summary: "Prepare your systems for smart, sustainable scaling." }
    ] }
  ],
  uiux: [
    { id: 1, title: "UX Research", description: "Learn how user needs and pain points define product direction.", lessons: [
      { title: "User Research", summary: "Identify what users really need and value." },
      { title: "Interviews", summary: "Use conversations to uncover patterns and motivations." },
      { title: "Personas", summary: "Summarize user segments to guide product decisions." },
      { title: "Pain Points", summary: "Turn user frustrations into design opportunities." }
    ] },
    { id: 2, title: "Wireframing and Flow", description: "Shape early ideas into clear screens and interaction paths.", lessons: [
      { title: "Wireframes", summary: "Build low-fidelity layout structure quickly." },
      { title: "User Flows", summary: "Plan the steps a user takes to reach a goal." },
      { title: "Information Hierarchy", summary: "Organize content so the most important tasks stand out." },
      { title: "Navigation", summary: "Create paths that feel intuitive and easy to follow." }
    ] },
    { id: 3, title: "Design Systems", description: "Create consistent components that scale across products.", lessons: [
      { title: "Components", summary: "Build repeatable pieces like cards and buttons." },
      { title: "Tokens", summary: "Standardize colors, spacing, and type decisions." },
      { title: "Consistency", summary: "Keep patterns coherent across all product screens." },
      { title: "Accessibility", summary: "Design for contrast, clarity, and inclusive interaction." }
    ] },
    { id: 4, title: "Prototyping", description: "Turn ideas into interactive experiences for feedback and validation.", lessons: [
      { title: "Prototype Basics", summary: "Map the core pieces of a working interface." },
      { title: "Feedback Loops", summary: "Use testing to improve usability and comprehension." },
      { title: "Interactions", summary: "Design moments that feel responsive and natural." },
      { title: "Iteration", summary: "Refine the product by learning from real user behavior." }
    ] },
    { id: 5, title: "Design for Real Products", description: "Prepare product thinking that balances aesthetics, usability, and strategy.", lessons: [
      { title: "Product Thinking", summary: "Connect product design goals to measurable outcomes." },
      { title: "Design Critique", summary: "Evaluate choices with clarity and constructive feedback." },
      { title: "Project Delivery", summary: "Move from idea and prototype into real implementation." },
      { title: "Final Product Review", summary: "Review quality, impact, and the next iteration." }
    ] }
  ]
};

function getModulesForDomain(domainId) {
  return MODULE_LIBRARY[domainId] || MODULE_LIBRARY.cybersecurity;
}

function getModuleById(domainId, moduleId) {
  const modules = getModulesForDomain(domainId);
  return modules.find(module => Number(module.id) === Number(moduleId)) || modules[0];
}

