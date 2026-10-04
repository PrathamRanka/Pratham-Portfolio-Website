import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
				],
			},
			{
				source: '/llms.txt',
				headers: [
					{ key: 'Content-Type', value: 'text/plain; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400' },
					{ key: 'X-Robots-Tag', value: 'index, follow' },
				],
			},
			{
				source: '/api/agent',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=3600' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
				],
			},
			{
				source: '/.well-known/agent.json',
				headers: [
					{ key: 'Content-Type', value: 'application/json; charset=utf-8' },
					{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400' },
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
				],
			},
			{
				source: '/updates.xml',
				headers: [
					{ key: 'Content-Type', value: 'application/rss+xml; charset=utf-8' },
				],
			},
			{
				source: '/api/profile',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=3600' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
				],
			},
			{
				source: '/api/projects/:path*',
				headers: [
					{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=3600' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
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
