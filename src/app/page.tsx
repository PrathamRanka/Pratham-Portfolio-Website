import Image from 'next/image';

import { CustomCursor } from '@/components/custom-cursor';
import { ArrowUpRight, BriefcaseIcon, FileIcon, GithubIcon, HomeIcon, LayersIcon, LinkedinIcon, MailIcon, PhoneIcon, SparkIcon, TechIcon } from '@/components/icons';
import { FadeIn, Magnetic, PortraitScene, TimelineRail } from '@/components/motion';
import { SkillsShowcase } from '@/components/skills-showcase';
import { experience, projects, resumeUrl, skillGroups, socialLinks } from '@/data/portfolio';

export const revalidate = 3600;
const email = 'prathamworks06@gmail.com';
const phoneDisplay = '+91 70232 06003';
const phoneHref = 'tel:+917023206003';

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{index}</span><p>{children}</p></div>;
}

function CompanyLogo({ logo, company }: { logo: string; company: string }) {
  return <div className="company-logo"><Image src={logo} alt={`${company} logo`} width={48} height={48} sizes="48px" /></div>;
}

function Dock() {
  const items = [
    { href: '#top', label: 'Home', icon: <HomeIcon /> },
    { href: '#experience', label: 'Experience', icon: <BriefcaseIcon /> },
    { href: '#work', label: 'Work', icon: <LayersIcon /> },
    { href: '#capabilities', label: 'Skills', icon: <SparkIcon /> },
  ];
  return <nav className="glass-dock" aria-label="Page navigation">
    {items.map((item) => <a href={item.href} key={item.href} aria-label={item.label}><span className="dock-tooltip">{item.label}</span>{item.icon}</a>)}
    <span className="dock-divider" />
    <a href={`mailto:${email}`} aria-label="Email Pratham"><span className="dock-tooltip">Email</span><MailIcon /></a>
  </nav>;
}

