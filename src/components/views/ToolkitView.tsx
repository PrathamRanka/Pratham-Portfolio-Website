const tools = [
  'TypeScript',
  'Go',
  'Python',
  'C++',
  'React',
  'Next.js',
  'Node.js',
  'FastAPI',
  'WebSockets',
  'PostgreSQL',
  'DynamoDB',
  'Redis',
  'Kafka',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'AWS',
  'GitHub Actions',
  'Solidity',
  'Zero-Knowledge Proofs',
  'Git & GitHub',
];

export function ToolkitView() {
  return (
    <section className="pt-8 pb-4" aria-labelledby="toolkit-heading">
      <hr className="border-neutral-800/80 mb-8" />
      <h2
        id="toolkit-heading"
        className="text-lg sm:text-xl font-bold text-white mb-5 tracking-tight"
      >
        Toolkit
      </h2>

      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:text-white transition-colors"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
