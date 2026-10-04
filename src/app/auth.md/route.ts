export function GET() {
  return new Response(`# Auth.md

## Access model

The portfolio's profile and project APIs are public. They require no OAuth, OIDC, API key,
credential, or agent registration.

## Public endpoints

- GET /api/profile
- GET /api/projects
- GET /api/agent
- POST /api/agent for a human-reviewed mailto draft

## Agent registration

Agent registration is not supported or required. This site does not issue identities,
credentials, access tokens, API keys, or registration links.

## Contact action

The contact action only creates a prefilled mailto draft. It never sends email automatically.
Agents must show the returned draft to a human, who must review and send it.

OAuth and OpenID Connect discovery URLs remain available to describe this unsupported
authentication state, but no authorization server or protected resource is active.
`, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
