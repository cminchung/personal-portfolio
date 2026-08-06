import { ProfileInfo, Project } from '../types';

export const PROFILE_DATA: ProfileInfo = {
  name: "Choong Minchung",
  title: "Full-Stack & Frontend Engineer",
  tagline: "Engineering resilient, high-performance web applications with Next.js App Router, TypeScript, React, and Supabase.",
  location: "Malaysia (Open to Remote)",
  availabilityStatus: "Open for Full-Stack & Frontend Engineering Roles",
  bio: "B.Eng (Honours) graduate in Materials and Manufacturing Engineering (CGPA 3.43/4.00) from Universiti Tunku Abdul Rahman. Specialized in Next.js App Router, TypeScript (Strict Mode), Supabase (PostgreSQL, RLS), Auth.js v5, Zod runtime validation, and client performance optimizations.",
  avatarUrl: "",
  githubUrl: "https://github.com/cminchung",
  linkedinUrl: "",
  twitterUrl: "",
  email: "minchungchoong@gmail.com",
  phone: "+6011 2803 8864",
  yearsOfExperience: "3+",
  completedProjectsCount: "3 Shipped",
  skillsCategorized: {
    languagesAndCore: [
      "TypeScript (Strict Mode)",
      "JavaScript (ES6+)",
      "React 18",
      "Next.js App Router",
      "HTML/CSS",
      "Python",
      "C++",
      "SQL"
    ],
    backendAndState: [
      "Supabase (PostgreSQL, RLS)",
      "Auth.js v5 (GitHub OAuth)",
      "REST APIs",
      "Zod Runtime Validation",
      "Custom Hooks",
      "TanStack Query v5"
    ],
    testingAndTooling: [
      "Vitest",
      "React Testing Library",
      "CI/CD & Web Deployment",
      "Git & GitHub Actions",
      "Performance Optimization (O(1) Heatmap)"
    ]
  },
  workExperiences: [
    {
      id: "pmb-aluminium",
      company: "PMB Aluminium Sdn. Bhd.",
      role: "Quality Control & Extrusion Department Intern",
      period: "Oct 2022 – Jan 2023",
      bullets: [
        "Applied Failure Mode and Effects Analysis (FMEA) to identify single points of failure in production workflows, executing controlled experimentation to reduce process variance and operational bottlenecks."
      ]
    },
    {
      id: "utar-imm",
      company: "UTAR IMM Student Chapter Committee",
      role: "Organizing Chairperson & Secretary",
      period: "Oct 2020 – Oct 2021",
      bullets: [
        "Project Leadership: Managed end-to-end planning, task delegation, and execution for 3 major university events and served as emcee."
      ]
    }
  ],
  education: [
    {
      institution: "Universiti Tunku Abdul Rahman (UTAR)",
      degree: "Bachelor of Engineering (Honours) Materials and Manufacturing Engineering",
      period: "Oct 2019 – Oct 2023",
      cgpa: "3.43 / 4.00"
    }
  ],
  certifications: [
    "MITx Foundations of Modern Finance I",
    "Coursera Semiconductor Packaging Specialization (ASU & Intel)",
    "Udemy Financial Modeling"
  ],
  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Mandarin", proficiency: "Fluent" },
    { language: "Cantonese", proficiency: "Fluent" },
    { language: "Malay", proficiency: "Conversational" }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "strategy-simulator",
    number: "01",
    title: "Strategy Simulator",
    subtitle: "Full-Stack Financial Dashboard & Strategy Sandbox",
    category: "Full-Stack / Next.js App Router & Supabase",
    description: "Built a full-stack financial dashboard using Next.js App Router, TypeScript, and Supabase (PostgreSQL) with Optimistic UI updates to eliminate perceived latency.",
    fullDescription: "Built a full-stack financial dashboard using Next.js App Router, TypeScript, and Supabase (PostgreSQL) with Optimistic UI updates to eliminate perceived latency.",
    image: "/src/assets/images/strategySimulatorIMG.png",
    tags: ["Next.js App Router", "TypeScript", "Supabase (PostgreSQL)", "Auth.js v5", "Zod", "Vitest", "Optimistic UI"],
    demoUrl: "https://strategy-simulator-next.vercel.app/",
    githubUrl: "https://github.com/cminchung/strategy-simulator-next",
    metrics: [
      { label: "Perceived Latency", value: "0ms UI" },
      { label: "Data & Security", value: "Auth.js v5" },
      { label: "Test Suite", value: "Vitest" }
    ],
    highlights: [
      "Built a full-stack financial dashboard using Next.js App Router, TypeScript, and Supabase (PostgreSQL) with Optimistic UI updates to eliminate perceived latency.",
      "Engineered secure data workflows with Server Actions, Zod runtime validation and GitHub OAuth.",
      "Implemented testing using Vitest to cover calculation utilities, custom hooks, and component rendering."
    ],
    role: "Full-Stack Developer",
    year: "2024"
  },
  {
    id: "portfolio-tracker",
    number: "02",
    title: "Portfolio Tracker",
    subtitle: "Real-time Asset Allocation & P&L Engine",
    category: "Financial Tech / Next.js & TanStack Query",
    description: "Architected a portfolio tracking application to compute P&L and visualize asset allocation with a 24-hour API caching layer.",
    fullDescription: "Architected a portfolio tracking application to compute P&L and visualize asset allocation with a 24-hour API caching layer.",
    image: "/src/assets/images/portfolioTrackerIMG.png",
    tags: ["Next.js", "TypeScript", "TanStack Query v5", "Zod", "Tailwind CSS", "API Caching", "React 18"],
    demoUrl: "https://portfolio-tracker-next-one.vercel.app/",
    githubUrl: "https://github.com/cminchung/portfolio-tracker-next",
    metrics: [
      { label: "API Caching", value: "24-Hour" },
      { label: "P&L Speed", value: "useMemo O(1)" },
      { label: "Sanitization", value: "Zod Schema" }
    ],
    highlights: [
      "Architected a portfolio tracking application to compute P&L and visualize asset allocation.",
      "Designed a 24-hour API caching layer to bypass rate limits while enforcing Zod to sanitize data payloads.",
      "Optimized client computational performance using useMemo for heavy P&L math and custom hooks for localStorage persistence."
    ],
    role: "Frontend Architect",
    year: "2024"
  },
  {
    id: "habit-tracker",
    number: "03",
    title: "Habit Tracker",
    subtitle: "90-Day Heatmap & Streak Analytics",
    category: "Productivity App / React 18 & Heatmap Algorithm",
    description: "Engineered a habit tracking app with streak calculations and a 90-day GitHub-style calendar heatmap rendered in O(1) time complexity.",
    fullDescription: "Engineered a habit tracking app with streak calculations and a 90-day GitHub-style calendar heatmap rendered in O(1) time complexity.",
    image: "/src/assets/images/habitTrackerIMG.png",
    tags: ["Next.js", "React 18", "TypeScript", "Tailwind CSS", "Custom Hooks", "Performance Optimization"],
    demoUrl: "https://habit-tracker-next-theta.vercel.app/",
    githubUrl: "https://github.com/cminchung/habit-tracker-next",
    metrics: [
      { label: "Heatmap Render", value: "O(1) Time" },
      { label: "Heatmap Range", value: "90 Days" },
      { label: "State Architecture", value: "Custom Hooks" }
    ],
    highlights: [
      "Engineered a habit tracking app with streak calculations and a 90-day GitHub-style calendar heatmap.",
      "Reduced heatmap rendering time from O(n) to O(1) time complexity."
    ],
    role: "Web Engineer",
    year: "2024"
  }
];

