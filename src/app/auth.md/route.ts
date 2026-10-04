export function GET() {
  return new Response(`# Agent authentication

This portfolio's APIs are public and currently require no OAuth, OIDC, API key, or agent registration.

## Public endpoints

- GET /api/profile
- GET /api/projects
- GET /api/agent
- POST /api/agent for a human-reviewed mailto draft

The contact action never sends email automatically. Agents must show the returned draft to a human before sending it.

OAuth discovery is published for compatibility, but no authorization server or protected resource is currently active.
`, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
