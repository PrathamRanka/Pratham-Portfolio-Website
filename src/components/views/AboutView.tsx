import { resumeUrl } from '@/data/portfolio';
import { ArrowUpRight } from '@/components/icons';

export function AboutView() {
  return (
    <section id="about" className="pt-8 pb-4" aria-labelledby="about-heading">
      <hr className="border-neutral-800/80 mb-8" />
      <h2
        id="about-heading"
        className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight"
      >
        About
      </h2>

      <div className="space-y-4 text-sm sm:text-[15px] text-neutral-400 leading-relaxed max-w-xl">
        <p>
          I am a software engineer and Computer Engineering student at Thapar Institute of Engineering
          &amp; Technology (2028 batch) based in India. I focus on building robust, product-first
          backend systems, distributed architectures, and scalable full-stack web applications.
        </p>
        <p>
          My work spans fintech infrastructure, payment settlement systems, autonomous AI agent
          runtimes, and developer tooling. I have engineered production systems handling millions
          in asset workflows, non-custodial x402 USDC micropayments with Go and AWS, and low-latency
          distributed caching pipelines.
        </p>
        <p>
          Outside of production systems, I contribute to open-source software (including Medusa) and
          believe that great engineering is defined by making failure modes, domain boundaries, and
          operational tradeoffs explicit, testable, and dependable.
        </p>
      </div>

      <div className="mt-4">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 hover:underline font-medium"
        >
          <span>Read verified resume</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
