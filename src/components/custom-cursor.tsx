'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!finePointer.matches || reducedMotion.matches) return;

    let disposed = false;
    let removeInteractions: (() => void) | undefined;

    const initialize = async () => {
      const { default: gsap } = await import('gsap');
      if (disposed) return;

      const cursor = cursorRef.current;
      const ring = ringRef.current;
      const dot = dotRef.current;
      const label = labelRef.current;
      if (!cursor || !ring || !dot || !label) return;

      document.body.classList.add('has-custom-cursor');

      const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
      const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });
      const ringX = gsap.quickTo(ring, 'x', { duration: 0.42, ease: 'power3.out' });
      const ringY = gsap.quickTo(ring, 'y', { duration: 0.42, ease: 'power3.out' });
      const ringScale = gsap.quickTo(ring, 'scale', { duration: 0.24, ease: 'power3.out' });
      const dotScale = gsap.quickTo(dot, 'scale', { duration: 0.16, ease: 'power3.out' });

      let activeTarget: HTMLElement | null = null;
      let cursorVisible = false;

      const setVisible = (visible: boolean) => {
        if (cursorVisible === visible) return;
        cursorVisible = visible;
        gsap.to(cursor, { autoAlpha: visible ? 1 : 0, duration: 0.18, ease: 'power2.out' });
      };

      const handlePointerMove = (event: PointerEvent) => {
        dotX(event.clientX);
        dotY(event.clientY);
        ringX(event.clientX);
        ringY(event.clientY);
        setVisible(true);

        const target = event.target instanceof Element ? event.target : null;
        const interactive = target?.closest<HTMLElement>('[data-cursor], a, button') ?? null;
        if (interactive === activeTarget) return;

        activeTarget = interactive;
        const cursorLabel = interactive?.dataset.cursor ?? (interactive ? 'Open' : '');
        label.textContent = cursorLabel;
        cursor.dataset.active = interactive ? 'true' : 'false';
        ringScale(interactive ? 1.75 : 1);

        gsap.to(ring, {
          borderColor: interactive ? 'rgba(120, 230, 239, .66)' : 'rgba(255, 255, 255, .38)',
          backgroundColor: interactive ? 'rgba(120, 230, 239, .08)' : 'transparent',
          duration: 0.2,
          ease: 'power2.out',
        });
        gsap.to(label, {
          autoAlpha: cursorLabel ? 1 : 0,
          scale: cursorLabel ? 1 : 0.86,
          duration: 0.16,
          ease: 'power2.out',
        });
      };

      const handlePointerDown = () => {
        ringScale(0.78);
        dotScale(1.8);
      };

      const handlePointerUp = () => {
        ringScale(activeTarget ? 1.75 : 1);
        dotScale(1);
      };

      const hide = () => setVisible(false);

      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('pointerdown', handlePointerDown, { passive: true });
      window.addEventListener('pointerup', handlePointerUp, { passive: true });
      document.documentElement.addEventListener('mouseleave', hide);

      removeInteractions = () => {
        document.body.classList.remove('has-custom-cursor');
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerdown', handlePointerDown);
        window.removeEventListener('pointerup', handlePointerUp);
        document.documentElement.removeEventListener('mouseleave', hide);
        gsap.killTweensOf([cursor, ring, dot, label]);
      };
    };

    const idleWindow = window as unknown as {
      requestIdleCallback?: Window['requestIdleCallback'];
      cancelIdleCallback?: Window['cancelIdleCallback'];
    };
    let cancelScheduledInitialization: () => void;

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(() => void initialize(), { timeout: 1800 });
      cancelScheduledInitialization = () => idleWindow.cancelIdleCallback?.(idleId);
    } else {
      const timeoutId = window.setTimeout(() => void initialize(), 900);
      cancelScheduledInitialization = () => window.clearTimeout(timeoutId);
    }

    return () => {
      disposed = true;
      cancelScheduledInitialization();
      removeInteractions?.();
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <div className="cursor-ring" ref={ringRef}>
        <span ref={labelRef} />
      </div>
      <div className="cursor-dot" ref={dotRef} />
    </div>
  );
}
