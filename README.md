# Pratham Ranka — Portfolio

Personal portfolio of [Pratham Ranka](https://prathamranka.in), a software engineer and Computer Engineering student at TIET (2028 batch) focused on backend systems, distributed infrastructure, and open-source software.

**Live site →** [prathamranka.in](https://prathamranka.in)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) + custom CSS |
| Animations | [Motion for React](https://motion.dev) |
| Analytics | Vercel Analytics + Speed Insights |
| Font | [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) (self-hosted variable font) |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — metadata, JSON-LD, font, analytics
│   ├── page.tsx                # Home page — assembles all section views
│   ├── globals.css             # Global design tokens + GitHub heatmap styles
│   ├── manifest.ts             # Web app manifest
│   ├── robots.ts               # Robots.txt
│   ├── sitemap.ts              # Sitemap
│   ├── api/
│   │   ├── agent/              # AI-agent contact draft endpoint
│   │   ├── github/heatmap/     # GitHub contribution heatmap image (SVG, 1h cache)
│   │   ├── profile/            # Machine-readable profile JSON
│   │   └── projects/           # Machine-readable projects JSON
│   ├── projects/
│   │   └── agentpay/
│   │       ├── page.tsx        # AgentPay case study page
│   │       └── agentpay.css    # Route-scoped case study styles
│   └── .well-known/            # Agent discovery, MCP, security, OAuth endpoints
│
├── components/
│   ├── icons.tsx               # Inline SVG icon library (TechIcon + UI icons)
│   ├── motion.tsx              # FadeIn scroll-reveal (IntersectionObserver)
│   ├── webmcp-tools.tsx        # Web-MCP tool registration for AI agents
│   └── views/                  # One component per page section
│       ├── NavigationDockView.tsx
│       ├── HeroView.tsx
│       ├── AboutView.tsx
│       ├── TechnicalWritingView.tsx
│       ├── ExperienceView.tsx
│       ├── EducationView.tsx
│       ├── ToolkitView.tsx
│       ├── ProjectsView.tsx
│       ├── OpenSourceView.tsx
│       ├── HackathonsView.tsx
│       ├── ContactView.tsx
│       └── FooterView.tsx
│
├── controllers/
│   └── portfolio.controller.ts # React hooks — nav, experience expand, contact form
│
├── models/
│   └── portfolio.model.ts      # TypeScript interfaces for all data shapes
│
├── data/
│   ├── portfolio.ts            # Canonical content — experience, projects, skills, links
│   └── hackathons.ts           # Hackathon entries
│
└── lib/
    ├── external-data.ts        # GitHub API fetcher (contributions + stats)
    └── github-heatmap.ts       # SVG heatmap renderer

public/
├── assets/                     # Profile photo (pfp.webp)
├── fonts/                      # HankenGrotesk variable TTFs
├── icons/                      # PWA icons
├── social/                     # OG image
└── llms.txt                    # LLM-readable public profile

scripts/
├── validate-portfolio.mjs      # Validates required data fields
├── check-seo.mjs               # SEO field audit
├── check-links.mjs             # External link health check
└── smoke-test.mjs              # Smoke test against live URL
```

---

## Architecture

This project follows a **Model-View-Controller** pattern adapted for Next.js:

- **Models** (`src/models/`) — Pure TypeScript interfaces; no logic.
- **Data** (`src/data/`) — The single source of truth for all portfolio content. Edit here to update the site.
- **Controllers** (`src/controllers/`) — Client-side React hooks encapsulating state and side effects (`useNavigationController`, `useExperienceController`, `useContactController`).
- **Views** (`src/components/views/`) — Presentational components, one per page section. Import data directly or consume controller hooks.
- **Lib** (`src/lib/`) — Server-side utilities (GitHub API, heatmap rendering).

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and run

```bash
git clone https://github.com/PrathamRanka/Portfolio-Website.git
cd Portfolio-Website
npm install
cp .env.example .env.local   # add GITHUB_TOKEN for heatmap
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | Yes (for heatmap) | GitHub PAT with `read:user` scope |

See [`.env.example`](.env.example) for the full list.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run validate:portfolio` | Validate required data fields in `portfolio.ts` |
| `npm run check:seo` | Audit SEO metadata fields |
| `npm run check:links` | Health-check all external links |
| `npm run smoke` | Smoke test against live `prathamranka.in` |
| `npm run update:llms` | Regenerate `public/llms.txt` from portfolio data |

---

## Customising for Your Own Use

All personal content lives in two files. Change those and the site updates everywhere — metadata, JSON-LD, OG tags, API endpoints, and `llms.txt`.

1. **`src/data/portfolio.ts`** — Experience, projects, skills, social links, education, resume URL.
2. **`src/data/hackathons.ts`** — Hackathon entries.

Additional updates needed when forking:

- `src/app/layout.tsx` — `siteUrl`, metadata, JSON-LD person/website nodes.
- `public/llms.txt` — Run `npm run update:llms` after editing data.
- `public/social/pratham-ranka-og.png` — Replace with your OG image.
- `public/assets/pfp.webp` — Replace with your profile photo.

---

## Agentic Features

This portfolio is designed to be machine-readable by AI agents and recruiters using LLM tooling:

| Endpoint | Description |
|---|---|
| `/llms.txt` | Plain-text profile for LLMs |
| `/api/profile` | Structured JSON profile |
| `/api/projects` | Structured JSON project list |
| `/api/github/heatmap` | Live GitHub contribution heatmap (1h cache) |
| `/.well-known/agent.json` | Agent discovery manifest |
| `/.well-known/mcp/server-card.json` | MCP server card |

The `WebMcpTools` component registers `get_profile` and `get_projects` tools with any Web-MCP-compatible AI agent visiting the page.

---

## License

[MIT](LICENSE) — Free to use as a template. Do not copy personal content (name, experience, projects, links).
