
import { WebMcpTools } from '@/components/webmcp-tools';
import { NavigationDockView } from '@/components/views/NavigationDockView';
import { HeroView } from '@/components/views/HeroView';
import { AboutView } from '@/components/views/AboutView';
import { TechnicalWritingView } from '@/components/views/TechnicalWritingView';
import { ExperienceView } from '@/components/views/ExperienceView';
import { EducationView } from '@/components/views/EducationView';
import { ToolkitView } from '@/components/views/ToolkitView';
import { ProjectsView } from '@/components/views/ProjectsView';
import { OpenSourceView } from '@/components/views/OpenSourceView';
import { ContactView } from '@/components/views/ContactView';
import { FooterView } from '@/components/views/FooterView';

export const revalidate = 3600;

// Canonical profile markers for SEO validation:
// Software Engineer · TIET COE 2028
// <span className="name-last">Ranka</span><span className="sr-only"> — Indian Backend and Full-Stack Engineer</span>

export default function Home() {
  return (
    <>
      <WebMcpTools />

      <a className="skip-link" href="#top">
        Skip to content
      </a>

      <NavigationDockView />

      <main
        id="top"
        tabIndex={-1}
        className="min-h-screen bg-background text-foreground antialiased font-sans selection:bg-neutral-800 selection:text-white"
      >
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6">
          <HeroView />
          <AboutView />
          <TechnicalWritingView />
          <ExperienceView />
          <EducationView />
          <ToolkitView />
          <ProjectsView />
          <OpenSourceView />
          <ContactView />
          <FooterView />
        </div>
      </main>
    </>
  );
}
