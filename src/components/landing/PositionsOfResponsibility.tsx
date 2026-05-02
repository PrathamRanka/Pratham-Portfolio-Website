import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

interface Position {
  organization: string;
  role: string;
  bullets: string[];
}

const positions: Position[] = [
  {
    organization: 'HACK4DELHI 2026',
    role: 'Top 28 Finalist (out of 1,200 teams)',
    bullets: [
      'Built and pitched an enterprise-grade solution in a high-pressure 24-hour hackathon',
      'Competed against 5,000+ participants in an IEEE-sponsored, Government-backed event',
      'Demonstrated rapid prototyping, system architecture, and product execution',
    ],
  },
  {
    organization: 'OWASP TIET Chapter',
    role: 'Core Developer',
    bullets: [
      'Architected and built the official OWASP TIET website',
      'Developed a scalable Quiz Portal and Capture The Flag (CTF) platform',
      'Platforms served 5,000+ users efficiently without downtime',
      'Championed secure development practices and scalable architectures',
    ],
  },
];

export default function PositionsOfResponsibility() {
  return (
    <Container className="mt-20">
      <SectionHeading
        subHeading="Milestones"
        heading="Leadership & Achievements"
      />
      <div className="mt-8 flex flex-col gap-12">
        {positions.map((position, index) => (
          <div key={position.organization} className="relative flex gap-6">
            {/* Vertical line connector */}
            {index < positions.length - 1 && (
              <div className="absolute left-2 top-12 h-20 w-px bg-border" />
            )}

            {/* Timeline dot */}
            <div className="flex flex-col items-center pt-1">
              <div className="h-4 w-4 rounded-full border-2 border-foreground bg-background" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold">{position.organization}</h3>
                <p className="text-secondary text-sm">{position.role}</p>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {position.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-foreground text-sm leading-relaxed"
                  >
                    <span className="text-border mr-2">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
