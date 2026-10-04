import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
const eslintVersion = packageJson.devDependencies?.eslint;

if (!eslintVersion || !/^(\^|~)?10(?:\.|$)/.test(eslintVersion)) {
  console.log('No known ESLint 10 incompatibility found.');
  process.exit(0);
}

packageJson.devDependencies.eslint = '^9';
writeFileSync('package.json', `${JSON.stringify(packageJson, null, 2)}\n`);
execFileSync('npm', ['install', '--package-lock-only', '--ignore-scripts'], {
  stdio: 'inherit',
});
console.log(`Repaired ESLint dependency ${eslintVersion} to ${packageJson.devDependencies.eslint}.`);
