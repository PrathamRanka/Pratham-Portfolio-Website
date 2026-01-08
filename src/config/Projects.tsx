import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import Cpp from '@/components/technologies/Cpp';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import Go from '@/components/technologies/Go';
import Kafka from '@/components/technologies/Kafka';
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
import Supabase from '@/components/technologies/Supabase';
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
  {
    title: 'TCP Server in Go',
    description:
      'Low-level TCP networking from scratch with stream-based communication, concurrent connection handling using goroutines',
    image: '/project/tcp-server-go.png',
    link: 'https://github.com/PrathamRanka/Tcp-Server-Go',
    technologies: [
      { name: 'Go', icon: <Go key="go" /> },
    ],
    github: 'https://github.com/PrathamRanka/Tcp-Server-Go',
    live: 'https://github.com/PrathamRanka/Tcp-Server-Go',
    details: false,
    projectDetailsPageSlug: '/projects/tcp-server-go',
    isWorking: false,
  },
  {
    title: 'LAB-EVAL-HELPER',
    description:
      'DSA lab survival tool with reusable templates and patterns for common data structure evaluation problems',
    image: '/project/lab-eval-helper.png',
    link: 'https://github.com/PrathamRanka/LAB-EVAL-HELPER',
    technologies: [
      { name: 'C++', icon: <Cpp key="cpp" /> },
    ],
    github: 'https://github.com/PrathamRanka/LAB-EVAL-HELPER',
    live: 'https://github.com/PrathamRanka/LAB-EVAL-HELPER',
    details: false,
    projectDetailsPageSlug: '/projects/lab-eval-helper',
    isWorking: false,
  },
  {
    title: 'VIGIL OS Pro',
    description:
      'Real-time fraud detection and vendor risk monitoring platform with event-driven architecture supporting transaction streaming',
    image: '/project/vigil-os-pro.png',
    link: 'https://github.com/PrathamRanka/NSUT_HACK_2K25',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Kafka', icon: <Kafka key="kafka" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Supabase', icon: <Supabase key="supabase" /> },
    ],
    github: 'https://github.com/PrathamRanka/NSUT_HACK_2K25',
    live: 'https://github.com/PrathamRanka/NSUT_HACK_2K25',
    details: false,
    projectDetailsPageSlug: '/projects/vigil-os-pro',
    isWorking: false,
  },
];
