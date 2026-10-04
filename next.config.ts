import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	poweredByHeader: false,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
					{
						key: 'X-Robots-Tag',
						value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
					},
					{
						key: 'Link',
						value: '</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent.json>; rel="describedby", </.well-known/ai-catalog.json>; rel="describedby", </.well-known/mcp/server-card.json>; rel="describedby", </.well-known/agent-skills/index.json>; rel="describedby", </api/profile>; rel="service-desc", </api/projects>; rel="service-desc", </api/agent>; rel="service-doc", </sitemap.xml>; rel="alternate", </feed.xml>; rel="alternate"',
					},
				],
			},
			{
				source: '/llms.txt',
				headers: [
					{ key: 'Content-Type', value: 'text/plain; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
					{ key: 'X-Robots-Tag', value: 'index, follow' },
				],
			},
			{
				source: '/api/agent',
				headers: [
					{ key: 'Access-Control-Allow-Origin', value: '*' },
				],
			},
			{
				source: '/.well-known/agent.json',
				headers: [
					{ key: 'Content-Type', value: 'application/json; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/.well-known/security.txt',
				headers: [
					{ key: 'Content-Type', value: 'text/plain; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=604800' },
				],
			},
			{
				source: '/feed.xml',
				headers: [
					{ key: 'Content-Type', value: 'application/rss+xml; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/updates.xml',
				headers: [
					{ key: 'Content-Type', value: 'application/rss+xml; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/api/profile',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
				],
			},
			{
				source: '/api/projects/:path*',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
				],
			},
			{
				source: '/.well-known/api-catalog',
				headers: [
					{ key: 'Content-Type', value: 'application/linkset+json; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/.well-known/ai-catalog.json',
				headers: [
					{ key: 'Content-Type', value: 'application/json; charset=utf-8' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/.well-known/mcp/server-card.json',
				headers: [
					{ key: 'Content-Type', value: 'application/json; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/.well-known/agent-skills/index.json',
				headers: [
					{ key: 'Content-Type', value: 'application/json; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/auth.md',
				headers: [
					{ key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/.well-known/oauth-protected-resource',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/.well-known/oauth-authorization-server',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/.well-known/openid-configuration',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/sitemap.xml',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/robots.txt',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
				],
			},
			{
				source: '/assets/:path*',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
				],
			},
			{
				source: '/fonts/:path*',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
				],
			},
			{
				source: '/icons/:path*',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
				],
			},
			{
				source: '/social/:path*',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
				],
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'destroy.spritefusion.com',
				pathname: '/badge.svg',
			},
		],
	},
};

export default nextConfig;
