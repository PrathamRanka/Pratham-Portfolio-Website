export type IconName =
  | 'typescript'
  // | 'go'
  | 'python'
  | 'cplusplus'
  | 'node'
  | 'fastapi'
  | 'websocket'
  | 'postgresql'
  | 'redis'
  | 'kafka'
  | 'mongodb'
  | 'docker'
  | 'kubernetes'
  | 'githubActions'
  | 'nextjs'
  | 'react'
  | 'aws'
  | 'solidity'
  | 'snarkjs'
  | 'ethers'
  | 'base'
  | 'ffmpeg'
  | 'githubactions'
  | 'jest'
  | 'cli';

export const resumeUrl =
  'https://drive.google.com/file/d/1bFqVi04xFWRHssvIjcZ7oqcisKJ00li6/preview';

export const experience = [
  {
  company: "S45",
  role: "Software Engineer",
  date: "July 2026 - Aug 2026",
  description:
    "Contributing to production backend systems by implementing features from HLD/LLD specifications, building a standardized multi-layer testing framework, developing shared testing infrastructure, writing comprehensive unit and integration tests, strengthening repository contract tests, validating database migrations, and improving CI quality gates. Collaborating on code reviews, bug fixes, and production engineering practices to improve maintainability, reliability, and long-term scalability.",
  current: false,
  logo: "/company/s45.webp",
  },
  {
    company: "Paasa",
    role: "Software Engineer Intern",
    date: "Mar 2026 - May 2026",
    badge: "YC S24",
    description:
      "Engineered fintech infrastructure powering banking and payment workflows across KYC, payouts, collections, and financial reconciliation. Built and optimized backend APIs, integrated banking partners, improved transaction reliability, automated internal operations, and contributed to production systems handling over $19M+ in assets while working closely with product and engineering teams.",
    current: false,
    logo: "/company/paasa.webp",
  },
  {
    company: "TalKeys",
    role: "Full-Stack Engineering Intern",
    date: "Jun 2025 - Aug 2025",
    description:
      "Developed production-ready features across the React and Node.js stack, implemented REST APIs, integrated third-party services, improved application performance, resolved production issues, and collaborated in an agile environment to ship customer-facing functionality with a focus on reliability and maintainability.",
    current: false,
    logo: "/company/talkeys.webp",
  },
];

export const projects: {
  name: string;
  mark: string;
  accent: string;
  description: string;
  technologies: IconName[];
  github: string;
  live?: string;
}[] = [
  {
    name: "SendAI Fun",
    mark: "SF",
    accent: "emerald",
    description:
      "Cloud-native runtime for AI agents that securely executes tool calls inside Kubernetes sandboxes using distributed lease management, optimistic concurrency control, FIFO scheduling, automatic recovery, and production-grade container orchestration.",
    technologies: [
      "typescript",
      "nextjs",
      "kubernetes",
      "docker",
      "aws",
      "redis",
    ],
    github: "https://github.com/PrathamRanka/sendaifun",
  },

  {
    name: "StarSwap",
    mark: "SS",
    accent: "violet",
    description:
      "Developer platform for discovering GitHub repositories with intelligent recommendations, GitHub OAuth, Redis-powered caching and rate limiting, PostgreSQL, real-time leaderboards, and a scalable full-stack architecture.",
    technologies: [
      "nextjs",
      "react",
      "typescript",
      "node",
      "redis",
      "postgresql",
    ],
    github: "https://github.com/PrathamRanka/starswap",
  },

  {
    name: "ZKavach",
    mark: "ZK",
    accent: "cyan",
    description:
      "Privacy-preserving payment infrastructure implementing Coinbase x402 with Groth16 zk-SNARKs, Poseidon hashing, Solidity smart contracts, and programmable USDC payments for autonomous AI agents.",
    technologies: [
      "nextjs",
      "typescript",
      "solidity",
      "snarkjs",
      "ethers",
      "base",
    ],
    github: "https://github.com/PrathamRanka/ZKavach",
  },

  {
    name: "SpotifyDownloader",
    mark: "SD",
    accent: "green",
    description:
      "Production-ready TypeScript CLI featuring concurrent download workers, resumable pipelines, intelligent source matching, FFmpeg processing, ID3 metadata embedding, automated testing, CI/CD, and cross-platform support.",
    technologies: [
      "typescript",
      "node",
      "ffmpeg",
      "githubactions",
      "jest",
      "cli",
    ],
    github: "https://github.com/PrathamRanka/SpotifyDownloader",
  },
];

export const skillGroups: { label: string; skills: { name: string; icon: IconName }[] }[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'TypeScript', icon: 'typescript' },
      // { name: 'Go', icon: 'go' },
      { name: 'Python', icon: 'python' },
      { name: 'C++', icon: 'cplusplus' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'node' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'WebSockets', icon: 'websocket' },
      { name: 'Next.js', icon: 'nextjs' },
    ],
  },
  {
    label: 'Data & systems',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Kafka', icon: 'kafka' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    label: 'Infrastructure',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'GitHub Actions', icon: 'githubActions' },
      { name: 'React', icon: 'react' },
    ],
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/PrathamRanka' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prathamranka06/' },
  { label: 'X', href: 'https://x.com/pr7ham_develops' },
];
