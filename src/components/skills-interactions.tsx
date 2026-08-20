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
    let removeTilt: (() => void) | undefined;

    const initializeTilt = () => {
      if (!finePointer) return;

      const cards = Array.from(board.querySelectorAll<HTMLElement>('.capability-card'));
      const cleanups = cards.map((card) => {
        const glow = card.querySelector<HTMLElement>('.capability-glow');
        let frame = 0;

        const handleMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          const y = event.clientY - bounds.top;
          window.cancelAnimationFrame(frame);
          frame = window.requestAnimationFrame(() => {
            card.style.setProperty('--tilt-y', `${((x / bounds.width) - 0.5) * 5}deg`);
            card.style.setProperty('--tilt-x', `${((y / bounds.height) - 0.5) * -5}deg`);
            glow?.style.setProperty('--glow-x', `${x}px`);
            glow?.style.setProperty('--glow-y', `${y}px`);
          });
        };

        const handleLeave = () => {
          card.style.setProperty('--tilt-x', '0deg');
          card.style.setProperty('--tilt-y', '0deg');
        };

        card.addEventListener('pointermove', handleMove, { passive: true });
        card.addEventListener('pointerleave', handleLeave, { passive: true });

        return () => {
          card.removeEventListener('pointermove', handleMove);
          card.removeEventListener('pointerleave', handleLeave);
          window.cancelAnimationFrame(frame);
        };
      });

      removeTilt = () => cleanups.forEach((cleanup) => cleanup());
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        board.classList.add('is-revealed');
        observer.disconnect();
        initializeTilt();
      },
      { rootMargin: '280px 0px', threshold: 0.01 },
    );

    observer.observe(board);

    return () => {
      observer.disconnect();
      removeTilt?.();
    };
  }, []);

  return null;
}
