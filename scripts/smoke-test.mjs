const baseUrl = (process.env.SITE_URL || 'https://www.prathamranka.in').replace(/\/$/, '');
const routes = [
  '/',
  '/llms.txt',
  '/sitemap.xml',
  '/robots.txt',
  '/.well-known/agent.json',
  '/.well-known/security.txt',
  '/.well-known/api-catalog',
  '/.well-known/oauth-authorization-server',
  '/.well-known/openid-configuration',
  '/.well-known/oauth-protected-resource',
  '/.well-known/mcp/server-card.json',
  '/.well-known/agent-skills/index.json',
  '/.well-known/ai-catalog.json',
  '/auth.md',
  '/api/agent',
  '/api/profile',
  '/api/projects',
  '/api/projects/agentpay',
  '/feed.xml',
  '/updates.xml',
  '/projects/agentpay',
];
const failures = [];

for (const route of routes) {
  try {
    const response = await fetch(`${baseUrl}${route}`, { redirect: 'follow' });
    if (!response.ok) failures.push(`${response.status} ${route}`);
  } catch (error) {
    failures.push(`${error instanceof Error ? error.message : 'request failed'} ${route}`);
  }
}

async function expectJson(route, assertions) {
  try {
    const response = await fetch(`${baseUrl}${route}`, { redirect: 'follow' });
    const body = await response.json();
    for (const [name, assertion] of assertions) {
      if (!assertion(body)) failures.push(`${route}: ${name}`);
    }
  } catch (error) {
    failures.push(`${error instanceof Error ? error.message : 'JSON request failed'} ${route}`);
  }
}

await expectJson('/.well-known/oauth-protected-resource', [
  ['canonical resource identifier', (body) => body.resource === baseUrl],
  ['public authentication state', (body) => body.authentication_required === false],
  ['public authorization state', (body) => body.authorization_required === false],
  ['OAuth unsupported state', (body) => body.oauth_supported === false],
  ['agent registration unsupported state', (body) => body.agent_registration_supported === false],
  ['no authorization servers', (body) => Array.isArray(body.authorization_servers) && body.authorization_servers.length === 0],
  ['no scopes', (body) => Array.isArray(body.scopes_supported) && body.scopes_supported.length === 0],
]);

await expectJson('/.well-known/oauth-authorization-server', [
  ['canonical issuer', (body) => body.issuer === baseUrl],
  ['unsupported state', (body) => body.status === 'not_supported'],
  ['no authorization endpoint', (body) => !('authorization_endpoint' in body)],
  ['no token endpoint', (body) => !('token_endpoint' in body)],
  ['no registration endpoint', (body) => !('registration_endpoint' in body)],
  ['registration unsupported', (body) => body.agent_auth?.status === 'not_supported'],
]);

await expectJson('/api/agent', [
  ['capabilities response', (body) => Array.isArray(body.capabilities)],
]);

try {
  const response = await fetch(`${baseUrl}/api/agent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'contact', message: 'Smoke test inquiry' }),
  });
  const body = await response.json();
  if (!response.ok) failures.push('/api/agent: contact draft request failed');
  if (body.status !== 'ready_for_human_confirmation') failures.push('/api/agent: contact action is not human-confirmed');
  if (!body.mailto || !body.mailto.startsWith('mailto:') || body.recipient !== 'prathamworks06@gmail.com') {
    failures.push('/api/agent: contact draft missing mailto');
  }
} catch (error) {
  failures.push(`${error instanceof Error ? error.message : 'contact request failed'} /api/agent`);
}

try {
  const response = await fetch(`${baseUrl}/auth.md`, { redirect: 'follow' });
  const body = await response.text();
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.startsWith('text/markdown')) failures.push('/auth.md: missing Markdown content type');
  if (!body.includes('Agent registration is not supported or required')) failures.push('/auth.md: missing registration limitation');
  if (!body.includes('register_uri: null') || !body.includes('credential_types_supported: []')) {
    failures.push('/auth.md: missing machine-readable registration status');
  }
  if (!body.includes('human') || !body.includes('send it')) failures.push('/auth.md: missing human confirmation policy');
} catch (error) {
  failures.push(`${error instanceof Error ? error.message : 'Markdown request failed'} /auth.md`);
}

try {
  const response = await fetch(`${baseUrl}/sitemap.xml`, { redirect: 'follow' });
  const body = await response.text();
  const canonicalSitemapBase = 'https://www.prathamranka.in';
  const requiredSitemapUrls = [`${canonicalSitemapBase}/`, `${canonicalSitemapBase}/projects/agentpay`];
  const forbiddenSitemapPaths = [
    '/api/',
    '/feed.xml',
    '/updates.xml',
    '/llms.txt',
    '/auth.md',
    '/.well-known/',
  ];
  if (!response.ok || !body.includes('<urlset')) failures.push('/sitemap.xml: invalid XML response');
  for (const url of requiredSitemapUrls) {
    if (!body.includes(`<loc>${url}</loc>`)) failures.push(`/sitemap.xml: missing ${url}`);
  }
  if (!body.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
    failures.push('/sitemap.xml: missing standard sitemap namespace');
  }
  for (const path of forbiddenSitemapPaths) {
    if (body.includes(`<loc>${canonicalSitemapBase}${path}`)) {
      failures.push(`/sitemap.xml: contains non-indexable resource ${path}`);
    }
  }
  const sitemapLocs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  for (const loc of sitemapLocs) {
    if (!loc.startsWith(`${canonicalSitemapBase}/`)) {
      failures.push(`/sitemap.xml: non-canonical hostname ${loc}`);
    }
    const verificationUrl = loc.replace(canonicalSitemapBase, baseUrl);
    const pageResponse = await fetch(verificationUrl, { redirect: 'manual' });
    const contentType = pageResponse.headers.get('content-type') || '';
    if (pageResponse.status !== 200 || !contentType.startsWith('text/html')) {
      failures.push(`/sitemap.xml: ${loc} is not a successful HTML page`);
    }
  }
} catch (error) {
  failures.push(`${error instanceof Error ? error.message : 'Sitemap request failed'} /sitemap.xml`);
}

try {
  const [robotsResponse, llmsResponse, homepageResponse] = await Promise.all([
    fetch(`${baseUrl}/robots.txt`),
    fetch(`${baseUrl}/llms.txt`),
    fetch(baseUrl),
  ]);
  const robots = await robotsResponse.text();
  const llms = await llmsResponse.text();
  const linkHeader = homepageResponse.headers.get('link') || '';
  for (const path of ['/sitemap.xml', '/llms.txt', '/api/profile', '/api/projects', '/api/agent', '/.well-known/']) {
    if (!robots.includes(`Allow: ${path}`) && path !== '/.well-known/') {
      failures.push(`/robots.txt: missing Allow ${path}`);
    }
  }
  for (const resource of ['/.well-known/ai-catalog.json', '/.well-known/api-catalog', '/.well-known/mcp/server-card.json', '/.well-known/agent-skills/index.json']) {
    if (!llms.includes(resource)) failures.push(`/llms.txt: missing ${resource}`);
    if (!linkHeader.includes(resource)) failures.push('homepage Link header: missing ' + resource);
  }
} catch (error) {
  failures.push(`${error instanceof Error ? error.message : 'Discovery surface request failed'} discovery surfaces`);
}

if (failures.length) {
  console.error(`Smoke test failures:\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`Smoke tests passed for ${baseUrl}.`);
