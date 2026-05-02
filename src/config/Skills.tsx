import React from 'react';

import AWS from '@/components/technologies/AWS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import Go from '@/components/technologies/Go';
import Kafka from '@/components/technologies/Kafka';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import SocketIo from '@/components/technologies/SocketIo';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export type SkillCategory = {
  title: string;
  skills: { name: string; icon?: React.ReactNode }[];
};

export const skillsMatrix: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', icon: <TypeScript /> },
      { name: 'JavaScript', icon: <span className="font-bold text-yellow-400">JS</span> },
      { name: 'Python', icon: <span className="font-bold text-blue-500">PY</span> },
      { name: 'Go', icon: <Go /> },
      { name: 'C++', icon: <span className="font-bold text-blue-600">C++</span> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Next.js', icon: <NextJs /> },
      { name: 'Tailwind CSS', icon: <TailwindCss /> },
      { name: 'Framer Motion', icon: <span className="font-bold text-pink-500">FM</span> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <NodeJs /> },
      { name: 'Express.js', icon: <ExpressJs /> },
      { name: 'FastAPI', icon: <span className="font-bold text-teal-500">API</span> },
      { name: 'WebSockets', icon: <SocketIo /> },
      { name: 'Prisma', icon: <Prisma /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <PostgreSQL /> },
      { name: 'MongoDB', icon: <MongoDB /> },
      { name: 'Redis', icon: <span className="font-bold text-red-500">RE</span> },
      { name: 'Supabase', icon: <Supabase /> },
    ],
  },
  {
    title: 'DevOps & Infra',
    skills: [
      { name: 'Docker', icon: <span className="font-bold text-blue-400">DK</span> },
      { name: 'Kubernetes', icon: <span className="font-bold text-blue-600">K8S</span> },
      { name: 'AWS', icon: <AWS /> },
      { name: 'Kafka', icon: <Kafka /> },
      { name: 'Vercel', icon: <Vercel /> },
      { name: 'CI/CD', icon: <Github /> },
    ],
  },
];
