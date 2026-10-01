'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export function SmoothScroll() {
  useEffect(() => {
    let targetY = window.scrollY;
    let isTweening = false;

    const syncTarget = () => {
      if (!isTweening) targetY = window.scrollY;
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY + event.deltaY, maxY));
      event.preventDefault();
      isTweening = true;

      gsap.to(window, {
        duration: 0.8,
        ease: 'power3.out',
        overwrite: true,
        scrollTo: { y: targetY, autoKill: false },
        onComplete: () => {
          isTweening = false;
          targetY = window.scrollY;
        },
      });
    };

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
      targetY = destination.getBoundingClientRect().top + window.scrollY - 90;
      isTweening = true;
      gsap.to(window, {
        duration: 1.1,
        ease: 'power3.out',
        overwrite: true,
        scrollTo: { y: destination, offsetY: 90, autoKill: true },
        onComplete: () => {
          isTweening = false;
          targetY = window.scrollY;
        },
      });
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', syncTarget, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', syncTarget);
      window.removeEventListener('wheel', handleWheel);
      gsap.killTweensOf(window);
    };
  }, []);

  return null;
}
