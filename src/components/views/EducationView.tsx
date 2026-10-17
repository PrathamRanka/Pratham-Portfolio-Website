import { education } from '@/data/portfolio';

export function EducationView() {
  return (
    <section className="pt-8 pb-4" aria-labelledby="education-heading">
      <hr className="border-neutral-800/80 mb-8" />
      <h2
        id="education-heading"
        className="text-lg sm:text-xl font-bold text-white mb-5 tracking-tight"
      >
        Education
      </h2>

      <div className="rounded-xl border border-neutral-800/60 bg-neutral-950/40 p-3.5 sm:p-4 flex items-center justify-between gap-4">
        {/* Emblem & Degrees */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-800 shadow-sm">
            <span className="text-[#a81c1c] font-black text-sm tracking-tighter">ti</span>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
              {education.institution}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
              Bachelor&apos;s in Engineering (B.E.) in {education.department}
            </p>
          </div>
        </div>

        {/* Batch / Dates */}
        <div className="shrink-0 text-right">
          <span className="text-xs sm:text-sm text-neutral-400 font-medium">
            2024 – {education.batch}
          </span>
        </div>
      </div>
    </section>
  );
}
