import {
  siApachekafka,
  siCplusplus,
  siDocker,
  siEthers,
  siFastapi,
  siFfmpeg,
  siGithubactions,
  siGo,
  siKubernetes,
  siJest,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siSocketdotio,
  siSolidity,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';

import type { IconName } from '@/data/portfolio';

const icons: Record<IconName, SimpleIcon> = {
  typescript: siTypescript,
  go: siGo,
  python: siPython,
  cplusplus: siCplusplus,
  node: siNodedotjs,
  fastapi: siFastapi,
  websocket: siSocketdotio,
  postgresql: siPostgresql,
  redis: siRedis,
  kafka: siApachekafka,
  mongodb: siMongodb,
  docker: siDocker,
  kubernetes: siKubernetes,
  githubActions: siGithubactions,
  nextjs: siNextdotjs,
  react: siReact,
  aws: { path: 'M6.7 17.5c-2.6 0-4.7-1.9-4.7-4.4 0-2.3 1.7-4.2 4-4.5A6.2 6.2 0 0 1 17.8 7a5.3 5.3 0 0 1 .3 10.5H6.7Zm2.4-7.2-2 5.4h1.6l.4-1.2h2l.4 1.2h1.6l-2-5.4H9.1Zm.4 3 .6-1.8.6 1.8H9.5Zm4-3 1.5 5.4h1.5l.8-3 .8 3H20l1.5-5.4H20l-.8 3.3-.8-3.3h-1.4l-.8 3.3-.8-3.3h-1.5Z' } as SimpleIcon,
  solidity: siSolidity,
  snarkjs: { path: 'M12 1.5 21 6.7v10.6L12 22.5l-9-5.2V6.7l9-5.2Zm0 2.2L5 7.8v8.4l7 4.1 7-4.1V7.8l-7-4.1Zm-3.8 5h7.6v1.8h-5.2l5.2 4.8v1.9H8.2v-1.8h5.1l-5.1-4.8V8.7Z' } as SimpleIcon,
  ethers: siEthers,
  base: { path: 'M12 2a10 10 0 1 0 9.8 12H12v-4h9.8A10 10 0 0 0 12 2Z' } as SimpleIcon,
  ffmpeg: siFfmpeg,
  githubactions: siGithubactions,
  jest: siJest,
  cli: { path: 'M3 4h18v16H3V4Zm2 2v12h14V6H5Zm2 3 3 3-3 3-1.2-1.2L7.6 12 5.8 10.2 7 9Zm4.5 5h5v1.7h-5V14Z' } as SimpleIcon,
};

export function TechIcon({ name, size = 18 }: { name: IconName; size?: number }) {
  const icon = icons[name];
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
    >
      <path d={icon.path} />
    </svg>
  );
}

export function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.96 10.96 0 0 1 12 6.12c.98 0 1.95.13 2.86.38 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.78 1.07.78 2.16v3.27c0 .3.21.66.8.55A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.3 7.4H1.7V22h3.6V7.4ZM3.5 1A2.5 2.5 0 1 0 3.5 6a2.5 2.5 0 0 0 0-5ZM22 13.1c0-4.4-2.3-6.4-5.4-6.4-2.5 0-3.6 1.4-4.2 2.3V7.4H8.8V22h3.6v-7.2c0-1.9.4-3.8 2.8-3.8 2.4 0 2.4 2.2 2.4 3.9V22H22v-8.9Z" />
    </svg>
  );
}

export function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16v12H4V6Zm.5.5L12 13l7.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function FileIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 3h8l4 4v14H6V3Zm8 0v5h4M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon({ size = 18 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m4 10 8-7 8 7v10h-6v-6h-4v6H4V10Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" /></svg>;
}

export function BriefcaseIcon({ size = 18 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 8h18v12H3V8Zm5 0V5h8v3M3 12h18M10 12v2h4v-2" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" /></svg>;
}

export function LayersIcon({ size = 18 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m12 3 9 5-9 5-9-5 9-5Zm-8.5 10L12 18l8.5-5M3.5 17 12 22l8.5-5" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" /></svg>;
}

export function SparkIcon({ size = 18 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2c.7 5.4 3.6 8.3 9 9-5.4.7-8.3 3.6-9 9-.7-5.4-3.6-8.3-9-9 5.4-.7 8.3-3.6 9-9Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" /></svg>;
}

export function MusicIcon({ size = 18 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M9 18V6l11-2v12M9 18a3 3 0 1 1-3-3h3v3Zm11-2a3 3 0 1 1-3-3h3v3Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" /></svg>;
}

export function PhoneIcon({ size = 18 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M7.3 3H4.5C3.7 3 3 3.7 3.1 4.5c.7 8.7 7.7 15.7 16.4 16.4.8.1 1.5-.6 1.5-1.4v-2.8l-4-1.6-1.4 2.3a15.2 15.2 0 0 1-9-9L9 7 7.3 3Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" /></svg>;
}
