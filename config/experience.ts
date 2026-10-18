import type { ExperienceItem } from "@/config/types";

export const experienceSectionConfig = {
  title: "Experience",
};

export const experienceConfig: ExperienceItem[] = [
  {
    id: "s45",
    role: "Software Engineer",
    company: "S45",
    companyLogo: "/company/s45.webp",
    period: "July 2026 — Aug 2026",
    summary:
      "Contributing to production backend systems by implementing features from HLD and LLD specifications, building a standardized multi-layer testing framework, and developing shared testing infrastructure. Writing unit and integration tests, strengthening repository contract tests, validating database migrations, and improving CI quality gates.",
    highlights: [
      "Implementing features from high-level and low-level design specifications",
      "Building a standardized multi-layer testing framework",
      "Developing shared testing infrastructure",
      "Validating database migrations and improving CI quality gates",
    ],
    order: 1,
    enabled: true,
  },
  {
    id: "paasa",
    role: "Software Engineer Intern",
    company: "PAASA",
    companyLogo: "/company/paasa.webp",
    ycBadge: true,
    period: "Mar 2026 — May 2026",
    summary:
      "Engineered fintech infrastructure for banking and payment workflows across KYC, payouts, collections, and financial reconciliation. Built and optimised backend APIs, integrated banking partners, improved transaction reliability, automated internal operations, and contributed to production systems handling over $19M in assets.",
    highlights: [
      "Building fintech infrastructure for banking and payment workflows",
      "Integrating banking partners (Axis, Kotak, ICICI)",
      "Improving transaction reliability andautomating internal operations",
      "Contributing to production systems handling over $19M in assets",
    ],
    order: 2,
    enabled: true,
  },
  {
    id: "talkeys",
    role: "Full-Stack Engineering Intern",
    company: "TalKeys",
    companyLogo: "/company/talkeys.webp",
    period: "Jun 2025 — Aug 2025",
    summary:
      "Developed production-ready features across the React and Node.js stack, implemented REST APIs, integrated third-party services, improved application performance, resolved production issues, and collaborated in an agile environment to ship reliable, maintainable customer-facing software.",
    highlights: [
      "Developing production-ready features across React and Node.js",
      "Implementing REST APIs and integrating third-party services",
      "Improving application performance and resolving production issues",
      "Collaborating in an agile environment to ship reliable software",
    ],
    order: 3,
    enabled: true,
  },
];
