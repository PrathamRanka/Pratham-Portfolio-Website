
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
  siGit,
} from 'simple-icons';

import {
  Radio,
  ShieldCheck,
} from 'lucide-react';

type Tool = {
  name: string;
  icon?: SimpleIcon;
  color?: string;
  fallback?: 'websocket' | 'zk';
};

const tools: Tool[] = [
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Go', icon: siGo },
  { name: 'Python', icon: siPython },
  { name: 'C++', icon: siCplusplus },
  { name: 'React', icon: siReact },
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'FastAPI', icon: siFastapi },
  { name: 'WebSockets', fallback: 'websocket' },
  { name: 'PostgreSQL', icon: siPostgresql },
  // { name: 'DynamoDB', icon: siAmazondynamodb },
  { name: 'Redis', icon: siRedis },
  { name: 'Kafka', icon: siApachekafka },
  { name: 'MongoDB', icon: siMongodb },
  { name: 'Docker', icon: siDocker },
  { name: 'Kubernetes', icon: siKubernetes },
  // { name: 'AWS', icon: siAmazonwebservices },
  { name: 'GitHub Actions', icon: siGithubactions },
  { name: 'Solidity', icon: siSolidity },
  { name: 'Zero-Knowledge Proofs', fallback: 'zk' },
  { name: 'Git & GitHub', icon: siGit },
];

export function ToolkitView() {
  return (
    <section className="pt-8 pb-4" aria-labelledby="toolkit-heading">
      <hr className="border-border mb-8" />

      <h2
        id="toolkit-heading"
        className="mb-5 text-lg font-bold tracking-tight text-foreground sm:text-xl"
      >
        Toolkit
      </h2>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool.name}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-elevated px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-brand/50 hover:bg-surface-hover"
          >
            {tool.icon ? (
              <svg
                role="img"
                aria-label={tool.icon.title}
                viewBox="0 0 24 24"
                className="size-4 shrink-0"
                fill="currentColor"
              >
                <path d={tool.icon.path} />
              </svg>
            ) : tool.fallback === 'websocket' ? (
              <Radio aria-hidden="true" className="size-4 shrink-0" />
            ) : (
              <ShieldCheck aria-hidden="true" className="size-4 shrink-0" />
            )}

            {tool.name}
          </span>
        ))}
      </div>
    </section>
  );
}
