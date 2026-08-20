import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

const hanken = localFont({
  src: [
    {
      path: '../../public/fonts/HankenGrotesk-Variable.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../../public/fonts/HankenGrotesk-Italic-Variable.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  display: 'swap',
  variable: '--font-hanken',
});

const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pratham Ranka — Backend Engineer',
    template: '%s | Pratham Ranka',
  },
  description:
    'Backend engineer building distributed systems, reliable infrastructure, open-source software, and production-grade products.',
  applicationName: 'Pratham Ranka',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'technology',
  keywords: [
    'Pratham Ranka',
    'backend engineer',
    'software engineer',
    'distributed systems',
    'production infrastructure',
    'open source',
    'Node.js',
    'TypeScript',
    'Kubernetes',
  ],
  authors: [{ name: 'Pratham Ranka', url: siteUrl }],
  creator: 'Pratham Ranka',
  publisher: 'Pratham Ranka',
  manifest: '/manifest.webmanifest',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Pratham Ranka — Backend Engineer',
    description:
      'Backend engineer building reliable production systems, distributed infrastructure, and open-source software.',
    url: siteUrl,
    siteName: 'Pratham Ranka',
    locale: 'en_IN',
    type: 'profile',
    firstName: 'Pratham',
    lastName: 'Ranka',
    username: 'PrathamRanka',
    images: [
      {
        url: '/social/pratham-ranka-og.png',
        width: 1200,
        height: 630,
        alt: 'Pratham Ranka — Backend Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratham Ranka — Backend Engineer',
    description:
      'Backend engineer building reliable production systems, distributed infrastructure, and open-source software.',
    creator: '@pr7ham_develops',
    images: ['/social/pratham-ranka-og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icons/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'Pratham Ranka',
    statusBarStyle: 'black-translucent',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#050607',
    'msapplication-TileImage': '/icons/icon-192.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#050607',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile`,
        url: siteUrl,
        name: 'Pratham Ranka — Backend Engineer',
        description:
          'Portfolio of Pratham Ranka, a backend engineer building distributed systems and production infrastructure.',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}/social/pratham-ranka-og.png`,
          width: 1200,
          height: 630,
        },
        mainEntity: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Pratham Ranka',
        givenName: 'Pratham',
        familyName: 'Ranka',
        jobTitle: 'Software Engineer',
        url: siteUrl,
        image: `${siteUrl}/assets/pfp.webp`,
        email: 'mailto:prathamworks06@gmail.com',
        telephone: '+91-70232-06003',
        address: { '@type': 'PostalAddress', addressCountry: 'IN' },
        knowsAbout: [
          'Backend Engineering',
          'Distributed Systems',
          'Production Infrastructure',
          'Open Source Software',
          'Kubernetes',
          'TypeScript',
        ],
        sameAs: [
          'https://github.com/PrathamRanka',
          'https://www.linkedin.com/in/prathamranka06/',
          'https://x.com/pr7ham_develops',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Pratham Ranka',
        inLanguage: 'en-IN',
        author: { '@id': `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <link rel="me" href="https://github.com/PrathamRanka" />
        <link rel="me" href="https://www.linkedin.com/in/prathamranka06/" />
        <link rel="me" href="https://x.com/pr7ham_develops" />
      </head>
      <body className={hanken.variable}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
