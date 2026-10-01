'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = link?.getAttribute('href');
      if (!href || href === '#') return;

      let destination: Element | null = null;
      try {
        destination = document.querySelector(href);
      } catch {
        return;
      }

      if (!destination || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      event.preventDefault();
      window.history.pushState(null, '', href);
      gsap.killTweensOf(window);
      gsap.to(window, {
        duration: 0.9,
        ease: 'power3.out',
        overwrite: true,
        scrollTo: { y: destination, offsetY: 90, autoKill: true },
      });
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      gsap.killTweensOf(window);
    };
  }, []);

  return null;
}
