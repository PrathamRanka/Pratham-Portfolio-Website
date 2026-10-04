import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const layout = readFileSync(resolve('src', 'app', 'layout.tsx'), 'utf8');
const sitemap = readFileSync(resolve('src', 'app', 'sitemap.ts'), 'utf8');
const robots = readFileSync(resolve('src', 'app', 'robots.ts'), 'utf8');
const agentRoute = readFileSync(resolve('src', 'app', 'api', 'agent', 'route.ts'), 'utf8');
const agentManifest = readFileSync(resolve('src', 'app', '.well-known', 'agent.json', 'route.ts'), 'utf8');
const profileRoute = readFileSync(resolve('src', 'app', 'api', 'profile', 'route.ts'), 'utf8');
const projectsRoute = readFileSync(resolve('src', 'app', 'api', 'projects', 'route.ts'), 'utf8');
const securityRoute = readFileSync(resolve('src', 'app', '.well-known', 'security.txt', 'route.ts'), 'utf8');
const feedRoute = readFileSync(resolve('src', 'app', 'feed.xml', 'route.ts'), 'utf8');
const checks = [
  ['metadata title', /title:\s*\{/],
  ['metadata description', /description:\s*['"`]/],
  ['canonical URL', /alternates:\s*\{\s*canonical:/],
  ['JSON-LD', /application\/ld\+json/],
  ['llms alternate', /href="\/llms\.txt"/],
  ['sitemap route', /MetadataRoute\.Sitemap/],
  ['robots route', /MetadataRoute\.Robots/],
  ['OG image', /social\/pratham-ranka-og\.png/],
  ['AI crawler access', /GPTBot[\s\S]*ClaudeBot[\s\S]*PerplexityBot/],
  ['agent capabilities route', /export function GET/],
  ['agent contact action', /action !== 'contact'/],
  ['agent discovery manifest', /schema_version/],
  ['structured profile route', /experience[\s\S]*projects[\s\S]*skills/],
  ['project index route', /projects\.map/],
  ['security contact policy', /Contact: mailto:/],
  ['RSS feed', /application\/rss\+xml/],
];
const failures = checks.filter(([, pattern]) => !pattern.test(`${layout}\n${sitemap}\n${robots}\n${agentRoute}\n${agentManifest}\n${profileRoute}\n${projectsRoute}\n${securityRoute}\n${feedRoute}`));
if (!existsSync(resolve('public', 'llms.txt'))) failures.push(['public llms.txt', /./]);
if (failures.length) {
  console.error(`SEO checks failed: ${failures.map(([name]) => name).join(', ')}`);
  process.exit(1);
}
console.log('SEO source checks passed.');
