import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { experience, projects, skillGroups, socialLinks } from '@/data/portfolio';
import { SmoothScroll } from '@/components/smooth-scroll';
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
  other: {
    'llms-txt': `${siteUrl}/llms.txt`,
    'profile-page': siteUrl,
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#050607',
    'msapplication-TileImage': '/icons/icon-192.png',
  },
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
  const skills = Array.from(new Set(skillGroups.flatMap((group) => group.skills.map((skill) => skill.name))));
  const profileLinks = socialLinks.map((link) => link.href);
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
        dateModified: new Date().toISOString().slice(0, 10),
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
        knowsAbout: ['Backend Engineering', 'Distributed Systems', 'Production Infrastructure', 'Open Source Software', ...skills],
        sameAs: profileLinks,
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Software Engineer',
          occupationLocation: { '@type': 'Country', name: 'India' },
          skills: skills.join(', '),
        },
        subjectOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Pratham Ranka',
        description:
          'Portfolio of Pratham Ranka, a software engineer building reliable backend systems, distributed infrastructure, and open-source software.',
        inLanguage: 'en-IN',
        author: { '@id': `${siteUrl}/#person` },
        publisher: { '@id': `${siteUrl}/#person` },
        image: `${siteUrl}/social/pratham-ranka-og.png`,
        potentialAction: {
          '@type': 'ContactAction',
          target: 'mailto:prathamworks06@gmail.com',
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#projects`,
        name: 'Selected software projects by Pratham Ranka',
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'SoftwareSourceCode',
            name: project.name,
            description: project.description,
            codeRepository: project.github,
            keywords: project.technologies.join(', '),
            url: project.github,
          },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#experience`,
        name: 'Professional experience of Pratham Ranka',
        itemListElement: experience.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'OrganizationRole',
            roleName: item.role,
            startDate: item.date.split(' - ')[0],
            endDate: item.date.split(' - ')[1],
            description: item.description,
            memberOf: { '@type': 'Organization', name: item.company },
          },
        })),
      },
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable profile" />
        <link rel="me" href="https://github.com/PrathamRanka" />
        <link rel="me" href="https://www.linkedin.com/in/prathamranka06/" />
        <link rel="me" href="https://x.com/pr7ham_develops" />
      </head>
      <body className={hanken.variable}>
        {children}
        <SmoothScroll />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