export default function Home() {
  return <>
    <CustomCursor />
    <a className="floating-contact" href={phoneHref}><PhoneIcon size={14} /><span>{phoneDisplay}</span></a>
    <Dock />

    <main id="top">
      <section className="hero page-shell" aria-labelledby="hero-heading">
        <div className="hero-kanji" aria-hidden="true">構築</div>
        <svg className="hero-strike" aria-hidden="true" viewBox="0 0 500 120" fill="none"><path d="M4 103C134 75 255 36 496 8" /><path d="M70 112C224 78 342 42 470 21" /></svg>
        <div className="hero-copy">
          <FadeIn delay={0.03} eager><div className="hero-status"><span>⚡</span> Software Engineer · India</div><p className="hero-kicker">ENGINEER / BUILDER / OPEN SOURCE</p><h1 id="hero-heading"><span className="name-first">Pratham</span><span className="name-last">Ranka</span></h1><p className="hero-role">Backend engineer building production systems that survive real traffic, real failures, and real deadlines.</p></FadeIn>
          <FadeIn delay={0.12} eager>
            <div className="hero-direct-contact"><a href={`mailto:${email}`}><MailIcon size={17} /><span>{email}</span><ArrowUpRight size={15} /></a><a href={phoneHref}><PhoneIcon size={17} /><span>{phoneDisplay}</span></a></div>
            <div className="hero-actions">
              <Magnetic><a className="button button-primary" href={resumeUrl} target="_blank" rel="noreferrer"><FileIcon /> Resume <ArrowUpRight /></a></Magnetic>
              <Magnetic><a className="button button-secondary" href="#work"><LayersIcon /> Selected work</a></Magnetic>
              <div className="social-actions" aria-label="Social profiles"><a href="https://github.com/PrathamRanka" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a><a href="https://www.linkedin.com/in/prathamranka06/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a></div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="portrait-column" eager>
          <div className="portrait-aura" aria-hidden="true" />
          <PortraitScene><div className="portrait-border"><div className="portrait-wrap"><Image src="/assets/pfp.webp" alt="Portrait of Pratham Ranka" width={820} height={823} priority fetchPriority="high" sizes="(max-width: 640px) 90vw, (max-width: 1100px) 38vw, 430px" className="portrait" /><div className="portrait-light" aria-hidden="true" /><div className="portrait-caption"><div><span>Recent role</span><strong>S45</strong></div><div><span>Focus</span><strong>Production systems</strong></div></div></div></div></PortraitScene>
          <div className="portrait-coordinate coordinate-one">19.0760 N</div><div className="portrait-coordinate coordinate-two">72.8777 E</div>
        </FadeIn>
      </section>

      <section className="section page-shell" id="experience" aria-labelledby="experience-heading">
        <FadeIn><SectionLabel index="01">Experience</SectionLabel><div className="section-heading-row"><h2 id="experience-heading">Work measured in <span>outcomes.</span></h2><p>Roles where ownership meant making hard systems understandable, dependable, and ready for real users.</p></div></FadeIn>
        <TimelineRail>{experience.map((item, index) => <FadeIn key={item.company} delay={index * 0.05}><article className="timeline-item"><div className="timeline-logo-cell"><span className={item.current ? 'timeline-node is-current' : 'timeline-node'}><CompanyLogo logo={item.logo} company={item.company} /></span></div><div className="timeline-date">{item.date}</div><div className="timeline-content"><div className="timeline-title"><h3>{item.company}</h3>{item.badge && <span className="yc-badge"><b>Y</b> {item.badge}</span>}</div><p className="role">{item.role}</p><p>{item.description}</p></div></article></FadeIn>)}</TimelineRail>
      </section>

      <section className="section page-shell" id="work" aria-labelledby="work-heading">
        <FadeIn><SectionLabel index="02">Selected work</SectionLabel><div className="section-heading-row"><h2 id="work-heading">A small list with <span>real depth.</span></h2><p>Selected systems spanning infrastructure, privacy, developer tools, and production software.</p></div></FadeIn>
        <div className="project-list">{projects.map((project, index) => <FadeIn key={project.name} delay={index * 0.04}><article className="project-row"><div className={`project-mark project-mark-${project.accent}`} aria-hidden="true"><span>{project.mark}</span></div><div className="project-copy"><div className="project-title-line"><span>0{index + 1}</span><h3>{project.name}</h3></div><p>{project.description}</p></div><div className="project-tech">{project.technologies.map((technology) => <span key={technology} title={technology}><TechIcon name={technology} /></span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><GithubIcon /><span>Code</span></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer"><ArrowUpRight /><span>Live</span></a>}</div></article></FadeIn>)}</div>
      </section>

      <section className="section page-shell" id="capabilities" aria-labelledby="capabilities-heading">
        <FadeIn><SectionLabel index="03">Capabilities</SectionLabel><div className="capability-intro"><h2 id="capabilities-heading">Tools change.<br /><span>Engineering judgment compounds.</span></h2><p>My work centers on backend engineering, distributed workflows, open source, and turning ambiguous requirements into maintainable production systems.</p></div></FadeIn>
        <SkillsShowcase groups={skillGroups} />
      </section>

      <section className="section page-shell" id="open-source" aria-labelledby="oss-heading">
        <FadeIn><SectionLabel index="04">Open source & GitHub</SectionLabel></FadeIn>
        <div className="oss-layout">
          <FadeIn className="oss-panel"><div className="medusa-mark"><span>M</span></div><div className="oss-copy"><p className="oss-kicker">Medusa / Contributor</p><h2 id="oss-heading">Contributing to the infrastructure behind modern commerce.</h2><p>Thoughtful code contributions to Medusa&apos;s open-source commerce platform, with the same emphasis on clarity and maintainability I bring to product work.</p></div><a href="https://github.com/medusajs/medusa" target="_blank" rel="noreferrer" className="text-link">Explore Medusa <ArrowUpRight /></a></FadeIn>
          <FadeIn delay={0.08} className="github-heatmap-card"><div className="github-heatmap-heading"><div><GithubIcon size={20} /><span>Autonomous public GitHub signal</span></div><a href="https://github.com/PrathamRanka" target="_blank" rel="noreferrer">Open profile <ArrowUpRight size={13} /></a></div><a className="github-heatmap-link" href="https://github.com/PrathamRanka" target="_blank" rel="noreferrer" aria-label="Open Pratham Ranka on GitHub"><Image src="/api/github/heatmap" alt="Pratham Ranka public GitHub contribution heatmap with live statistics" width={854} height={289} unoptimized sizes="(max-width: 900px) calc(100vw - 40px), 854px" /></a></FadeIn>
        </div>
      </section>

      <section className="contact page-shell" id="contact" aria-labelledby="contact-heading"><FadeIn><p className="eyebrow">Have a difficult system to build?</p><h2 id="contact-heading">Let&apos;s make it<br /><span>dependable.</span></h2><div className="contact-row"><div className="contact-links"><a className="contact-email" href={`mailto:${email}`}>{email} <ArrowUpRight size={22} /></a><a className="contact-phone" href={phoneHref}><PhoneIcon /> {phoneDisplay}</a></div><p>Open to thoughtful conversations about ambitious products, infrastructure, and engineering teams that care about the details.</p></div></FadeIn></section>
    </main>

    <footer className="footer page-shell"><p>&copy; {new Date().getFullYear()} Pratham Ranka</p><div>{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}<a href={`mailto:${email}`}>Email</a><a href={phoneHref}>Phone</a></div><a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a></footer>
  </>;
}
