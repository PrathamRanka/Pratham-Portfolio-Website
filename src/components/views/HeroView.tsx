import Image from 'next/image';
import { resumeUrl } from '@/data/portfolio';
import { ArrowDownIcon, ArrowUpRight } from '@/components/icons';
import { LinkButton } from '@/components/ui/button';

export function HeroView() {
  return (
    <section
      className="pt-16 pb-20 sm:pt-24 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Eyebrow */}
      <div className="mb-8 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 sm:text-xs">
        <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
        <span>Software Engineer</span>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
        <div className="min-w-0 flex-1">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl"
          >
            Hi, I&apos;m Pratham{' '}
            <span className="name-last">Ranka</span>
            <span className="ml-3 inline-block text-3xl sm:text-4xl" aria-hidden="true">
              👋
            </span>
            <span className="sr-only">— Backend and Full-Stack Engineer</span>
          </h1>

          <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-neutral-400 sm:text-lg sm:leading-8">
            Computer Engineering student at Thapar Institute of Engineering
            &amp; Technology (2028), focused on backend engineering,
            distributed systems, and fintech infrastructure. I build reliable
            full-stack products and cloud-native systems, and contribute to
            open-source software.
          </p>
        </div>

        {/* Profile Portrait */}
        <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-neutral-800 bg-neutral-900 shadow-lg ring-4 ring-neutral-900/60 sm:size-32">
          <Image
            src="/assets/pfp.webp"
            alt="Portrait of Pratham Ranka"
            fill
            priority
            sizes="(max-width: 640px) 96px, 128px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Hero Actions */}
      <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
        <LinkButton href="#projects" size="md" variant="outline">
          <span>View Projects</span>
          <ArrowDownIcon size={12} />
        </LinkButton>

        <LinkButton href="#contact" size="md" variant="secondary">
          Contact Me
        </LinkButton>

        <LinkButton
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          variant="primary"
        >
          <span>Resume</span>
          <ArrowUpRight size={13} />
        </LinkButton>
      </div>
    </section>
  );
}