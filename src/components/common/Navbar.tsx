import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <header className="bg-background/50 sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              className="size-10 rounded-full transition-transform duration-300 hover:scale-110"
              src={navbarConfig.pfp.src}
              alt={navbarConfig.pfp.alt}
              width={navbarConfig.pfp.width}
              height={navbarConfig.pfp.height}
            />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </header>
  );
}
