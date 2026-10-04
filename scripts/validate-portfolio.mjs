import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const portfolio = readFileSync(resolve('src', 'data', 'portfolio.ts'), 'utf8');
const llms = readFileSync(resolve('public', 'llms.txt'), 'utf8');
const required = [
  '## Portfolio Data (Generated)',
  '## Experience',
  '## Projects',
  '## Skills',
  'prathamranka.in',
  'prathamworks06@gmail.com',
];
const missing = required.filter((value) => !llms.includes(value));
const projectNames = [...portfolio.matchAll(/name:\s*"([^"]+)"/g)].map(([, name]) => name);
const missingProjects = projectNames.filter((name) => !llms.includes(`### ${name}`));
const duplicateSections = ['## Work Experience', '## Projects'].filter(
  (heading) => (llms.match(new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length > 1,
);

if (missing.length || missingProjects.length || duplicateSections.length) {
  if (missing.length) console.error(`Missing llms.txt content: ${missing.join(', ')}`);
  if (missingProjects.length) console.error(`Missing projects: ${missingProjects.join(', ')}`);
  if (duplicateSections.length) console.error(`Duplicate sections: ${duplicateSections.join(', ')}`);
  process.exit(1);
}

console.log(`Validated ${projectNames.length} projects and required llms.txt content.`);
