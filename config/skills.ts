import type { SkillCategoryConfig, SkillItem } from "@/config/types";

export const skillsSectionConfig = {
  title: "Stack",
  categories: [
    { id: "language", label: "Language" },
    { id: "backend", label: "Backend" },
    { id: "data", label: "Data & Systems" },
    { id: "infrastructure", label: "Infrastructure" },
  ] as SkillCategoryConfig[],
};

export const skillsConfig: SkillItem[] = [
  // Language
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    category: "language",
    order: 1,
    enabled: true,
  },
  {
    id: "go",
    name: "Go",
    icon: "go",
    category: "language",
    order: 2,
    enabled: true,
  },
  {
    id: "python",
    name: "Python",
    icon: "python",
    category: "language",
    order: 3,
    enabled: true,
  },
  {
    id: "cplusplus",
    name: "C++",
    icon: "cplusplus",
    category: "language",
    order: 4,
    enabled: true,
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    icon: "nodejs",
    category: "backend",
    order: 5,
    enabled: true,
  },
  {
    id: "fastapi",
    name: "FastAPI",
    icon: "fastapi",
    category: "backend",
    order: 6,
    enabled: true,
  },
  {
    id: "websocket",
    name: "WebSockets",
    icon: "websocket",
    category: "backend",
    order: 7,
    enabled: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs",
    category: "backend",
    order: 8,
    enabled: true,
  },

  // Data & Systems
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql",
    category: "data",
    order: 9,
    enabled: true,
  },
  {
    id: "dynamodb",
    name: "DynamoDB",
    icon: "dynamodb",
    category: "data",
    order: 10,
    enabled: true,
  },
  {
    id: "redis",
    name: "Redis",
    icon: "redis",
    category: "data",
    order: 11,
    enabled: true,
  },
  {
    id: "kafka",
    name: "Kafka",
    icon: "kafka",
    category: "data",
    order: 12,
    enabled: true,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "mongodb",
    category: "data",
    order: 13,
    enabled: true,
  },

  // Infrastructure
  {
    id: "docker",
    name: "Docker",
    icon: "docker",
    category: "infrastructure",
    order: 14,
    enabled: true,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "kubernetes",
    category: "infrastructure",
    order: 15,
    enabled: true,
  },
  {
    id: "githubactions",
    name: "GitHub Actions",
    icon: "githubactions",
    category: "infrastructure",
    order: 16,
    enabled: true,
  },
  {
    id: "terraform",
    name: "Terraform",
    icon: "terraform",
    category: "infrastructure",
    order: 17,
    enabled: true,
  },
];
