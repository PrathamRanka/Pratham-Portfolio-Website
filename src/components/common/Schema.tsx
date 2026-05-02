import { about } from '@/config/About';
import { heroConfig, socialLinks } from '@/config/Hero';
import { siteConfig } from '@/config/Meta';

export default function Schema() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: heroConfig.name,
    jobTitle: 'Software Engineer & Full Stack Developer',
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: socialLinks.map((link) => link.href),
    description: about.description,
    email: siteConfig.author.email,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
