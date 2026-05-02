import { Link } from 'next-view-transitions';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children?: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      className="skill-inner-shadow inline-flex items-center self-end rounded-full border border-dashed border-black/20 bg-black/5 px-3 py-1.5 text-sm text-black backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black/10 hover:shadow-lg dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      {children && <div className="size-4 flex-shrink-0">{children}</div>}
      <p className={children ? "ml-2 text-sm font-semibold" : "text-sm font-semibold"}>{name}</p>
    </Link>
  );
}
