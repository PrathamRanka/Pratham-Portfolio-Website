import { hackathons } from '@/data/hackathons';
import { GithubIcon, GlobeIcon, TrophyIcon } from '@/components/icons';

export function HackathonsView() {
  return (
    <section id="hackathons" className="pt-8 pb-4" aria-labelledby="hackathons-heading">
      <hr className="border-neutral-800/80 mb-8" />
      
      {/* Eyebrow & Heading matching Screenshot 817 */}
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
        Hackathons
      </span>
      <h2
        id="hackathons-heading"
        className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
      >
        I like building things
      </h2>
      <p className="text-sm text-neutral-400 max-w-xl leading-relaxed mb-8">
        Projects and engineering achievements from hackathons and team events.
      </p>

      {/* Vertical Timeline matching Reference */}
      <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 space-y-8 ml-3 sm:ml-4">
        {hackathons.map((item) => (
          <article key={item.name} className="relative group">
            {/* Timeline Circular Icon Node */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 shadow-md">
              <TrophyIcon size={12} />
            </div>

            {/* Date & Location */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
              <span>{item.date}</span>
              {item.location && (
                <>
                  <span className="text-neutral-600">·</span>
                  <span>{item.location}</span>
                </>
              )}
            </div>

            {/* Title & Badge */}
            <div className="mt-1 flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-semibold text-white tracking-tight">
                {item.name}
              </h3>
              {item.award && (
                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  {item.award}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed max-w-xl">
              {item.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-3.5">
              {item.projectUrl && (
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-medium hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <GlobeIcon size={13} />
                  <span>Website</span>
                </a>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-medium hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <GithubIcon size={13} />
                  <span>Source</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
