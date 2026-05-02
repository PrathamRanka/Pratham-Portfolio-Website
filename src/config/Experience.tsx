import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  shortDescription: React.ReactNode[];
  description: React.ReactNode[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
  badge?: string;
  metrics?: string[];
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'PAASA',
    badge: 'YC S24',
    metrics: [
      '$19M+ Assets',
      'Real-time Systems',
      'Payments Infra',
      'KYC Systems',
    ],
    position: 'Software Engineering Intern — Hybrid',
    location: 'Remote',
    image: '/company/paasa.png',
    shortDescription: [
      <span key="1">
        <strong>Sole engineer</strong> owning end-to-end development of a
        production-grade financial platform managing workflows across{' '}
        <strong>$19M+ in assets</strong>
      </span>,
      <span key="2">
        Architected secure banking infrastructure by integrating{' '}
        <strong>Axis, Kotak, ICICI</strong>, and other banking workflows using{' '}
        <strong>webhooks + polling systems</strong>
      </span>,
      <span key="3">
        Built secure authentication/payment infrastructure using{' '}
        <strong>
          NextAuth, KYC verification, API design, and GlomoPay integrations
        </strong>
      </span>,
    ],
    description: [
      <span key="1">
        Sole engineer owning end-to-end development of a production-grade
        financial web platform from scratch, translating Figma specs into
        responsive, production-ready interfaces managing workflows across{' '}
        <strong>$19M+ in assets</strong>
      </span>,
      <span key="2">
        Designed and built backend workflows for major banking integrations
        including <strong>Axis Bank, Kotak Bank, ICICI Bank</strong>, and other
        financial institutions
      </span>,
      <span key="3">
        Engineered reliable async transaction systems using{' '}
        <strong>webhooks</strong>, fallback{' '}
        <strong>polling architecture</strong>, and event-driven workflows for
        payment verification
      </span>,
      <span key="4">
        Designed scalable internal/external APIs using <strong>Swagger</strong>,
        improving developer collaboration and API reliability
      </span>,
      <span key="5">
        Integrated <strong>GlomoPay payment gateway</strong> and KYC
        verification systems for secure financial onboarding
      </span>,
      <span key="6">
        Built authentication infrastructure using <strong>NextAuth</strong> with
        secure session handling and protected workflows
      </span>,
      <span key="7">
        Developed full-stack features using{' '}
        <strong>
          Next.js, TypeScript, PostgreSQL, Tailwind, and backend services
        </strong>
      </span>,
      <span key="8">
        Optimized platform reliability by handling failure states, retries, API
        edge cases, and financial transaction flows
      </span>,
    ],
    startDate: 'March 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    website: 'https://paasa.com/',
    github: 'https://github.com/PrathamRanka',
    linkedin: 'https://linkedin.com/in/prathamranka',
  },
  {
    isCurrent: false,
    company: 'Talkeys',
    position: 'Full-Stack Intern',
    location: 'Patiala, India',
    image: '/company/talkeys.png',
    shortDescription: [
      <span key="1">
        Built <strong>4+ production features</strong> across full-stack systems
        using <strong>Next.js, TypeScript, React, Node.js</strong>
      </span>,
      <span key="2">
        Integrated and stabilized <strong>5+ APIs</strong>, improving platform
        reliability and backend communication
      </span>,
      <span key="3">
        Translated Figma designs into production-ready interfaces with reusable
        components
      </span>,
    ],
    description: [
      <span key="1">
        Delivered <strong>4+ production-grade features</strong> across frontend
        and backend systems using Next.js, TypeScript, React, Node.js, and
        MongoDB
      </span>,
      <span key="2">
        Built reusable UI components from Figma designs and improved frontend
        scalability
      </span>,
      <span key="3">
        Integrated and stabilized <strong>5+ REST APIs</strong> for reliable
        backend communication
      </span>,
      <span key="4">
        Fixed production bugs, handled edge cases, and improved application
        reliability
      </span>,
      <span key="5">
        Collaborated across shared codebases through pull requests and feature
        ownership
      </span>,
    ],
    startDate: 'June 2025',
    endDate: 'Aug 2025',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
    ],
    website: 'https://talkeys.com',
    github: 'https://github.com/PrathamRanka',
    linkedin: 'https://linkedin.com/in/prathamranka',
  },
];
