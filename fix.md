## Priority 0 — Fix immediately

  1. [x] Update vulnerable dependencies

  Completed: upgraded to Next.js 16.3.1, patched PostCSS and transitive dependencies, and reduced `npm audit` to zero known vulnerabilities.

  - Next.js 15.5.20 should be upgraded to at least the patched compatible release.
  - Your PostCSS override explicitly pins vulnerable 8.5.10.
  - Transitive Sharp, NanoID, js-yaml and brace-expansion versions require updates.

  See package.json:16.

  2. [x] Fix content hidden without JavaScript

  Completed: server-rendered content is visible by default; reveal states are applied only after JavaScript confirms the element can be observed.

  See src/components/motion.tsx:32.

  Use visible server-rendered content by default, then apply hidden entrance states only after JavaScript confirms it is active.

  3. [x] Fix professional content inconsistencies

  Completed on August 20, 2026: removed the stale current-employer claim and aligned SendAI Fun with its public repository name.

  - Hero says “Currently S45.”
  - Portrait says “Currently S45.”
  - Experience data has current: false.
  - Date says “July 2026 – Aug 2026.”

  See src/app/page.tsx:59 and src/data/portfolio.ts:33.

  Also verify why “LeaseForge” links to a repository named sendaifun. Naming mismatches reduce credibility.

  ## Priority 1 — Performance

  4. [x] Replace manual font loading with next/font/local

  Completed: local variable fonts now load through `next/font/local`, providing managed preloading and layout-shift protection. Convert them to WOFF2
  where licensing permits. (nextjs.org (https://nextjs.org/docs/app/getting-started/fonts))

  See src/app/globals.css:1.

  5. [x] Remove the duplicate image

  Completed: removed the unused byte-for-byte duplicate `public/assets/logo.png`.

  Previously, public/assets/logo.png:

  - Is unused
  - Is 803 KB
  - Is byte-for-byte identical to pfp.png

  6. [x] Compress oversized source images

  Completed: converted the portrait and company artwork to WebP and optimized the large PWA icons.

  - pfp.png: 803 KB
  - s45.png: 294 KB but displayed at roughly 42×42
  - PWA icon: 208 KB

  next/image optimizes delivered variants, but smaller source assets reduce deployment size and image-processing work. (nextjs.org
  (https://nextjs.org/docs/app/getting-started/images))

  7. [x] Remove obsolete CSS

  Completed: removed the obsolete `.skill-board`, `.skill-group`, `.skill-chip`, and related responsive styles.

  See src/app/globals.css:236.

  8. [x] Use one animation library

  Completed: removed GSAP and retained Motion as the single animation dependency; pointer effects now use native animation frames.

  Motion was included in the initial client bundle while GSAP loaded later. The considered options were:

  - Keep Motion and remove GSAP tilt effects, or
  - Replace generic Motion fades/magnetic effects with CSS and the existing GSAP chunk.

  This could reduce the 155 KB initial JavaScript further.

  9. [x] Load the cursor on first pointer movement

  Completed: the native cursor initializes on the first fine-pointer movement and downloads no secondary animation library.

  10. [x] Add content-visibility: auto

  Completed: applied `content-visibility: auto` with an intrinsic-size fallback to below-fold sections.

  11. [x] Increase GitHub cache duration

  Completed: GitHub data and heatmap caching now use a one-hour revalidation window with stale-while-revalidate protection.

  ## Priority 2 — Accessibility

  12. Add a “Skip to main content” link.
  13. Add a pause mechanism for the continuously moving skills marquee.
  14. Hide the duplicated marquee copy from screen readers.
  15. Use semantic lists for skills, projects and social links.
  16. Give repeated project links descriptive names:

  - “View LeaseForge source”
  - “Open StarSwap demo”

  17. Replace tooltip-only technology names with accessible text.
  18. Remove data-cursor="Scan" from non-interactive skill cards. It suggests an action when clicking does nothing.
  19. Perform a proper WCAG contrast audit, particularly on muted labels and footer text.
  20. Test keyboard-only navigation, 200% zoom, Windows High Contrast, VoiceOver and NVDA.

  Your reduced-motion and visible-focus support are already good.

  ## Priority 3 — Engineering quality

  21. Enable strict TypeScript

  The current configuration disables core protection:

  "allowJs": true,
  "strict": false,
  "noImplicitAny": false

  See tsconfig.json:5.

  22. Add scripts for:

  - typecheck
  - format
  - format:check
  - test
  - test:e2e
  - audit

  23. Add automated tests:

  - Homepage smoke test
  - Navigation anchors
  - External links
  - Metadata and structured data
  - GitHub heatmap fallback
  - Reduced-motion behavior
  - Mobile overflow
  - No-JavaScript content visibility

  24. Add GitHub Actions for lint, type checking, tests and build.
  25. Add Lighthouse CI with performance, accessibility, SEO and best-practice budgets.
  26. Add custom error.tsx and not-found.tsx pages.
  27. Add runtime error monitoring if the site is important professionally.
  28. Centralize personal details into one typed configuration file. Email, telephone, URLs, identity and social links are currently duplicated across data, page and
     metadata files.

  29. Add dependency-update automation using Dependabot or Renovate.
  30. Add Node and package-manager versions to package.json.

  ## Priority 4 — Security and reliability

  31. Add application security headers:

  - Content-Security-Policy
  - Strict-Transport-Security
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy
  - Frame restrictions

  Next.js supports response headers through next.config.ts. (nextjs.org (https://nextjs.org/docs/app/api-reference/config/next-config-js/headers))

  32. Disable the X-Powered-By header. (nextjs.org (https://nextjs.org/docs/app/api-reference/config/next-config-js/poweredByHeader))
  33. Paginate GitHub repository requests. The current API reads only the first 100 repositories.

  See src/lib/external-data.ts:49.

  34. Replace or reinforce GitHub HTML scraping. GitHub markup changes could silently break the contribution parser.
  35. Consider limiting access to the heatmap endpoint or adding stronger caching if traffic increases.

  ## Priority 5 — SEO and portfolio credibility

  Your technical SEO foundation is already strong: metadata, canonical URL, Open Graph, Twitter cards, JSON-LD, robots, sitemap and image metadata are present.

  Improvements:

  36. Create dedicated project case-study pages.
  37. Give every project unique metadata and structured data.
  38. Add architecture diagrams, screenshots, measurable outcomes and engineering trade-offs.
  39. Link directly to your Medusa pull requests or commits rather than only the Medusa repository homepage.
  40. Add live demos where practical.
  41. Host the résumé locally instead of relying on Google Drive.
  42. Replace sitemap lastModified: new Date() with the real content modification date.

  See src/app/sitemap.ts:8.

  43. Add project pages to the sitemap.
  44. Add genuine outcome metrics to experience descriptions. Current descriptions are dense but difficult to verify quickly.
  45. Avoid publishing your telephone and email inside JSON-LD unless you deliberately want them scraped.

  ## Priority 6 — Repository professionalism

  46. Rewrite CONTRIBUTING.md. It incorrectly references:

  - Tailwind CSS
  - Bun
  - MDX blogs
  - Directories that do not exist

  47. Remove one of the two conflicting Prettier configurations.
  48. Install the Prettier plugins referenced by those configurations—or remove them.
  49. Remove empty Context.md.
  50. Update the README clone URL to the repository’s new location.
  51. Update the Git remote from the old redirected repository URL.
  52. Remove commented-out Go definitions instead of retaining dead configuration.
## Implementation status

Priority 0 and Priority 1 were completed on August 20, 2026. Production build, lint, and dependency audit results are the completion gates. Priorities 2 through 6 remain open for later work.
