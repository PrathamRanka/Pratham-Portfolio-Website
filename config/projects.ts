import type { Project } from "@/config/types";

export const projectsSectionConfig = {
  title: "Work",
  liveButtonLabel: "View Product",
  liveTooltip: "Open project",
};

export const projectsConfig: Project[] = [
  {
    id: "agentpay",
    title: "AgentPay — Modular Monolith for x402 USDC Payments",
    description:
      "A modular monolith for non-custodial x402 USDC payments on Base Sepolia, with 17 isolated Go domain packages, a DynamoDB single-table design, cryptographic evidence, an SSRF-hardened proxy, secure MCP tooling, and Terraform-managed AWS infrastructure.",
    content:
      "## Problem\nAutonomous AI agents need reliable, non-custodial payment infrastructure that can handle USDC transfers without centralized intermediaries. Existing solutions are either too complex or lack the security guarantees needed for production use.\n\n## Solution\nI built AgentPay as a modular monolith with 17 isolated Go domain packages, a DynamoDB single-table design for low-latency operations, cryptographic evidence generation, an SSRF-hardened proxy, and Terraform-managed AWS infrastructure. The system uses Lambda ARM64 and API Gateway HTTP API v2 to achieve <42ms P95 API latency and <8ms P99 queries while operating costs stay below $10 per month.\n\n## Outcome\nAgentPay demonstrates production-grade infrastructure for autonomous agent payments with cryptographic evidence, SSRF protection, and cost-efficient scaling. It is a clear example of building distributed systems with strong security guarantees and predictable performance.",
    image: "/agentpay.webp",
    imageAlt: "AgentPay - Modular Monolith for x402 USDC Payments",
    liveUrl: "https://github.com/PrathamRanka/AgentPay",
    tags: ["Go", "AWS", "Next.js", "TypeScript", "DynamoDB"],
    metrics: [
      { icon: "chart", label: "<42ms P95 API latency" },
      { icon: "users", label: "<$10/month operating cost" },
    ],
    year: 2026,
    status: "shipped",
    category: "Fintech Infrastructure",
    order: 1,
    enabled: true,
  },
  {
    id: "sendaifun",
    title: "SendAI Fun — Cloud-Native Runtime for AI Agents",
    description:
      "A cloud-native runtime for AI agents that securely executes tool calls inside Kubernetes sandboxes using distributed lease management, optimistic concurrency control, FIFO scheduling, automatic recovery, and production-grade container orchestration.",
    content:
      "## Problem\nAI agents require secure, isolated environments to execute tool calls without compromising host systems. Existing solutions either lack proper isolation or are too complex to orchestrate at scale.\n\n## Solution\nI built SendAI Fun as a cloud-native runtime that securely executes AI agent tool calls inside Kubernetes sandboxes. The system uses distributed lease management, optimistic concurrency control, FIFO scheduling, and automatic recovery to ensure production-grade reliability. The architecture supports horizontal scaling while maintaining security boundaries.\n\n## Outcome\nSendAI Fun demonstrates production-grade AI agent infrastructure with strong security guarantees, reliable task scheduling, and efficient resource utilization. It shows how to balance security, performance, and scalability in distributed systems.",
    image: "/sendaifun.webp",
    imageAlt: "SendAI Fun - Cloud-Native Runtime for AI Agents",
    liveUrl: "https://github.com/PrathamRanka/sendaifun",
    tags: ["TypeScript", "Next.js", "Kubernetes", "Docker", "AWS", "Redis"],
    metrics: [
      { icon: "chart", label: "Production-grade orchestration" },
      { icon: "users", label: "Secure AI agent execution" },
    ],
    year: 2026,
    status: "new",
    category: "AI Infrastructure",
    order: 2,
    enabled: true,
  },
  {
    id: "starswap",
    title: "StarSwap — GitHub Repository Recommendations",
    description:
      "A developer platform for discovering GitHub repositories through intelligent recommendations, GitHub OAuth, Redis-powered caching and rate limiting, PostgreSQL, real-time leaderboards, and a scalable full-stack architecture.",
    content:
      "## Problem\nDevelopers struggle to discover high-quality repositories that match their specific needs and technology preferences. Existing GitHub search lacks personalized recommendations and real-time insights.\n\n## Solution\nI built StarSwap as a developer platform that provides intelligent GitHub repository recommendations. The system uses GitHub OAuth for authentication, Redis-powered caching and rate limiting, PostgreSQL for data storage, and implements real-time leaderboards. The architecture is designed for scalability and fast response times.\n\n## Outcome\nStarSwap demonstrates a scalable full-stack application with intelligent recommendations, real-time features, and efficient data management. It shows how to build developer tools that leverage GitHub's ecosystem effectively.",
    image: "/starswap.webp",
    imageAlt: "StarSwap - GitHub Repository Recommendations",
    liveUrl: "https://github.com/PrathamRanka/starswap",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Redis", "PostgreSQL"],
    metrics: [
      { icon: "chart", label: "Real-time leaderboards" },
      { icon: "users", label: "Intelligent recommendations" },
    ],
    year: 2026,
    status: "shipped",
    category: "Developer Tools",
    order: 3,
    enabled: true,
  },
  {
    id: "zkavach",
    title: "ZKavach — Privacy-Preserving Payment Infrastructure",
    description:
      "Privacy-preserving payment infrastructure implementing Coinbase x402 with Groth16 zk-SNARKs, Poseidon hashing, Solidity smart contracts, and programmable USDC payments for autonomous AI agents.",
    content:
      "## Problem\nAutonomous AI agents need privacy-preserving payment mechanisms that can execute programmable USDC transfers without revealing sensitive transaction details. Existing solutions lack the cryptographic guarantees needed for production use.\n\n## Solution\nI built ZKavach as privacy-preserving payment infrastructure implementing Coinbase x402 with Groth16 zk-SNARKs, Poseidon hashing, and Solidity smart contracts. The system enables programmable USDC payments while maintaining privacy through zero-knowledge proofs. The architecture supports autonomous agent payments with strong cryptographic guarantees.\n\n## Outcome\nZKavach demonstrates production-grade privacy-preserving payments with strong cryptographic foundations. It shows how to implement zero-knowledge proofs for real-world payment systems and supports autonomous agent infrastructure.",
    image: "/zkavach.webp",
    imageAlt: "ZKavach - Privacy-Preserving Payment Infrastructure",
    liveUrl: "https://github.com/PrathamRanka/x402-coinbase",
    tags: ["Next.js", "TypeScript", "Solidity", "snarkjs", "ethers", "Base"],
    metrics: [
      { icon: "chart", label: "Groth16 zk-SNARKs implementation" },
      { icon: "users", label: "Privacy-preserving USDC payments" },
    ],
    year: 2025,
    status: "shipped",
    category: "Privacy Infrastructure",
    order: 4,
    enabled: true,
  },
  {
    id: "spotifydownloader",
    title: "SpotifyDownloader — High-Performance CLI Tool",
    description:
      "A production-ready TypeScript CLI with concurrent download workers, resumable pipelines, intelligent source matching, FFmpeg processing, ID3 metadata embedding, automated testing, CI/CD, and cross-platform support.",
    content:
      "## Problem\nDownloading music from Spotify efficiently requires handling multiple source formats, maintaining metadata integrity, and supporting resumable downloads across different platforms. Existing solutions lack reliability and proper error handling.\n\n## Solution\nI built SpotifyDownloader as a production-ready TypeScript CLI with concurrent download workers, resumable pipelines, intelligent source matching, FFmpeg processing, ID3 metadata embedding, and comprehensive automated testing. The tool supports CI/CD workflows and cross-platform deployment with robust error handling.\n\n## Outcome\nSpotifyDownloader demonstrates production-grade CLI development with efficient concurrent processing, reliable downloads, and comprehensive test coverage. It shows how to build developer tools that are both powerful and reliable.",
    image: "/spotifydownloader.webp",
    imageAlt: "SpotifyDownloader - High-Performance CLI Tool",
    liveUrl: "https://github.com/PrathamRanka/SpotifyDownloader",
    tags: ["TypeScript", "Node.js", "FFmpeg", "GitHub Actions", "Jest", "CLI"],
    metrics: [
      { icon: "chart", label: "Concurrent download workers" },
      { icon: "users", label: "Cross-platform support" },
    ],
    year: 2025,
    status: "shipped",
    category: "Developer Tools",
    order: 5,
    enabled: true,
  },
];
