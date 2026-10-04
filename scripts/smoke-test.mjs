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

if (failures.length) {
  console.error(`Smoke test failures:\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`Smoke tests passed for ${baseUrl}.`);
