import { LinkButton } from '@/components/ui/button';
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
          I'm a Computer Engineering student at Thapar Institute of Engineering
          &amp; Technology (2028), focused on backend engineering, distributed
          systems, and building reliable full-stack products.
        </p>

        <p>
          My experience spans fintech and payment infrastructure at PAASA (YC S24),
          software engineering at S45, and cloud-native systems built with Go, AWS,
          and Terraform. I enjoy tackling challenges in system design, reliability,
          security, and performance.
        </p>

        <p>
          I'm an open-source contributor, including work on Medusa, and placed
          4th at the Qualcomm × Snapdragon Multiverse Hackathon.
        </p>

        <p className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-[#F97316]/25 bg-[#F97316]/10 px-2 py-1 font-semibold text-[#FB923C]">
            <span aria-hidden="true">🍥</span>
            Dattebayo!
          </span>
          <span>
            Big Naruto fan inspired by the determination to keep improving,
            no matter how many times you get knocked down.
          </span>
        </p>
      </div>

      <div className="mt-4">
        <LinkButton
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
        >
          Resume
          <ArrowUpRight size={14} />
        </LinkButton>
      </div>
    </section>
  );
}
