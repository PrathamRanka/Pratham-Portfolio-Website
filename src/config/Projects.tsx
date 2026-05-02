import Cpp from '@/components/technologies/Cpp';
import Go from '@/components/technologies/Go';
import Kafka from '@/components/technologies/Kafka';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Sahayak PFMS',
    description:
      'Enterprise-grade Public Financial Management System handling multi-tenant architecture and high-throughput real-time streaming.',
    image: '/project/abstract-banner.png',
    link: 'https://github.com/PrathamRanka/NSUT_HACK_2k26',
    technologies: [
      { name: 'Kafka', icon: <Kafka key="kafka" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    architectureHighlights: [
      'Microservices architecture',
      'Fraud detection ML inference',
      'Geospatial dashboards',
      'Audit logging',
    ],
    metrics: ['10,000+ TPS', 'Sub-100ms latency'],
    github: 'https://github.com/PrathamRanka/NSUT_HACK_2k26',
    live: 'https://github.com/PrathamRanka/NSUT_HACK_2k26',
    details: true,
    projectDetailsPageSlug: '/projects/sahayak-pfms',
    isWorking: true,
  },
  {
    title: 'StarSwap',
    description:
      'High-performance cryptocurrency token swap platform with distributed rate limiting and optimal concurrency handling.',
    image: '/project/abstract-banner.png',
    link: 'https://github.com/PrathamRanka/starswap',
    technologies: [
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgres" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
    ],
    architectureHighlights: [
      'Redis token bucket rate limiting',
      'Redis ZSET leaderboard',
      'O(logN) reads',
      'Concurrency handling',
      'Docker & Railway deployment',
      'GitHub OAuth',
    ],
    metrics: ['High Concurrency', 'O(logN) Reads'],
    github: 'https://github.com/PrathamRanka/starswap',
    live: 'https://github.com/PrathamRanka/starswap',
    details: true,
    projectDetailsPageSlug: '/projects/starswap',
    isWorking: true,
  },
  {
    title: 'AquaNexus',
    description:
      'AI-powered microorganism detection system with real-time analysis, batch processing, and scalable inference pipeline',
    image: '/project/abstract-banner.png',
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
    title: 'OWASP Quiz Portal',
    description:
      'High-performance recruitment assessment platform supporting 15,000+ concurrent candidates with secure authentication and analytics',
    image: '/project/abstract-banner.png',
    link: 'https://github.com/PrathamRanka/quizBackend',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/PrathamRanka/quizBackend',
    live: 'https://github.com/PrathamRanka/quizBackend',
    details: true,
    projectDetailsPageSlug: '/projects/owasp-quiz-portal',
    isWorking: true,
  },
  {
    title: 'Krypt DeFi',
    description:
      'Decentralized finance platform for peer-to-peer ETH transfers with smart contracts and wallet integration',
    image: '/project/abstract-banner.png',
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
    image: '/project/abstract-banner.png',
    link: 'https://github.com/PrathamRanka/Tcp-Server-Go',
    technologies: [{ name: 'Go', icon: <Go key="go" /> }],
    github: 'https://github.com/PrathamRanka/Tcp-Server-Go',
    live: 'https://github.com/PrathamRanka/Tcp-Server-Go',
    details: true,
    projectDetailsPageSlug: '/projects/tcp-server-go',
    isWorking: true,
  },
  {
    title: 'LAB-EVAL-HELPER',
    description:
      'DSA lab survival tool with reusable templates and patterns for common data structure evaluation problems',
    image: '/project/abstract-banner.png',
    link: 'https://github.com/PrathamRanka/LAB-EVAL-HELPER',
    technologies: [{ name: 'C++', icon: <Cpp key="cpp" /> }],
    github: 'https://github.com/PrathamRanka/LAB-EVAL-HELPER',
    live: 'https://github.com/PrathamRanka/LAB-EVAL-HELPER',
    details: true,
    projectDetailsPageSlug: '/projects/lab-eval-helper',
    isWorking: true,
  },
];
