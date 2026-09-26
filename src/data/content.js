export const profile = {
  name: "Pallavi Jain",
  tagline: "Full-stack developer building AI agents and reliable cloud products.",
  availability: "open to software engineering and AI opportunities",
  bio: [
    "I'm a Computer Science and Engineering undergraduate in Delhi, focused on full-stack development, backend systems, and practical AI applications.",
    "I build products across React, Node.js, Next.js, Python, and Azure—from agentic research workflows to incident remediation systems and campus platforms.",
    "Outside development, I lead technical initiatives, run workshops, participate in hackathons, and play and teach piano as part of my hobby.",
  ],
  email: "jainpallavi.delhi@gmail.com",
  location: "Delhi, India",
  socials: [
    { label: "GitHub", url: "https://github.com/pallavithegod" },
    { label: "LinkedIn", url: "https://linkedin.com/in/pallavii-" },
    { label: "X", url: "https://x.com/Pallavi_jain06" },
    { label: "Email", url: "mailto:jainpallavi.delhi@gmail.com" },
    { label: "Website", url: "https://pallavijain.vercel.app" },
  ],
};

export const skills = [
  { group: "Languages", items: ["Java", "Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"] },
  { group: "Frameworks & Libraries", items: ["React.js", "Node.js", "Next.js", "Tailwind CSS", "REST APIs", "LangGraph", "WebLLM"] },
  { group: "Cloud & DevOps", items: ["Microsoft Azure", "AWS", "Docker", "Jenkins", "CI/CD", "Git", "Vercel"] },
  { group: "Core", items: ["Data Structures & Algorithms", "OOP", "DBMS", "System Design", "Full-stack Development", "RAG", "LLMs"] },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    org: "Mercury AI",
    location: "Remote",
    period: "Oct 2025 – Dec 2025",
    bullets: [
      "Developed core product features with React.js and Node.js, including backend data flows and REST API integrations.",
      "Set up debugging pipelines and structured Git workflows to improve deployment reliability.",
    ],
  },
  {
    role: "Web Development Head",
    org: "ANVESHAN Tech Society",
    location: "Delhi, India",
    bullets: [
      "Led hackathons & technical initiatives and delivered web development workshops for 1k+ peers and students.",
    ],
  },
];

export const projects = [
  {
    name: "RecallOps (Incident Memory Agent)",
    repo: "https://github.com/pallavithegod/ima-agent",
    live: "https://imagent-zeta.vercel.app",
    stack: ["Python", "LangGraph", "Azure", "React", "TypeScript", "LLMs"],
    bullets: [
      "Built a DevOps assistant that monitors deployments, triages alerts, and recalls root-cause analyses from previous incidents.",
      "Engineered a LangGraph remediation pipeline that grounds diagnoses and suggested fixes in indexed logs and incident history.",
      "Integrated GitHub, Vercel, and Render workflows with deployment health, failure history, on-call handoffs, reports, and approved draft pull requests.",
    ],
  },
  {
    name: "Multi-Step Research Agent",
    repo: "https://github.com/pallavithegod/research-agent",
    stack: ["Next.js", "FastAPI", "AI Agents", "SerpApi", "x402", "Azure"],
    bullets: [
      "Designed an agent orchestrator that breaks natural-language queries into research steps and returns evidence-backed reports.",
      "Implemented Quick, Deep, and Compare workflows with source policies, evidence-quality scoring, and follow-up suggestions.",
      "Built an asynchronous FastAPI backend and analytical Next.js workspace, with an Azure Container Apps deployment design.",
    ],
  },
  {
    name: "Sanchit",
    repo: "https://github.com/garvit-arora/sanchit",
    stack: ["React", "Node.js", "Azure", "WebLLM", "Gemini API"],
    bullets: [
      "Built a campus networking platform with real-time messaging for 125+ profiles at under 300ms latency.",
      "Implemented WebLLM for in-browser inference, eliminating per-query cloud compute costs.",
      "Engineered a RAG-based resume analyser with the Gemini API and evaluated it on 50+ test resumes.",
    ],
  },
  {
    name: "CommitVault",
    repo: "https://github.com/pallavithegod/CommitVault-Frontend",
    live: "https://commit-vault.vercel.app",
    stack: ["React", "Node.js", "MySQL", "Tailwind CSS", "AWS"],
    bullets: [
      "Built a banking dashboard around SQL views, stored procedures, triggers, joins, and transactional integrity.",
      "Implemented atomic fund transfers and a normalized transaction ledger through the companion Node.js and MySQL backend.",
    ],
  },
  {
    name: "CivicBounty",
    repo: "https://github.com/pallavithegod/CivicBounty",
    stack: ["React", "Stellar", "Tailwind CSS", "GSAP", "Framer Motion"],
    bullets: [
      "Built a civic-maintenance dApp where users can report infrastructure issues and create crypto-funded bounties.",
      "Integrated Freighter Wallet and Stellar Testnet transactions with bounty creation, funding, and status tracking.",
    ],
  },
  {
    name: "CoverFi",
    repo: "https://github.com/CoverFI-space",
    live: "https://www.coverfi.space/",
    stack: ["Stellar", "Soroban", "Rust", "JavaScript", "TypeScript"],
    bullets: [
      "Contributed to open-source Stellar and Soroban infrastructure for safer stablecoin payments and reserve-backed protection systems.",
      "Worked across smart-contract, backend, and product interfaces supporting protected payments and private payment receipts.",
    ],
  },
  {
    name: "Anti-Prod",
    repo: "https://github.com/pallavithegod/Anti-Prod",
    stack: ["Chrome Extension", "HTML", "CSS", "JavaScript"],
    bullets: [
      "Built a playful anti-productivity Chrome extension that sends recurring distraction reminders and links to time-wasting content.",
      "Created a dark, minimal distraction hub with ten-minute pop-ups and automatic dismissal.",
    ],
  },
];
