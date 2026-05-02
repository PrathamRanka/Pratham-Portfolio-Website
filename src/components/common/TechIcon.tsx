'use client';

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
import NestJs from '@/components/technologies/NestJs';
import Bun from '@/components/technologies/Bun';
import Motion from '@/components/technologies/Motion';

const iconMap: Record<string, React.ReactNode> = {
  'Next.js': <NextJs />,
  'React': <ReactIcon />,
  'TypeScript': <TypeScript />,
  'JavaScript': <span className="font-bold text-yellow-400">JS</span>,
  'Node.js': <NodeJs />,
  'Express.js': <ExpressJs />,
  'Nest.js': <NestJs />,
  'MongoDB': <MongoDB />,
  'PostgreSQL': <PostgreSQL />,
  'Prisma': <Prisma />,
  'Tailwind CSS': <TailwindCss />,
  'Kafka': <Kafka />,
  'Redis': <span className="font-bold text-red-500">RE</span>,
  'Docker': <span className="font-bold text-blue-400">DK</span>,
  'AWS': <AWS />,
  'Supabase': <Supabase />,
  'Vercel': <Vercel />,
  'Bun': <Bun />,
  'Go': <Go />,
  'Framer Motion': <Motion />,
  'Socket.io': <SocketIo />,
  'GitHub': <Github />,
};

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = 'size-5' }: TechIconProps) {
  const icon = iconMap[name] || <span className="text-[10px] font-bold opacity-50">{name.substring(0, 2).toUpperCase()}</span>;
  
  return (
    <div className={className}>
      {icon}
    </div>
  );
}
