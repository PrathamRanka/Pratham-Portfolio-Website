import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const files = ['public/llms.txt', 'README.md', 'src/data/portfolio.ts'];
const urls = Array.from(new Set(files.flatMap((file) => {
  const content = readFileSync(resolve(file), 'utf8');
  return [...content.matchAll(/https?:\/\/[^\s)"'<>]+/g)].map(([url]) => url.replace(/[.,]$/, ''));
}))).filter((url) => !url.startsWith('http://localhost:'));
const failures = [];

for (const url of urls) {
  try {
    let response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, { redirect: 'follow' });
    }
    if (!response.ok) failures.push(`${response.status} ${url}`);
  } catch (error) {
    failures.push(`${error instanceof Error ? error.message : 'request failed'} ${url}`);
  }
}

if (failures.length) {
  const message = `Link warnings (${failures.length}):\n${failures.join('\n')}`;
  if (process.env.STRICT_LINKS === 'true') {
    console.error(message);
    process.exit(1);
  }
  console.warn(message);
}

if (!failures.length) {
  console.log(`Checked ${urls.length} links.`);
} else {
  console.log(`Checked ${urls.length} links with warnings.`);
}
