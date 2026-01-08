import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'AquaNexus',
    description:
      'AI-powered microorganism detection system with real-time analysis, batch processing, and scalable inference pipeline',
    image: '/project/aquanexus.png',
    link: 'https://aquanexus.vercel.app',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    github: 'https://github.com/PrathamRanka/aquanexus',
    live: 'https://aquanexus.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/aquanexus',
    isWorking: true,
  },
  {
    title: 'OWASP Recruitment Quiz Portal',
    description:
      'High-performance recruitment assessment platform supporting 15,000+ concurrent candidates with secure authentication and analytics',
    image: '/project/owasp.png',
    link: 'https://github.com/PrathamRanka/quizBackend',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/PrathamRanka/quizBackend',
    live: '/',
    details: true,
    projectDetailsPageSlug: '/projects/owasp-quiz-portal',
    isWorking: true,
  },
  {
    title: 'Krypt DeFi',
    description:
      'Decentralized finance platform for peer-to-peer ETH transfers with smart contracts and wallet integration',
    image: '/project/krypt-defi.png',
    link: 'https://krypt-defi.vercel.app',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    github: 'https://github.com/PrathamRanka/krypt-defi',
    live: 'https://krypt-defi.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/krypt-defi',
    isWorking: true,
  },
];
