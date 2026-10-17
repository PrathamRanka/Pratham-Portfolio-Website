import Image from 'next/image';
import { ArrowUpRight, GithubIcon } from '@/components/icons';
import { LinkButton } from '@/components/ui/button';

export function OpenSourceView() {
  return (
    <section className="pt-8 pb-4" id="open-source" aria-labelledby="oss-heading">
      <hr className="border-neutral-800/80 mb-8" />
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
        Open Source &amp; GitHub
      </span>
      <h2
        id="oss-heading"
        className="text-lg sm:text-xl font-bold text-white mb-5 tracking-tight"
      >
        Public GitHub Signal
      </h2>

      {/* PROTECTED GITHUB COMPONENT: EXACT COMPONENT, JSX, CLASSES, AND STYLES PRESERVED */}
      <div className="oss-layout">
          <div className="github-heatmap-heading">
            <div>
              <GithubIcon size={20} />
            </div>
              <LinkButton
                href="https://github.com/PrathamRanka"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
              >
                <span>Open profile</span>
                <ArrowUpRight size={13} />
              </LinkButton>
          </div>
          <a
            className="github-heatmap-link"
            href="https://github.com/PrathamRanka"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Pratham Ranka on GitHub"
          >
            <Image
              src="/api/github/heatmap"
              alt="Pratham Ranka public GitHub contribution heatmap with live statistics"
              width={854}
              height={289}
              unoptimized
              sizes="(max-width: 900px) calc(100vw - 40px), 854px"
            />
          </a>
      </div>
    </section>
  );
}
