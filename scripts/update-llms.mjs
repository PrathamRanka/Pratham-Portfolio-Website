import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const llmsPath = resolve('public', 'llms.txt');
const commitDate = execFileSync('git', ['log', '-1', '--format=%cI'], {
  encoding: 'utf8',
}).trim();

if (!commitDate) {
  throw new Error('Could not determine the latest commit date.');
}

const formattedDate = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
  timeZone: 'UTC',
}).format(new Date(commitDate));
const content = readFileSync(llmsPath, 'utf8');
const lastUpdatedPattern = /^Last updated: .*$/m;

if (!lastUpdatedPattern.test(content)) {
  throw new Error(`Could not find the "Last updated:" line in ${llmsPath}.`);
}

const updatedContent = content.replace(lastUpdatedPattern, `Last updated: ${formattedDate}`);

if (updatedContent !== content) {
  writeFileSync(llmsPath, updatedContent);
  console.log(`Updated ${llmsPath} to ${formattedDate}.`);
} else {
  console.log(`${llmsPath} is already up to date.`);
}
