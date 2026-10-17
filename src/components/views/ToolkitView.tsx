
import type { IconName } from '@/data/portfolio';
import { TechnologyIcon } from '@/components/ui/technology-icon';

type Tool = {
  name: string;
  icon: IconName;
};

const tools: Tool[] = [
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Go', icon: 'go' },
  { name: 'Python', icon: 'python' },
  { name: 'C++', icon: 'cplusplus' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'node' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'WebSockets', icon: 'websocket' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Kafka', icon: 'kafka' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'AWS', icon: 'aws' },
  { name: 'GitHub Actions', icon: 'githubActions' },
  { name: 'Solidity', icon: 'solidity' },
  { name: 'Zero-Knowledge Proofs', icon: 'snarkjs' },
  { name: 'Git & GitHub', icon: 'githubactions' },
];

export function ToolkitView() {
  return (
    <section className="pt-8 pb-4" aria-labelledby="toolkit-heading">
      <hr className="mb-8 border-border" />

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
            <TechnologyIcon name={tool.icon} />
            {tool.name}
          </span>
        ))}
      </div>
    </section>
  );
}
