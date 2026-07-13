import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Pratham Ranka - Backend Engineer',
  description: 'Backend engineer building distributed systems, reliable infrastructure, and production-grade software.',
  keywords: ['Pratham Ranka', 'backend engineer', 'distributed systems', 'software engineer', 'open source'],
  authors: [{ name: 'Pratham Ranka' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Pratham Ranka - Backend Engineer',
    description: 'Distributed systems, reliable infrastructure, and production-grade software.',
    url: siteUrl,
    siteName: 'Pratham Ranka',
    type: 'website',
    images: [{ url: '/assets/logo.png', width: 1200, height: 630, alt: 'Pratham Ranka' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratham Ranka - Backend Engineer',
    description: 'Distributed systems, reliable infrastructure, and production-grade software.',
    images: ['/assets/logo.png'],
  },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = { themeColor: '#050607', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pratham Ranka',
    jobTitle: 'Software Engineer',
    url: siteUrl,
    image: `${siteUrl}/assets/pfp.png`,
    email: 'mailto:prathamworks06@gmail.com',
    telephone: '+91-70232-06003',
    sameAs: ['https://github.com/PrathamRanka', 'https://www.linkedin.com/in/prathamranka06/', 'https://x.com/pr7ham_develops'],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
