const baseUrl = (process.env.SITE_URL || 'https://www.prathamranka.in').replace(/\/$/, '');
const routes = ['/', '/llms.txt', '/sitemap.xml', '/robots.txt', '/projects/agentpay'];
const failures = [];

for (const route of routes) {
  try {
    const response = await fetch(`${baseUrl}${route}`, { redirect: 'follow' });
    if (!response.ok) failures.push(`${response.status} ${route}`);
  } catch (error) {
    failures.push(`${error instanceof Error ? error.message : 'request failed'} ${route}`);
  }
}

if (failures.length) {
  console.error(`Smoke test failures:\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`Smoke tests passed for ${baseUrl}.`);
