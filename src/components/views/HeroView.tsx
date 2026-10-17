
import Image from 'next/image';
import { resumeUrl } from '@/data/portfolio';
import { ArrowDownIcon, ArrowUpRight } from '@/components/icons';
import { LinkButton } from '@/components/ui/button';

export function HeroView() {
  return (
    <section className="pt-8 sm:pt-14 pb-8" aria-labelledby="hero-heading">
      {/* Eyebrow */}
      <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-3 flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
          aria-hidden="true"
        />
        <span>Software Engineer · TIET COE 2028 · Full-Stack Development</span>
      </div>

      {/* Main Hero Header */}
      <div className="flex items-start justify-between gap-6 sm:gap-8">
        <div className="flex-1">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center flex-wrap gap-2"
          >
            Hi, I&apos;m Pratham <span className="name-last">Ranka</span>
            <span className="sr-only">
              {' '}— Indian Backend and Full-Stack Engineer
            </span>
            <span className="text-2xl sm:text-3xl">👋</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
            Computer Engineering student at Thapar Institute of Engineering
            &amp; Technology (TIET), full-stack developer, open-source
            contributor, and fintech enthusiast. Specialising in
            high-reliability backend systems, distributed workflows, and
            cloud-native infrastructure.
          </p>
        </div>

        {/* Profile Avatar */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 shrink-0 shadow-xl">
          <Image
            src="/assets/pfp.webp"
            alt="Portrait of Pratham Ranka"
            width={80}
            height={80}
            priority
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hero Actions */}
      <div className="flex items-center flex-wrap gap-3 mt-6">
        <LinkButton href="#projects" size="md">
          <span>View Work</span>
          <ArrowDownIcon size={12} />
        </LinkButton>

        <LinkButton
          href="#contact"
          size="md"
          variant="secondary"
        >
          Contact Me
        </LinkButton>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 hover:underline px-2 py-2 font-medium"
        >
          <span>Resume</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
