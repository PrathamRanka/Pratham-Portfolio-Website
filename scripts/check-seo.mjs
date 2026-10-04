import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const layout = readFileSync(resolve('src', 'app', 'layout.tsx'), 'utf8');
const sitemap = readFileSync(resolve('src', 'app', 'sitemap.ts'), 'utf8');
const robots = readFileSync(resolve('src', 'app', 'robots.ts'), 'utf8');
const checks = [
  ['metadata title', /title:\s*\{/],
  ['metadata description', /description:\s*['"`]/],
  ['canonical URL', /alternates:\s*\{\s*canonical:/],
  ['JSON-LD', /application\/ld\+json/],
  ['llms alternate', /href="\/llms\.txt"/],
  ['sitemap route', /MetadataRoute\.Sitemap/],
  ['robots route', /MetadataRoute\.Robots/],
  ['OG image', /social\/pratham-ranka-og\.png/],
];
const failures = checks.filter(([, pattern]) => !pattern.test(`${layout}\n${sitemap}\n${robots}`));
if (!existsSync(resolve('public', 'llms.txt'))) failures.push(['public llms.txt', /./]);
if (failures.length) {
  console.error(`SEO checks failed: ${failures.map(([name]) => name).join(', ')}`);
  process.exit(1);
}
console.log('SEO source checks passed.');
