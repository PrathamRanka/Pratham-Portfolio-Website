import type { SimpleIcon } from 'simple-icons';
import {
  siTypescript,
  siGo,
  siPython,
  siCplusplus,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siFastapi,
  siPostgresql,
  siRedis,
  siApachekafka,
  siMongodb,
  siDocker,
  siKubernetes,
  siGithubactions,
  siSolidity,
  siFfmpeg,
} from 'simple-icons';
import {
  Radio,
  ShieldCheck,
  Cloud,
  Terminal,
  CircleHelp,
} from 'lucide-react';

import type { IconName } from '@/data/portfolio';

const icons: Partial<Record<IconName, SimpleIcon>> = {
  typescript: siTypescript,
  go: siGo,
  python: siPython,
  cplusplus: siCplusplus,
  react: siReact,
  nextjs: siNextdotjs,
  node: siNodedotjs,
  fastapi: siFastapi,
  postgresql: siPostgresql,
  redis: siRedis,
  kafka: siApachekafka,
  mongodb: siMongodb,
  docker: siDocker,
  kubernetes: siKubernetes,
  githubActions: siGithubactions,
  githubactions: siGithubactions,
  solidity: siSolidity,
  ffmpeg: siFfmpeg,
};

type Props = {
  name: IconName;
  className?: string;
};

const fallbackColors: Partial<Record<IconName, string>> = {
  websocket: 'text-[#22C55E]',
  snarkjs: 'text-[#A78BFA]',
  cli: 'text-foreground',
};

export function TechnologyIcon({
  name,
  className = 'size-4',
}: Props) {
  const icon = icons[name];

  if (icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`shrink-0 ${className}`}
        fill={name === 'nextjs' ? '#FFFFFF' : `#${icon.hex}`}
      >
        <path d={icon.path} />
      </svg>
    );
  }

  const Fallback =
    name === 'websocket'
      ? Radio
      : name === 'aws'
        ? Cloud
        : name === 'cli' || name === 'ffmpeg'
          ? Terminal
          : name === 'snarkjs' || name === 'base'
            ? ShieldCheck
            : CircleHelp;

  return (
    <Fallback
      aria-hidden="true"
      className={`shrink-0 ${className} ${fallbackColors[name] ?? 'text-foreground'}`}
    />
  );
}
