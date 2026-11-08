/* ============================================================
   EDIT HERE. Every page and component reads from this file.
   Replace the demo values with your own details.
   ============================================================ */

export const profile = {
  name: "Mohamed Nasr",
  role: "MERN Stack Developer",
  location: "Remote",
  years: 6,
  available: true,
  email: "hello@alexmorgan.dev",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
  heroImage: "/hero.png", // file in public/
  logo: "/logo.svg", // file in public/
  about:
    "I started with static sites and moved into full-stack work because I like owning a feature from the data model to the last button state. I write small, tested modules and keep notes on the decisions behind them, so the next developer can pick the project up quickly.",
  headline: "Full-stack products, built end to end on the MERN stack.",
  accentWord: "end to end",
  intro:
    "I design the schema, write the API, build the interface and ship it to production. Clients hire me for web apps that stay fast and easy to change after launch.",
  stackIntro:
    "MongoDB, Express, React and Node.js cover the data, the API, the interface and the runtime. I add TypeScript and tests so the code stays safe to change.",
};

export const facts = [
  { value: "6+", label: "years building web apps" },
  { value: "38", label: "projects shipped" },
  { value: "120ms", label: "typical p95 API latency" },
  { value: "99.95%", label: "uptime on the busiest app" },
];

export const pillars = [
  {
    letter: "M",
    name: "MongoDB",
    role: "data layer",
    items: ["Schema design and indexing", "Aggregation pipelines", "Atlas search and backups", "Mongoose models and migrations"],
  },
  {
    letter: "E",
    name: "Express",
    role: "api layer",
    items: ["REST and versioned routes", "JWT and refresh token auth", "Validation with Zod", "Rate limiting and logging"],
  },
  {
    letter: "R",
    name: "React",
    role: "interface layer",
    items: ["Hooks, context and Redux Toolkit", "TanStack Query data fetching", "Accessible component libraries", "Vite, code splitting, Lighthouse 95+"],
  },
  {
    letter: "N",
    name: "Node.js",
    role: "runtime",
    items: ["Socket.IO realtime features", "Background jobs with BullMQ", "Stripe and email integrations", "Docker and CI pipelines"],
  },
];

export const also = ["TypeScript", "Redis", "Tailwind CSS", "Next.js", "Jest", "Playwright", "Docker", "AWS", "GitHub Actions", "Git"];

export const projectsIntro = "Four builds from recent years. Each one covers the database, the API and the interface.";

export const projects = [
  {
    category: "Commerce",
    title: "Cartly",
    summary: "Multi-vendor marketplace with seller dashboards, Stripe Connect payouts and a Redis-backed product cache.",
    api: "38 endpoints",
    collections: 9,
    metrics: [
      { v: "12k", l: "orders per month" },
      { v: "140ms", l: "p95 API latency" },
    ],
    stack: ["React", "Express", "MongoDB", "Redis", "Stripe"],
    live: "https://example.com/",
    repo: "https://github.com/your-username/cartly",
  },
  {
    category: "Realtime",
    title: "TaskForge",
    summary: "Project board with drag and drop, live cursors, comments and role-based access for teams of up to 200.",
    api: "24 endpoints",
    collections: 7,
    metrics: [
      { v: "<80ms", l: "event delivery" },
      { v: "4.2k", l: "active teams" },
    ],
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "TypeScript"],
    live: "https://example.com/",
    repo: "https://github.com/your-username/taskforge",
  },
  {
    category: "Health",
    title: "MedBook",
    summary: "Appointment booking for a clinic group with doctor calendars, SMS reminders and a patient portal.",
    api: "31 endpoints",
    collections: 8,
    metrics: [
      { v: "-42%", l: "missed appointments" },
      { v: "9", l: "clinics onboarded" },
    ],
    stack: ["React", "Express", "MongoDB", "BullMQ", "Twilio"],
    live: "https://example.com/",
    repo: "https://github.com/your-username/medbook",
  },
  {
    category: "Analytics",
    title: "Pulse",
    summary: "SaaS metrics dashboard that turns raw event streams into MRR, churn and cohort charts with aggregation pipelines.",
    api: "19 endpoints",
    collections: 6,
    metrics: [
      { v: "2.4M", l: "events per day" },
      { v: "0.6s", l: "dashboard load" },
    ],
    stack: ["React", "Node.js", "MongoDB", "Redis", "Recharts"],
    live: "https://example.com/",
    repo: "https://github.com/your-username/pulse",
  },
];

export const experience = [
  {
    period: "2024 to now",
    role: "Senior Full-Stack Developer",
    org: "Lumen Commerce",
    points: [
      "Lead a team of four building a storefront platform used by 300 merchants.",
      "Cut checkout API latency from 480ms to 130ms with indexing and caching.",
      "Introduced TypeScript and end-to-end tests, halving production bugs.",
    ],
    stack: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    period: "2021 to 2024",
    role: "Full-Stack Developer",
    org: "Brightpath Studio",
    points: [
      "Delivered 14 client web apps from design handoff to launch.",
      "Built a shared auth and billing module reused across eight projects.",
    ],
    stack: ["React", "Express", "MongoDB", "Stripe"],
  },
  {
    period: "2020 to 2021",
    role: "Freelance Web Developer",
    org: "Independent",
    points: [
      "Built booking, portfolio and ordering sites for small businesses.",
      "Moved a client from spreadsheets to a custom admin panel.",
    ],
    stack: ["React", "Node.js", "MongoDB"],
  },
];

export const contact = {
  title: "Have a product to build?",
  text: "Tell me what you are making and when you need it. I reply within two working days.",
};
