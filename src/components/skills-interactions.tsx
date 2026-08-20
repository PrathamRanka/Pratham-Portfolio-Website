'use client';

import { useEffect } from 'react';

export function SkillsInteractions() {
  useEffect(() => {
    const board = document.querySelector<HTMLElement>('[data-capability-console]');
    if (!board) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reducedMotion) return;

    board.classList.add('is-motion-ready');
    let disposed = false;
    let removeTilt: (() => void) | undefined;

    const initializeTilt = async () => {
      if (!finePointer) return;

      const { default: gsap } = await import('gsap');
      if (disposed) return;

      const cards = Array.from(board.querySelectorAll<HTMLElement>('.capability-card'));
      const cleanups = cards.map((card) => {
        const glow = card.querySelector<HTMLElement>('.capability-glow');
        const setRotateX = gsap.quickTo(card, 'rotateX', { duration: 0.42, ease: 'power3.out' });
        const setRotateY = gsap.quickTo(card, 'rotateY', { duration: 0.42, ease: 'power3.out' });
        const setGlowX = glow ? gsap.quickTo(glow, 'x', { duration: 0.28, ease: 'power3.out' }) : null;
        const setGlowY = glow ? gsap.quickTo(glow, 'y', { duration: 0.28, ease: 'power3.out' }) : null;

        const handleMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          const y = event.clientY - bounds.top;
          setRotateY(((x / bounds.width) - 0.5) * 5);
          setRotateX(((y / bounds.height) - 0.5) * -5);
          setGlowX?.(x);
          setGlowY?.(y);
        };

        const handleLeave = () => {
          setRotateX(0);
          setRotateY(0);
        };

        card.addEventListener('pointermove', handleMove, { passive: true });
        card.addEventListener('pointerleave', handleLeave, { passive: true });

        return () => {
          card.removeEventListener('pointermove', handleMove);
          card.removeEventListener('pointerleave', handleLeave);
          gsap.killTweensOf(glow ? [card, glow] : card);
        };
      });

      removeTilt = () => cleanups.forEach((cleanup) => cleanup());
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        board.classList.add('is-revealed');
        observer.disconnect();
        void initializeTilt();
      },
      { rootMargin: '280px 0px', threshold: 0.01 },
    );

    observer.observe(board);

    return () => {
      disposed = true;
      observer.disconnect();
      removeTilt?.();
    };
  }, []);

  return null;
}
