import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const portfolioPath = resolve('src', 'data', 'portfolio.ts');
const llmsPath = resolve('public', 'llms.txt');
const portfolio = readFileSync(portfolioPath, 'utf8');
const llms = readFileSync(llmsPath, 'utf8');

const projects = [...portfolio.matchAll(
  /name:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?github:\s*"([^"]+)"/g,
)].map(([, name, description, github]) => `### ${name}\n${description}\n\nGitHub: ${github}`);

const experience = [...portfolio.matchAll(
  /company:\s*"([^"]+)"[\s\S]*?role:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"[\s\S]*?description:\s*\n?\s*"([^"]+)"/g,
)].map(([, company, role, date, description]) => `### ${role} — ${company}\n${date}\n\n${description}`);

if (projects.length === 0 || experience.length === 0) {
  throw new Error('Could not extract projects and experience from portfolio.ts.');
}

const generated = [
  '<!-- BEGIN GENERATED PORTFOLIO DATA -->',
  '## Portfolio Data (Generated)',
  '',
  'This section is generated from `src/data/portfolio.ts`. Do not edit it manually.',
  '',
  '## Experience',
  '',
  experience.join('\n\n'),
  '',
  '## Projects',
  '',
  projects.join('\n\n'),
  '<!-- END GENERATED PORTFOLIO DATA -->',
].join('\n');
const markerPattern = /<!-- BEGIN GENERATED PORTFOLIO DATA -->[\s\S]*?<!-- END GENERATED PORTFOLIO DATA -->/;

if (!markerPattern.test(llms)) {
  throw new Error(`Could not find generated section markers in ${llmsPath}.`);
}

const updated = llms.replace(markerPattern, generated);
if (updated !== llms) {
  writeFileSync(llmsPath, updated);
  console.log(`Generated portfolio data in ${llmsPath}.`);
} else {
  console.log(`${llmsPath} is already generated.`);
}
