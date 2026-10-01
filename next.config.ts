import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
