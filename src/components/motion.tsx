'use client';

import { useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export function FadeIn({
  children,
  delay = 0,
  className,
  eager = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  eager?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || reduceMotion || eager) return;

    const bounds = node.getBoundingClientRect();
    if (bounds.top <= window.innerHeight * 0.92) {
      node.classList.add('is-revealed');
      return;
    }

    node.classList.add('is-reveal-ready');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add('is-revealed');
        observer.disconnect();
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, reduceMotion]);

  return (
    <div
      ref={ref}
      className={className}
      data-reveal
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
