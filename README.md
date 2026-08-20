# Portfolio Website

A polished, responsive developer portfolio built with Next.js, React, TypeScript, and Motion. It includes experience and project showcases, a live GitHub contribution heatmap, SEO metadata, PWA support, and production analytics.

This repository is designed to be forked and personalized. Replace the content, images, links, and metadata with your own details, then deploy it as your portfolio.

## Features

- Responsive single-page portfolio with an editorial, dark visual system
- Experience timeline, selected projects, skills, open-source work, and contact sections
- Live GitHub profile statistics and contribution heatmap
- Smooth entrance and component motion using Motion for React
- Lightweight native pointer interactions for the custom cursor and skills tilt effects
- Search-engine metadata, Open Graph cards, JSON-LD, sitemap, and robots configuration
- Installable PWA manifest and application icons
- Vercel Analytics and Speed Insights integration
- Local variable fonts and optimized images
- Type-safe content configuration with TypeScript

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 15 App Router |
| UI | React 19, TypeScript |
| Styling | Global CSS with custom properties and responsive layouts |
| Motion | Motion for React with native pointer interactions |
| Icons | Custom React icons and Simple Icons |
| Analytics | Vercel Analytics and Speed Insights |
| Quality | ESLint, Prettier, TypeScript |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PrathamRanka/Portfolio-Website.git
cd Portfolio-Website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

On PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Update the values for your portfolio:

```env
NEXT_PUBLIC_URL="http://localhost:3000"
GITHUB_USERNAME="your-github-username"
GITHUB_TOKEN=""
```

`GITHUB_TOKEN` is optional, but recommended for higher GitHub API rate limits. Keep it server-side and never prefix it with `NEXT_PUBLIC_`.

### 4. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Personalizing the Portfolio

Most portfolio content lives in a few focused files:

| What to change | File |
| --- | --- |
| Experience, projects, skills, resume, and social links | `src/data/portfolio.ts` |
| Name, introduction, contact details, section copy, and open-source feature | `src/app/page.tsx` |
| Page title, description, social cards, structured data, and personal identity | `src/app/layout.tsx` |
| GitHub username fallback and data behavior | `src/lib/external-data.ts` |
| PWA name, description, theme, and icons | `src/app/manifest.ts` |
| Colors, typography, spacing, responsive behavior, and component styles | `src/app/globals.css` |
| Custom cursor behavior | `src/components/custom-cursor.tsx` |
| Skills presentation and content layout | `src/components/skills-showcase.tsx` |
| Deferred skills interactions | `src/components/skills-interactions.tsx` |
| Portrait and brand images | `public/assets/` |
| Company logos | `public/company/` |
| Social preview image | `public/social/` |
| Favicons and PWA icons | `public/icons/` |

### Personalization checklist

Before publishing your fork, replace all of the following:

- Name, role, biography, location, email address, and phone number
- Resume URL, social profiles, project links, and company information
- Portrait, logo, company logos, social preview image, and app icons
- GitHub username in `.env.local`
- Metadata, JSON-LD person data, and canonical production URL
- PWA manifest identity and theme values
- Default personal references by searching the repository:

```bash
rg "Pratham|Ranka|PrathamRanka|prathamranka|pr7ham|70232"
```

If `rg` is unavailable, use your editor's global search.

## Current Project Structure

Generated directories such as `.next/` and `node_modules/` are intentionally omitted.

