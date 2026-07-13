import Image from 'next/image';

import { ArrowUpRight, BriefcaseIcon, FileIcon, GithubIcon, HomeIcon, LayersIcon, LinkedinIcon, MailIcon, MusicIcon, PhoneIcon, SparkIcon, TechIcon } from '@/components/icons';
import { FadeIn, Magnetic, PortraitScene } from '@/components/motion';
import { experience, projects, resumeUrl, skillGroups, socialLinks } from '@/data/portfolio';
import { getGithubStats, getMusicTracks } from '@/lib/external-data';

export const revalidate = 1800;
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
    { href: '#music', label: 'Music', icon: <MusicIcon /> },
  ];
  return <nav className="glass-dock" aria-label="Page navigation">
    {items.map((item) => <a href={item.href} key={item.href} aria-label={item.label}><span className="dock-tooltip">{item.label}</span>{item.icon}</a>)}
    <span className="dock-divider" />
    <a href={`mailto:${email}`} aria-label="Email Pratham"><span className="dock-tooltip">Email</span><MailIcon /></a>
  </nav>;
}

export default async function Home() {
  const [github, musicTracks] = await Promise.all([getGithubStats(), getMusicTracks()]);

  return <>
    <a className="floating-contact" href={phoneHref}><PhoneIcon size={14} /><span>{phoneDisplay}</span></a>
    <Dock />

    <main id="top">
      <section className="hero page-shell" aria-labelledby="hero-heading">
        <div className="hero-copy">
          {/* <FadeIn eager><div className="availability"><span /> Available for select collaborations</div></FadeIn> */}
          <FadeIn delay={0.06} eager><p className="eyebrow">Pratham Ranka / Backend Engineer</p><h1 id="hero-heading">Systems thinking,<br /><span>product<span className="mobile-break"><br /></span> instinct.</span></h1></FadeIn>
          <FadeIn delay={0.12} eager>
            <p className="hero-intro">I build reliable backend infrastructure and production software for the moments when scale, correctness, and speed all matter.</p>
            <div className="hero-actions">
              <Magnetic><a className="button button-primary" href={resumeUrl} target="_blank" rel="noreferrer"><FileIcon /> Resume <ArrowUpRight /></a></Magnetic>
              <Magnetic><a className="button button-secondary" href={`mailto:${email}`}><MailIcon /> Contact</a></Magnetic>
              <div className="social-actions" aria-label="Social profiles"><a href="https://github.com/PrathamRanka" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a><a href="https://www.linkedin.com/in/prathamranka06/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a></div>
            </div>
            <div className="hero-contact-line"><a href={`mailto:${email}`}>{email}</a><span>/</span><a href={phoneHref}>{phoneDisplay}</a></div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="portrait-column" eager>
          <div className="portrait-aura" aria-hidden="true" />
          <PortraitScene><div className="portrait-border"><div className="portrait-wrap"><Image src="/assets/pfp.png" alt="Portrait of Pratham Ranka" width={820} height={823} priority fetchPriority="high" sizes="(max-width: 640px) 90vw, (max-width: 1100px) 38vw, 430px" className="portrait" /><div className="portrait-light" aria-hidden="true" /><div className="portrait-caption"><div><span>Currently</span><strong>S45</strong></div><div><span>Focus</span><strong>Production systems</strong></div></div></div></div></PortraitScene>
          <div className="portrait-coordinate coordinate-one">19.0760 N</div><div className="portrait-coordinate coordinate-two">72.8777 E</div>
        </FadeIn>
        {/* <div className="hero-meta"><p><span>01 / Base</span> India<br />Working globally</p><p><span>02 / Practice</span> Distributed systems<br />Product engineering</p><p><span>03 / Principle</span> Build for failure.<br />Design for clarity.</p></div> */}
      </section>

      <section className="section page-shell" id="experience" aria-labelledby="experience-heading">
        <FadeIn><SectionLabel index="01">Experience</SectionLabel><div className="section-heading-row"><h2 id="experience-heading">Work measured in <span>outcomes.</span></h2><p>Roles where ownership meant making hard systems understandable, dependable, and ready for real users.</p></div></FadeIn>
        <div className="timeline"><div className="timeline-track" aria-hidden="true"><span /></div>{experience.map((item, index) => <FadeIn key={item.company} delay={index * 0.05}><article className="timeline-item"><div className="timeline-logo-cell"><CompanyLogo logo={item.logo} company={item.company} /><span className={item.current ? 'timeline-dot is-current' : 'timeline-dot'} /></div><div className="timeline-date">{item.date}</div><div className="timeline-content"><div className="timeline-title"><h3>{item.company}</h3>{item.badge && <span className="yc-badge"><b>Y</b> {item.badge}</span>}</div><p className="role">{item.role}</p><p>{item.description}</p></div></article></FadeIn>)}</div>
      </section>

      <section className="section page-shell" id="work" aria-labelledby="work-heading">
        <FadeIn><SectionLabel index="02">Selected work</SectionLabel><div className="section-heading-row"><h2 id="work-heading">A small list with <span>real depth.</span></h2><p>Selected systems spanning infrastructure, privacy, developer tools, and production software.</p></div></FadeIn>
        <div className="project-list">{projects.map((project, index) => <FadeIn key={project.name} delay={index * 0.04}><article className="project-row" data-cursor="Open"><div className={`project-mark project-mark-${project.accent}`} aria-hidden="true"><span>{project.mark}</span></div><div className="project-copy"><div className="project-title-line"><span>0{index + 1}</span><h3>{project.name}</h3></div><p>{project.description}</p></div><div className="project-tech">{project.technologies.map((technology) => <span key={technology} title={technology}><TechIcon name={technology} /></span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><GithubIcon /><span>Code</span></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer"><ArrowUpRight /><span>Live</span></a>}</div></article></FadeIn>)}</div>
      </section>

      <section className="section page-shell" id="capabilities" aria-labelledby="capabilities-heading">
        <FadeIn><SectionLabel index="03">Capabilities</SectionLabel><div className="capability-intro"><h2 id="capabilities-heading">Tools change.<br /><span>Engineering judgment compounds.</span></h2><p>My work centers on backend engineering, distributed workflows, open source, and turning ambiguous requirements into maintainable production systems.</p></div></FadeIn>
        <div className="skill-board">{skillGroups.map((group, groupIndex) => <FadeIn key={group.label} delay={groupIndex * 0.05} className="skill-group"><div className="skill-group-heading"><span>0{groupIndex + 1}</span><h3>{group.label}</h3></div><div className="skill-grid">{group.skills.map((skill) => <div className="skill-chip" key={skill.name}><span className="skill-icon"><TechIcon name={skill.icon} size={20} /></span><span>{skill.name}</span></div>)}</div></FadeIn>)}</div>
      </section>

      <section className="section page-shell" id="open-source" aria-labelledby="oss-heading">
        <FadeIn><SectionLabel index="04">Open source & GitHub</SectionLabel></FadeIn>
        <div className="oss-layout">
          <FadeIn className="oss-panel"><div className="medusa-mark"><span>M</span></div><div className="oss-copy"><p className="oss-kicker">Medusa / Contributor</p><h2 id="oss-heading">Contributing to the infrastructure behind modern commerce.</h2><p>Thoughtful code contributions to Medusa&apos;s open-source commerce platform, with the same emphasis on clarity and maintainability I bring to product work.</p></div><a href="https://github.com/medusajs/medusa" target="_blank" rel="noreferrer" className="text-link">Explore Medusa <ArrowUpRight /></a></FadeIn>
          <FadeIn delay={0.08} className="github-panel"><div className="github-panel-header"><div><GithubIcon size={20} /><span>{github.live ? 'Live public profile' : 'Public profile snapshot'}</span></div><a href="https://github.com/PrathamRanka" target="_blank" rel="noreferrer">@PrathamRanka <ArrowUpRight size={13} /></a></div><div className="github-stats"><div><strong>{github.repositories}</strong><span>Repositories</span></div><div><strong>{github.stars}</strong><span>Stars earned</span></div><div><strong>{github.followers}</strong><span>Followers</span></div><div><strong>{github.forks}</strong><span>Forks</span></div></div><div className="github-repositories">{github.recentRepositories.map((repository) => <a key={repository.name} href={repository.html_url} target="_blank" rel="noreferrer"><span><b>{repository.name}</b><small>{repository.language ?? 'Code'} · {repository.stargazers_count} stars</small></span><ArrowUpRight size={14} /></a>)}</div></FadeIn>
        </div>
      </section>

      <section className="section page-shell" id="music" aria-labelledby="music-heading">
        <FadeIn><SectionLabel index="05">Current rotation</SectionLabel><div className="section-heading-row music-heading"><h2 id="music-heading">What&apos;s playing while <span>I build.</span></h2><p>A small personal signal beyond the code. Tracks come from a configured public YouTube Music playlist.</p></div></FadeIn>
        <FadeIn className="music-panel"><div className="music-visual" aria-hidden="true"><MusicIcon size={28} /><i /><i /><i /><i /></div>{musicTracks.length ? <div className="track-list">{musicTracks.map((track, index) => <a href={track.href} target="_blank" rel="noreferrer" key={`${track.href}-${index}`}><Image src={track.image} alt="" width={54} height={54} sizes="54px" /><span><b>{track.title}</b><small>{track.artist}</small></span><ArrowUpRight /></a>)}</div> : <div className="music-empty"><p className="oss-kicker">YouTube Music / Ready to connect</p><h3>Public playlist connection prepared.</h3><p>Add the playlist ID and API key to show your real current rotation. Private listening history is never guessed or exposed.</p><a href="https://music.youtube.com" target="_blank" rel="noreferrer">Open YouTube Music <ArrowUpRight /></a></div>}</FadeIn>
      </section>

      <section className="contact page-shell" id="contact" aria-labelledby="contact-heading"><FadeIn><p className="eyebrow">Have a difficult system to build?</p><h2 id="contact-heading">Let&apos;s make it<br /><span>dependable.</span></h2><div className="contact-row"><div className="contact-links"><a className="contact-email" href={`mailto:${email}`}>{email} <ArrowUpRight size={22} /></a><a className="contact-phone" href={phoneHref}><PhoneIcon /> {phoneDisplay}</a></div><p>Open to thoughtful conversations about ambitious products, infrastructure, and engineering teams that care about the details.</p></div></FadeIn></section>
    </main>

    <footer className="footer page-shell"><p>&copy; {new Date().getFullYear()} Pratham Ranka</p><div>{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}<a href={`mailto:${email}`}>Email</a><a href={phoneHref}>Phone</a></div><a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a></footer>
  </>;
}
