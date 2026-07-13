'use client';

import { useEffect, useRef } from 'react';

export function InteractionRuntime() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor) return;

    document.documentElement.classList.add('has-custom-cursor');
    let pointerX = -100;
    let pointerY = -100;
    let currentX = -100;
    let currentY = -100;
    let frame = 0;

    const render = () => {
      currentX += (pointerX - currentX) * 0.18;
      currentY += (pointerY - currentY) * 0.18;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.classList.add('is-visible');
    };
    const onDown = () => cursor.classList.add('is-clicking');
    const onUp = () => cursor.classList.remove('is-clicking');
    const onLeaveWindow = () => cursor.classList.remove('is-visible');

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeaveWindow);

    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>('a, button, [data-cursor]').forEach((element) => {
      const enter = () => {
        const text = element.dataset.cursor;
        cursor.classList.add(text ? 'is-labeled' : 'is-active');
        if (label) label.textContent = text || '';
      };
      const leave = () => {
        cursor.classList.remove('is-active', 'is-labeled');
        if (label) label.textContent = '';
      };
      element.addEventListener('mouseenter', enter);
      element.addEventListener('mouseleave', leave);
      cleanups.push(() => element.removeEventListener('mouseenter', enter));
      cleanups.push(() => element.removeEventListener('mouseleave', leave));
    });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow);
      cleanups.forEach((cleanup) => cleanup());
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <span ref={labelRef} />
    </div>
  );
}
