'use client';

import { useNavigationController } from '@/controllers/portfolio.controller';
import {
  HomeIcon,
  BriefcaseIcon,
  LayersIcon,
  CodeIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from '@/components/icons';

export function NavigationDockView() {
  const { activeSection, navItems, scrollTo } = useNavigationController();

  const renderIcon = (name: string) => {
    switch (name) {
      case 'home':
        return <HomeIcon size={16} />;
      case 'experience':
        return <BriefcaseIcon size={16} />;
      case 'projects':
        return <LayersIcon size={16} />;
      case 'opensource':
        return <CodeIcon size={16} />;
      case 'contact':
        return <MailIcon size={16} />;
      default:
        return <HomeIcon size={16} />;
    }
  };

  return (
    <nav
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-neutral-800/90 bg-neutral-950/85 backdrop-blur-md px-3 py-1.5 shadow-2xl shadow-black/80 max-w-[94vw] overflow-x-auto"
      aria-label="Floating page navigation"
    >
      {/* Section Anchors */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.href)}
              aria-label={item.label}
              className={`relative group p-2 rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-white bg-neutral-800/80'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              {renderIcon(item.iconName)}
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-150">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Subtle Divider */}
      <span className="w-[1px] h-4 bg-neutral-800 mx-1 shrink-0" aria-hidden="true" />

      {/* Social Links */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        <a
          href="https://github.com/PrathamRanka"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="relative group p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
        >
          <GithubIcon size={16} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-150">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/prathamranka06/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="relative group p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
        >
          <LinkedinIcon size={16} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-150">
            LinkedIn
          </span>
        </a>

        <a
          href="https://x.com/pr7ham_develops"
          target="_blank"
          rel="noreferrer"
          aria-label="X profile"
          className="relative group p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
        >
          <XIcon size={14} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-150">
            X
          </span>
        </a>
      </div>
    </nav>
  );
}
