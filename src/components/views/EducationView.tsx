import Image from 'next/image';
import { education } from '@/data/portfolio';

export function EducationView() {
  return (
    <section
      className="pt-8 pb-4"
      aria-labelledby="education-heading"
    >
      <hr className="mb-8 border-neutral-800/80" />

      <h2
        id="education-heading"
        className="mb-5 text-lg font-bold tracking-tight text-white sm:text-xl"
      >
        Education
      </h2>

      <div className="flex items-center justify-between gap-4 rounded-xl border border-neutral-800/60 bg-neutral-950/40 p-3.5 sm:p-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-neutral-200/10 bg-white shadow-sm">
            <Image
              src="/education/logo.png"
              alt="Thapar Institute of Engineering & Technology logo"
              width={48}
              height={48}
              className="size-full object-contain"
              unoptimized
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
              {education.institution}
            </h3>
            <p className="mt-0.5 text-xs text-neutral-400 sm:text-sm">
              Bachelor&apos;s in Engineering (B.E.) in {education.department}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <span className="text-xs font-medium text-neutral-400 sm:text-sm">
            2024 – {education.batch}
          </span>
        </div>
      </div>
    </section>
  );
}
