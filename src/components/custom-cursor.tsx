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

    let initialized = false;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let activeTarget: HTMLElement | null = null;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!cursor || !ring || !dot || !label) return;

    const renderRing = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = window.requestAnimationFrame(renderRing);
    };

    const updateTarget = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      cursor.dataset.visible = 'true';

      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest<HTMLElement>('[data-cursor], a, button') ?? null;
      if (interactive === activeTarget) return;

      activeTarget = interactive;
      label.textContent = interactive?.dataset.cursor ?? (interactive ? 'Open' : '');
      cursor.dataset.active = interactive ? 'true' : 'false';
    };

    const handlePointerDown = () => { cursor.dataset.pressed = 'true'; };
    const handlePointerUp = () => { cursor.dataset.pressed = 'false'; };
    const hide = () => { cursor.dataset.visible = 'false'; };

    const initialize = (event: PointerEvent) => {
      if (initialized) return;
      initialized = true;
      targetX = ringX = event.clientX;
      targetY = ringY = event.clientY;
      document.body.classList.add('has-custom-cursor');
      updateTarget(event);
      frame = window.requestAnimationFrame(renderRing);
      window.addEventListener('pointermove', updateTarget, { passive: true });
      window.addEventListener('pointerdown', handlePointerDown, { passive: true });
      window.addEventListener('pointerup', handlePointerUp, { passive: true });
      document.documentElement.addEventListener('mouseleave', hide);
    };

    window.addEventListener('pointermove', initialize, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointermove', initialize);
      if (!initialized) return;
      document.body.classList.remove('has-custom-cursor');
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', updateTarget);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.documentElement.removeEventListener('mouseleave', hide);
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
