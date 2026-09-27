export const profile = {
  name: "Pallavi Jain",
  tagline: "Full-stack developer building AI agents and reliable cloud products.",
  availability: "Available for work",
  bio: [
    "I'm a Computer Science and Engineering undergraduate in Delhi, focused on full-stack development, backend systems, and practical AI applications.",
    "I build products across React, Node.js, Next.js, Python, and Azure—from agentic research workflows to incident remediation systems and campus platforms.",
    "Outside development, I lead technical initiatives, run workshops, participate in hackathons, and play and teach piano.",
  ],
  email: "jainpallavi.delhi@gmail.com",
  location: "Delhi, India",
  socials: [
    { label: "GitHub", url: "https://github.com/pallavithegod" },
    { label: "LinkedIn", url: "https://linkedin.com/in/pallavii-" },
    { label: "X", url: "https://x.com/Pallavi_jain06" },
    { label: "Email", url: "mailto:jainpallavi.delhi@gmail.com" },
  ],
};

export const skills = [
  { group: "Languages", items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"] },
  { group: "Frameworks & Libraries", items: ["React.js", "Node.js", "Next.js", "Tailwind CSS", "REST APIs", "LangGraph", "WebLLM"] },
  { group: "Cloud & DevOps", items: ["Cloud Computing", "Microsoft Azure", "AWS", "Docker", "Jenkins", "CI/CD", "Git", "Vercel"] },
  { group: "Core", items: ["Data Structures & Algorithms", "OOP", "DBMS", "System Design", "Full-stack Development", "RAG", "LLMs"] },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    org: "Mercury AI",
    website: "https://mercuryai.in",
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
    website: "https://anveshan.dev",
    location: "Delhi, India",
    bullets: [
      "Designed and built the ANVESHAN website end to end, owning the complete visual design and web implementation.",
      "Led hackathons and technical initiatives and delivered web development workshops for 1,000+ peers and students.",
    ],
  },
];

