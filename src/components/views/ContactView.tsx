'use client';

import { useContactController } from '@/controllers/portfolio.controller';
import { ArrowUpRight } from '@/components/icons';
import { LinkButton } from '@/components/ui/button';

const email = 'prathamworks06@gmail.com';
const phone = '+917023206003';

export function ContactView() {
  const { status, isSubmitting, handleSubmit } = useContactController();

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
        <div className="pt-6 border-t border-neutral-900">
          <p className="text-xs text-neutral-400 mb-3 font-medium">
            Or send a reviewed message draft:
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-3"
            {...{
              toolname: 'prepare_contact_draft',
              tooldescription: 'Prepare a human-reviewed email draft for Pratham Ranka.',
            }}
          >
            <div>
              <label htmlFor="contact-subject" className="sr-only">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                maxLength={160}
                placeholder="Subject (e.g. Engineering opportunity)"
                className="w-full px-3.5 py-2 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-sky-500 transition-colors"
                {...{ toolparamdescription: 'Optional subject for the email draft.' }}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={4000}
                rows={3}
                placeholder="Tell me what you are building or the role you are hiring for..."
                className="w-full px-3.5 py-2 rounded-lg bg-neutral-900/90 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                {...{ toolparamdescription: 'Message to include in the draft.' }}
              />
            </div>

            {/* Anti-spam trap field */}
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="flex items-center justify-between gap-4 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-semibold hover:bg-neutral-800 hover:text-white transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Preparing draft...' : 'Prepare email draft'}
              </button>
              {status && (
                <p role="status" className="text-xs text-sky-400">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
