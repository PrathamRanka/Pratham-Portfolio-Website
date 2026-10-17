'use client';
import { ArrowUpRight } from '@/components/icons';
import { LinkButton } from '@/components/ui/button';

const email = 'prathamworks06@gmail.com';
const phone = '+917023206003';

export function ContactView() {

  return (
    <section id="contact" className="pt-10 pb-6" aria-labelledby="contact-heading">
      <hr className="border-neutral-800/80 mb-10" />

      {/* Dark Contact Card matching Screenshot 819 */}
      <div className="rounded-2xl border border-neutral-800/80 bg-neutral-950/70 p-6 sm:p-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
          Contact
        </span>
        <h2
          id="contact-heading"
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
        >
          Get in Touch
        </h2>
        <p className="text-sm text-neutral-400 max-w-xl leading-relaxed mb-6">
          Have a project or engineering role in mind? I welcome opportunities in backend engineering,
          distributed systems, open-source collaboration, and full-stack architecture.
        </p>

        {/* Email Direct Link */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <LinkButton
            href={`mailto:${email}?subject=Engineering%20opportunity%20for%20Pratham%20Ranka`}
            variant="primary"
            size="md"
          >
            <span>Email Me</span>
            <ArrowUpRight size={14} />
          </LinkButton>

          <LinkButton
            href={`tel:${phone}`}
            variant="secondary"
            size="md"
          >
            <span>+91 70232 06003</span>
            <ArrowUpRight size={14} />
          </LinkButton>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-4 text-sm mb-8">
          <LinkButton
            href="https://github.com/PrathamRanka"
            target="_blank"
            variant='secondary'
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300 underline font-medium"
          >
            GitHub
          </LinkButton>
          <LinkButton
            href="https://www.linkedin.com/in/prathamranka06/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300 underline font-medium"
          >
            LinkedIn
          </LinkButton>
          <LinkButton
            href="https://x.com/pr7ham_develops"
            target="_blank"
            variant='secondary'
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300 underline font-medium"
          >
            X
          </LinkButton>
        </div>

        {/* Contact Draft Form for AI Agents & Recruiters */}
      </div>
    </section>
  );
}