```text
Portfolio-Website/
|-- public/
|   |-- assets/
|   |   `-- pfp.webp
|   |-- company/
|   |   |-- paasa.webp
|   |   |-- s45.webp
|   |   `-- talkeys.webp
|   |-- fonts/
|   |   |-- HankenGrotesk-Italic-Variable.ttf
|   |   `-- HankenGrotesk-Variable.ttf
|   |-- icons/
|   |   |-- apple-touch-icon.png
|   |   |-- favicon-32.png
|   |   |-- icon-192.png
|   |   |-- icon-512.png
|   |   `-- icon-maskable-512.png
|   `-- social/
|       `-- pratham-ranka-og.png
|-- src/
|   |-- app/
|   |   |-- api/
|   |   |   `-- github/
|   |   |       `-- heatmap/
|   |   |           `-- route.ts
|   |   |-- favicon.ico
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- manifest.ts
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   |-- components/
|   |   |-- custom-cursor.tsx
|   |   |-- icons.tsx
|   |   |-- motion.tsx
|   |   |-- skills-interactions.tsx
|   |   `-- skills-showcase.tsx
|   |-- data/
|   |   `-- portfolio.ts
|   `-- lib/
|       |-- external-data.ts
|       `-- github-heatmap.ts
|-- .env.example
|-- .gitignore
|-- .prettierrc
|-- .prettierrc.json
|-- ABOUT_ME.md
|-- CONTRIBUTING.md
|-- LICENSE
|-- README.md
|-- eslint.config.mjs
|-- next.config.ts
|-- package-lock.json
|-- package.json
`-- tsconfig.json
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Turbopack development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production server after a build |
| `npm run lint` | Checks the project with ESLint |

## GitHub Integration

The portfolio reads public GitHub data in two ways:

1. `src/lib/external-data.ts` fetches profile and repository statistics from the GitHub REST API.
2. `src/app/api/github/heatmap/route.ts` serves the contribution heatmap used on the home page.

The data is cached and revalidated every five minutes. If GitHub is unavailable, the portfolio handles the failure without breaking the page.

## Production Build

Run the quality checks before deployment:

```bash
npm run lint
npm run build
```

For production, set these environment variables in your hosting provider:

```env
NEXT_PUBLIC_URL="https://your-domain.com"
GITHUB_USERNAME="your-github-username"
GITHUB_TOKEN="your-optional-server-token"
```

## Deployment

### Vercel

1. Push your customized repository to GitHub.
2. Import the repository into Vercel.
3. Add the production environment variables.
4. Deploy and connect your custom domain.

The project already includes Vercel Analytics and Speed Insights. They activate automatically on a supported Vercel deployment.

### Other platforms

Any platform that supports a standard Next.js Node.js deployment can run the project:

```bash
npm run build
npm run start
```

## Accessibility and Performance

The interface uses semantic sections, descriptive labels, keyboard focus styles, responsive images, local fonts, and reduced-motion handling. The portfolio content remains server-rendered, so search engines and visitors receive the complete skills content without waiting for JavaScript.

Animation is implemented as progressive enhancement:

- Pointer interactions use native animation frames, avoiding a second animation runtime.
- The custom cursor initializes only after the first pointer movement on devices with a fine pointer.
- Skills tilt effects load only when the capabilities section approaches the viewport.
- Touch devices do not initialize pointer-tracking effects.
- Visitors using `prefers-reduced-motion` receive the complete interface without decorative motion.
- High-frequency pointer values are applied directly through refs and animation frames instead of React state, avoiding render loops.
- Animated elements use `transform` and `opacity` to avoid layout shifts and expensive reflow.

These safeguards help protect Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift, accessibility, and SEO while retaining the interactive desktop experience.

Before deployment, measure the optimized production build rather than the development server:

```bash
npm run build
npm run start
```

Then run Lighthouse against the local production URL or the deployed site. Re-test after changing images, fonts, analytics, animation timing, or third-party scripts because those changes can affect Core Web Vitals.

When customizing the interface, preserve meaningful image alt text, visible focus states, heading order, sufficient color contrast, and reduced-motion behavior.

## Contributing

Contributions are welcome. Read `CONTRIBUTING.md`, create a focused branch, and open a pull request with a clear description of the change. Run linting and a production build before submitting.

## License

This project is available under the [MIT License](LICENSE). You may use, modify, and distribute it for your own portfolio. Attribution is appreciated but not required by the license.
