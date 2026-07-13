import Image from 'next/image';

import { FadeIn, PortraitFrame } from '@/components/motion';
import {
  experience,
  projects,
  skillGroups,
  socialLinks,
} from '@/data/portfolio';

function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.96 10.96 0 0 1 12 6.12c.98 0 1.95.13 2.86.38 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.78 1.07.78 2.16v3.27c0 .3.21.66.8.55A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Pratham Ranka, home">
            PR<span className="wordmark-dot">.</span>
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </div>
          <a className="nav-cta" href="mailto:pranka0789@gmail.com">
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <FadeIn>
              <div className="availability"><span /> Available for select collaborations</div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="eyebrow">Pratham Ranka · Backend Engineer</p>
              <h1 id="hero-heading">I build systems that stay fast when the stakes get real.</h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="hero-intro">
                Software engineer focused on distributed systems, reliable backend infrastructure, and production products that scale without drama.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore selected work <ArrowUpRight /></a>
                <a className="button button-secondary" href="https://github.com/PrathamRanka" target="_blank" rel="noreferrer">GitHub <GithubIcon /></a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="portrait-column">
            <PortraitFrame>
              <div className="portrait-wrap">
                <div className="portrait-glow" />
                <Image
                  src="/assets/pfp.png"
                  alt="Portrait of Pratham Ranka"
                  width={820}
                  height={823}
                  priority
                  sizes="(max-width: 760px) 78vw, 360px"
                  className="portrait"
                />
                <div className="portrait-caption">
                  <span>Currently</span>
                  <strong>S45 · Software Engineer</strong>
                </div>
              </div>
            </PortraitFrame>
          </FadeIn>

          <div className="hero-meta" aria-label="Location and focus">
            <p><span>01</span> Based in India<br />Working globally</p>
            <p><span>02</span> Backend systems<br />Product engineering</p>
          </div>
        </section>

        <section className="section page-shell" id="experience" aria-labelledby="experience-heading">
          <FadeIn>
            <SectionLabel index="01">Experience</SectionLabel>
            <div className="section-heading-row">
              <h2 id="experience-heading">Built in production.</h2>
              <p>Roles where ownership meant shipping dependable systems, not just features.</p>
            </div>
          </FadeIn>
          <div className="timeline">
            {experience.map((item, index) => (
              <FadeIn key={item.company} delay={index * 0.06}>
                <article className="timeline-item">
                  <div className="timeline-marker"><span className={item.current ? 'is-current' : ''} /></div>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <div className="timeline-title">
                      <h3>{item.company}</h3>
                      {item.badge && <span className="mini-badge">{item.badge}</span>}
                    </div>
                    <p className="role">{item.role}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="section page-shell" id="work" aria-labelledby="work-heading">
          <FadeIn>
            <SectionLabel index="02">Selected work</SectionLabel>
            <div className="section-heading-row">
              <h2 id="work-heading">Small list. Real depth.</h2>
              <p>A focused selection of systems work across finance, infrastructure, and developer tooling.</p>
            </div>
          </FadeIn>
          <div className="project-list">
            {projects.map((project, index) => (
              <FadeIn key={project.name} delay={index * 0.05}>
                <article className="project-row">
                  <span className="project-index">0{index + 1}</span>
                  <div className="project-name"><h3>{project.name}</h3><p>{project.description}</p></div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}><GithubIcon /></a>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open live ${project.name}`}><ArrowUpRight size={18} /></a>}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="section page-shell" id="about" aria-labelledby="about-heading">
          <FadeIn>
            <SectionLabel index="03">About & capabilities</SectionLabel>
          </FadeIn>
          <div className="about-grid">
            <FadeIn className="about-copy">
              <h2 id="about-heading">Engineering for the unglamorous moments.</h2>
              <p>I&apos;m a backend-focused software engineer who enjoys the hard parts: distributed workflows, failure handling, clean interfaces, and turning ambiguous product ideas into reliable production systems.</p>
            </FadeIn>
            <div className="skills-groups">
              {skillGroups.map((group, index) => (
                <FadeIn key={group.label} delay={index * 0.05} className="skill-group">
                  <p>{group.label}</p>
                  <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-shell" id="open-source" aria-labelledby="oss-heading">
          <FadeIn>
            <SectionLabel index="04">Open source</SectionLabel>
            <div className="oss-panel">
              <div className="oss-mark" aria-hidden="true">M</div>
              <div className="oss-copy">
                <p className="oss-kicker">Medusa · Contributor</p>
                <h2 id="oss-heading">Improving the infrastructure behind modern commerce.</h2>
                <p>Contributing code and thoughtful improvements to Medusa&apos;s open-source commerce platform.</p>
              </div>
              <a href="https://github.com/medusajs/medusa" target="_blank" rel="noreferrer" className="text-link">View project <ArrowUpRight /></a>
            </div>
          </FadeIn>
        </section>

        <section className="contact page-shell" id="contact" aria-labelledby="contact-heading">
          <FadeIn>
            <p className="eyebrow">Have a difficult system to build?</p>
            <h2 id="contact-heading">Let&apos;s make it dependable.</h2>
            <a className="contact-email" href="mailto:pranka0789@gmail.com">pranka0789@gmail.com <ArrowUpRight size={24} /></a>
          </FadeIn>
        </section>
      </main>

      <footer className="footer page-shell">
        <p>© {new Date().getFullYear()} Pratham Ranka</p>
        <div>{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
