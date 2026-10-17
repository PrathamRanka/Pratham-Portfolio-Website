import Link from 'next/link';
import { projects } from '@/data/portfolio';
import { ArrowUpRight, GithubIcon, GlobeIcon } from '@/components/icons';

export function ProjectsView() {
  return (
    <section id="projects" className="pt-8 pb-4" aria-labelledby="projects-heading">
      <hr className="border-neutral-800/80 mb-8" />
      
      {/* Section Eyebrow & Heading */}
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
        Selected work
      </span>
      <h2
        id="projects-heading"
        className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2"
      >
        Projects I&apos;ve built
      </h2>
      <p className="text-sm text-neutral-400 max-w-xl leading-relaxed mb-6">
        Production systems spanning fintech infrastructure, autonomous agent sandboxes, privacy-preserving
        payments, and high-throughput developer platforms.
      </p>

      {/* 2-Column Grid matching reference layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <article
            key={project.name}
            id={`work-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group rounded-xl border border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700/80 transition-all duration-200 overflow-hidden flex flex-col"
          >
            {/* Visual Preview Banner */}
            <div className="h-32 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 border-b border-neutral-800/60 flex items-center justify-center p-4 relative overflow-hidden">
              <div className="w-14 h-14 rounded-xl border border-neutral-800 bg-neutral-900/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <span className="text-lg font-bold text-neutral-200 tracking-wider">
                  {project.mark}
                </span>
              </div>
              {project.status && (
                <span className="absolute top-3 right-3 text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-400">
                  {project.status}
                </span>
              )}
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors tracking-tight">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Actions */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-neutral-900">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-medium hover:bg-neutral-800 hover:text-white transition-colors"
                  >
                    <GithubIcon size={13} />
                    <span>Source</span>
                  </a>

                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-sky-950/40 border border-sky-800/40 text-sky-300 text-xs font-medium hover:bg-sky-900/40 transition-colors"
                    >
                      <span>Case study</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-medium hover:bg-neutral-800 hover:text-white transition-colors"
                    >
                      <GlobeIcon size={13} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
