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
const ardRoute = readFileSync(resolve('src', 'app', '.well-known', 'ai-catalog.json', 'route.ts'), 'utf8');
const authRoute = readFileSync(resolve('src', 'app', 'auth.md', 'route.ts'), 'utf8');
const protectedResourceRoute = readFileSync(resolve('src', 'app', '.well-known', 'oauth-protected-resource', 'route.ts'), 'utf8');
const authorizationServerRoute = readFileSync(resolve('src', 'app', '.well-known', 'oauth-authorization-server', 'route.ts'), 'utf8');
const agentPayPage = readFileSync(resolve('src', 'app', 'projects', 'agentpay', 'page.tsx'), 'utf8');
const checks = [
  ['metadata title', /title:\s*\{/],
  ['metadata description', /description:\s*['"`]/],
  ['canonical URL', /alternates:\s*\{[\s\S]*canonical:\s*siteUrl/],
  ['preferred canonical hostname', /https:\/\/www\.prathamranka\.in/],
  ['no stale canonical hostname', /^(?![\s\S]*owasptiet\.com\/recruit-core)[\s\S]*$/],
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
  ['ARD identifiers', /identifier:\s*'urn:air:/],
  ['Auth.md heading', /# Auth\.md/],
  ['Auth.md public access model', /public[\s\S]*require no OAuth[\s\S]*agent registration/],
  ['Auth.md registration limitation', /Agent registration[\s\S]*not supported or required/],
  ['Auth.md registration metadata', /register_uri:\s*null[\s\S]*identity_types_supported:\s*\[\][\s\S]*credential_types_supported:\s*\[\]/],
  ['Auth.md human confirmation', /human[\s\S]*review[\s\S]*send it/],
  ['protected resource identifier', /resource:\s*siteUrl/],
  ['protected resource public metadata', /authorization_servers:\s*\[\][\s\S]*authentication_required:\s*false/],
  ['protected resource unsupported metadata', /authorization_required:\s*false[\s\S]*oauth_supported:\s*false[\s\S]*agent_registration_supported:\s*false/],
  ['authorization server unsupported state', /status:\s*'not_supported'/],
  ['authorization server issuer', /issuer:\s*siteUrl/],
  ['no fabricated authorization endpoint', /^(?![\s\S]*authorization_endpoint:)[\s\S]*$/],
  ['no fabricated registration endpoint', /^(?![\s\S]*registration_endpoint:)[\s\S]*$/],
  ['AgentPay canonical URL', /canonical:\s*`\$\{siteUrl\}\/projects\/agentpay`/],
  ['AgentPay Open Graph URL', /url:\s*`\$\{siteUrl\}\/projects\/agentpay`/],
];
const source = `${layout}\n${sitemap}\n${robots}\n${agentRoute}\n${agentManifest}\n${profileRoute}\n${projectsRoute}\n${securityRoute}\n${feedRoute}\n${ardRoute}\n${authRoute}\n${protectedResourceRoute}\n${authorizationServerRoute}\n${agentPayPage}`;
const failures = checks.filter(([, pattern]) => !pattern.test(source));
if (!existsSync(resolve('public', 'llms.txt'))) failures.push(['public llms.txt', /./]);
if (failures.length) {
  console.error(`SEO checks failed: ${failures.map(([name]) => name).join(', ')}`);
  process.exit(1);
}
console.log('SEO source checks passed.');
