
import Image from 'next/image';
import { projects } from '@/data/portfolio';
import { ArrowUpRight, GithubIcon, GlobeIcon } from '@/components/icons';
import { LinkButton } from '@/components/ui/button';
import { TechnologyIcon } from '@/components/ui/technology-icon';

const projectBanners: Record<string, string> = {
  AgentPay: 'projects/agentpay.webp',
  'Sendai Fun': 'projects/sendaifun.webp',
  StarSwap: 'projects/starswap.webp',
  ZKavach: 'projects/zkavach.webp',
  SpotifyDownloader: 'projects/spotifydownloader.webp',
};

export function ProjectsView() {
  return (
    <section id="projects" className="pt-8 pb-4" aria-labelledby="projects-heading">
      <hr className="mb-8 border-border" />

      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted">
        Selected work
      </span>

      <h2
        id="projects-heading"
        className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
      >
        Projects I&apos;ve built
      </h2>

      <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted">
        Production systems spanning fintech infrastructure, autonomous agent
        sandboxes, privacy-preserving payments, and high-throughput developer
        platforms.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            id={`work-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated transition-colors duration-200 hover:border-brand/40"
          >
            <div className="relative h-32 overflow-hidden border-b border-border bg-background">
              <Image
                src={projectBanners[project.name]}
                alt={`${project.name} banner`}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />

              {project.status && (
                <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                  {project.status}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand">
                  {project.name}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-[13px]">
                  {project.description}
                </p>
              </div>

              <div className="mt-4">
                <div
                  className="mb-4 flex flex-wrap gap-2"
                  aria-label={`${project.name} technology stack`}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      title={tech}
                      className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted transition-colors hover:border-brand/50 hover:bg-brand-soft hover:text-foreground"
                    >
                      <TechnologyIcon name={tech} />
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 border-t border-border-soft pt-3">
                  <LinkButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    <GithubIcon size={13} />
                    <span>Source</span>
                  </LinkButton>

                  {project.caseStudy && (
                    <LinkButton href={project.caseStudy} variant="primary" size="sm">
                      <span>Case study</span>
                      <ArrowUpRight size={12} />
                    </LinkButton>
                  )}

                  {project.live && (
                    <LinkButton
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                    >
                      <GlobeIcon size={13} />
                      <span>Live</span>
                    </LinkButton>
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