export const projects = [
  {
    slug: "recallops",
    name: "RecallOps",
    eyebrow: "Incident Memory Agent",
    repo: "https://github.com/pallavithegod/ima-agent",
    live: "https://imagent-zeta.vercel.app",
    stack: ["Python", "LangGraph", "Azure", "React", "TypeScript", "LLMs"],
    summary: "A deployment-monitoring and remediation workspace that turns failures into grounded diagnoses and reviewable fixes.",
    description: "RecallOps connects deployment signals, incident history, and an agentic remediation workflow in one operational dashboard. It watches connected repositories and hosting providers, groups related failures, recalls similar incidents, and prepares evidence-backed diagnoses before suggesting a fix. Human approval remains part of the workflow before a draft pull request is created.",
    bullets: [
      "Monitors GitHub repositories and Vercel or Render deployments from a single responsive dashboard.",
      "Uses LangGraph to classify incidents, retrieve relevant history, diagnose failures, and propose remediation.",
      "Supports incident reports, on-call handoffs, encrypted integrations, and explicitly approved draft pull requests.",
    ],
    architecture: [
      { label: "Interface", nodes: ["React dashboard", "Firebase authentication"] },
      { label: "Integrations", nodes: ["GitHub", "Vercel", "Render"] },
      { label: "Agent layer", nodes: ["FastAPI", "LangGraph", "Azure OpenAI"] },
      { label: "Memory & output", nodes: ["Incident memory", "Diagnosis", "Draft PR"] },
    ],
  },
  {
    slug: "research-agent",
    name: "Multi-Step Research Agent",
    repo: "https://github.com/pallavithegod/research-agent",
    stack: ["Next.js", "FastAPI", "AI Agents", "SerpApi", "x402", "Azure"],
    summary: "An evidence-first research workspace that plans multi-step investigations and returns structured, cited reports.",
    description: "The Multi-Step Research Agent turns broad natural-language questions into a sequence of focused research tasks. Its planner and executor coordinate search, source selection, evidence scoring, and synthesis across Quick, Deep, and Compare modes, while the interface keeps sources and revisions visible to the user.",
    bullets: [
      "Breaks complex prompts into traceable sub-questions and sequential research steps.",
      "Enforces source policies and scores evidence quality before generating a report.",
      "Pairs an asynchronous FastAPI service with a Next.js analytical workspace and an Azure Container Apps deployment design.",
    ],
    architecture: [
      { label: "Workspace", nodes: ["Next.js dashboard", "Authentication"] },
      { label: "API", nodes: ["FastAPI", "Job orchestration"] },
      { label: "Research", nodes: ["Planner", "SerpApi retrieval", "Evidence scoring"] },
      { label: "Delivery", nodes: ["Cited report", "Revisions", "x402 payments"] },
    ],
  },
  {
    slug: "sanchit",
    name: "Sanchit",
    repo: "https://github.com/garvit-arora/sanchit",
    stack: ["React", "Node.js", "Azure", "WebLLM", "Gemini API"],
    summary: "A campus network combining real-time community features with private, browser-side AI assistance.",
    description: "Sanchit is a campus networking platform designed around fast communication and useful student tools. Alongside profiles and real-time messaging, it explores two complementary AI paths: WebLLM for private in-browser inference and a Gemini-backed RAG workflow for structured resume feedback.",
    bullets: [
      "Supports real-time messaging across 125+ profiles with measured latency under 300ms.",
      "Runs selected AI interactions locally in the browser through WebLLM, avoiding per-query cloud compute.",
      "Includes a Gemini-powered RAG resume analyser evaluated across more than 50 test resumes.",
    ],
    architecture: [
      { label: "Client", nodes: ["React app", "Profiles", "Messaging UI"] },
      { label: "Platform", nodes: ["Node.js API", "Realtime events"] },
      { label: "AI paths", nodes: ["WebLLM in browser", "Gemini RAG"] },
      { label: "Cloud", nodes: ["Azure services", "Persistent data"] },
    ],
  },
  {
    slug: "commitvault",
    name: "CommitVault",
    repo: "https://github.com/pallavithegod/CommitVault-Frontend",
    live: "https://commit-vault.vercel.app",
    stack: ["React", "Node.js", "MySQL", "Tailwind CSS", "AWS"],
    summary: "A banking dashboard built to demonstrate transactional integrity and advanced relational database patterns.",
    description: "CommitVault presents banking workflows through a React dashboard backed by Node.js and MySQL. Rather than treating the database as passive storage, it uses views, stored procedures, triggers, joins, and strict transactions to keep balances and ledger records consistent across every transfer.",
    bullets: [
      "Executes debit-credit operations atomically so transfers fully commit or fully roll back.",
      "Uses views and multi-table joins to return secure, normalized account information.",
      "Keeps the transaction ledger current through database triggers and stored procedures.",
    ],
    architecture: [
      { label: "Dashboard", nodes: ["React", "Tailwind CSS", "Axios"] },
      { label: "API", nodes: ["Node.js", "Express"] },
      { label: "Data logic", nodes: ["Stored procedures", "Transactions", "Triggers"] },
      { label: "Storage", nodes: ["MySQL accounts", "Audit ledger"] },
    ],
  },
  {
    slug: "civicbounty",
    name: "CivicBounty",
    repo: "https://github.com/pallavithegod/CivicBounty",
    stack: ["React", "Stellar", "Tailwind CSS", "GSAP", "Framer Motion"],
    summary: "A Stellar-based civic platform that turns local infrastructure work into transparent, funded bounties.",
    description: "CivicBounty lets residents report local infrastructure problems, attach a reward, and track work through a transparent bounty lifecycle. The current beta connects to Freighter Wallet and uses Stellar Testnet transactions while laying the groundwork for Soroban escrow and decentralized verification.",
    bullets: [
      "Connects Freighter Wallet and reads live XLM balances from Stellar Testnet.",
      "Supports creating, funding, filtering, and tracking civic maintenance bounties.",
      "Uses a responsive React interface with motion-led feedback for each task state.",
    ],
    architecture: [
      { label: "Citizen UI", nodes: ["React app", "Bounty dashboard"] },
      { label: "Wallet", nodes: ["Freighter", "Transaction signing"] },
      { label: "Network", nodes: ["Stellar SDK", "Stellar Testnet"] },
      { label: "Lifecycle", nodes: ["Open", "In progress", "Verified payout"] },
    ],
  },
  {
    slug: "coverfi",
    name: "CoverFi",
    repo: "https://github.com/CoverFI-space",
    live: "https://www.coverfi.space/",
    stack: ["Stellar", "Soroban", "Rust", "JavaScript", "TypeScript"],
    summary: "Open-source Stellar and Soroban infrastructure for safer stablecoin payments and reserve-backed protection.",
    description: "CoverFi brings protection primitives to stablecoin payments through an open-source collection of product interfaces, backend services, documentation, and Soroban contracts. The system is designed around safer transfers, private payment receipts, and transparent reserve-backed protection.",
    bullets: [
      "Combines a product interface with backend services and Soroban smart contracts.",
      "Explores protected stablecoin payments and privacy-aware payment receipts.",
      "Documents the system as open-source infrastructure for builders on Stellar.",
    ],
    architecture: [
      { label: "Product", nodes: ["Web interface", "Payment flow"] },
      { label: "Services", nodes: ["CoverFi backend", "Receipt logic"] },
      { label: "Contracts", nodes: ["Rust", "Soroban contracts"] },
      { label: "Settlement", nodes: ["Stellar network", "Reserve protection"] },
    ],
  },
  {
    slug: "anti-prod",
    name: "Anti-Prod",
    repo: "https://github.com/pallavithegod/Anti-Prod",
    stack: ["Chrome Extension", "HTML", "CSS", "JavaScript"],
    summary: "A deliberately unproductive Chrome extension that turns distraction into the feature.",
    description: "Anti-Prod playfully reverses the promise of conventional focus tools. It schedules recurring pop-ups, surfaces links to familiar online rabbit holes, and packages the experience inside a minimal dark Chrome extension interface.",
    bullets: [
      "Schedules distraction reminders every ten minutes and dismisses them automatically.",
      "Collects quick links to social feeds, videos, controversies, and other time sinks.",
      "Runs as a lightweight unpacked Chrome extension with no external service dependency.",
    ],
    architecture: [
      { label: "Extension", nodes: ["Popup UI", "Dark theme"] },
      { label: "Scheduler", nodes: ["Timer", "Reminder trigger"] },
      { label: "Interaction", nodes: ["Auto-dismiss", "Content shortcuts"] },
      { label: "Runtime", nodes: ["Chrome APIs", "Local state"] },
    ],
  },
];
