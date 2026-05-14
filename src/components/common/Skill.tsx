import { Link } from 'next-view-transitions';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children?: React.ReactNode;
  index?: number;
}

export default function Skill({ name, href, children, index = 0 }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      style={{ animationDelay: `${index * 0.15}s` }}
      className="animate-float skill-inner-shadow inline-flex items-center self-end rounded-full border border-dashed border-black/20 bg-black/5 px-2 py-1 text-xs text-black backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black/10 hover:shadow-lg sm:px-3 sm:py-1.5 sm:text-sm dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      {children && (
        <div className="size-3 flex-shrink-0 sm:size-4">{children}</div>
      )}
      <p
        className={
          children
            ? 'ml-1 text-xs font-semibold sm:ml-2 sm:text-sm'
            : 'text-xs font-semibold sm:text-sm'
        }
      >
        {name}
      </p>
    </Link>
  );
}
