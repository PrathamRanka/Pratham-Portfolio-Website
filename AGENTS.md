# AGENTS.md

## Project

This repository is the personal portfolio of Pratham Ranka, a software engineer focused on backend engineering, distributed systems, production infrastructure, open-source software, and product development.

## Stack and commands

- Next.js App Router, React 19, TypeScript, and Motion for React
- Run `npm run dev` for local development.
- Run `npm run lint` for ESLint.
- Run `npm run build` for the production build.

## Source of truth

- Portfolio content: `src/data/portfolio.ts`
- Page copy and section structure: `src/app/page.tsx`
- Metadata and JSON-LD: `src/app/layout.tsx`
- Public AI-readable profile: `public/llms.txt`
- Public assets: `public/`

When changing a person, project, company, contact detail, or social link, update `src/data/portfolio.ts` or the owning page/configuration and keep `public/llms.txt`, metadata, and structured data consistent.

## Content facts

Use only details supported by the repository or the live portfolio. Do not invent employers, dates, metrics, education, certifications, project URLs, or availability. The canonical public contact email is `prathamworks06@gmail.com`; the canonical website is `https://prathamranka.in`.

## Editing guidance

- Preserve the existing visual language and responsive behavior.
- Keep SEO text factual and useful to people, not keyword-stuffed.
- Keep external links secure with `target="_blank"` and `rel="noreferrer"` where appropriate.
- Do not expose secrets or add tokens to tracked files.
- Prefer focused edits and validate touched TypeScript with `npm run lint` and, when relevant, `npm run build`.
