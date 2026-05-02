import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const mySkills = [
  <ReactIcon key="react" />,
  <Bun key="bun" />,
  <JavaScript key="javascript" />,
  <TypeScript key="typescript" />,
  <MongoDB key="mongodb" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <Prisma key="prisma" />,
];

export const about = {
  name: 'Pratham Ranka',
  description: `I'm a Software Engineer and Full Stack Web Developer who thrives on architecting robust digital products. Specializing in the Next.js and React ecosystems, I build scalable applications, high-performance MVPs, and modern web experiences. As an active Open Source Contributor, I focus on delivering clean, maintainable code that solves real-world business challenges.`,
};

export const skillsText = {
  programmingLanguages: 'C++, C, Go, JavaScript, TypeScript',
  backendTechnologies: 'Node.js, Express.js, Apache Kafka, Microservices',
  frontendTechnologies: 'React.js, Next.js',
  databases: 'MongoDB',
  deploymentPlatforms: 'Vercel, Railway, Netlify',
  developerTools: 'Git, GitHub, Docker, Kubernetes, Postman, Linux',
};
