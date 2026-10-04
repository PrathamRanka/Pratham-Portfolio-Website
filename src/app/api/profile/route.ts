import { NextResponse } from 'next/server';

import { experience, projects, resumeUrl, skillGroups, socialLinks } from '@/data/portfolio';

const siteUrl = (process.env.NEXT_PUBLIC_URL || 'https://www.prathamranka.in').replace(/\/$/, '');

export function GET() {
  return NextResponse.json({
    schemaVersion: '1.0',
    lastUpdated: new Date().toISOString(),
    sourceOfTruth: 'https://github.com/PrathamRanka/Portfolio-Website',
    person: {
      name: 'Pratham Ranka',
      role: 'Software Engineer',
      location: 'India',
      email: 'prathamworks06@gmail.com',
      phone: '+91 70232 06003',
      website: siteUrl,
      resume: resumeUrl,
      profiles: socialLinks,
    },
    experience,
    projects,
    skills: skillGroups.map((group) => ({
      category: group.label,
      skills: group.skills.map((skill) => skill.name),
    })),
  });
}
