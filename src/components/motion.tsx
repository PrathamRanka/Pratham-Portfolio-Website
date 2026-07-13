'use client';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import type { MouseEvent, ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

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
  return (
    <motion.div
      className={className}
      data-reveal
      initial={reduceMotion || eager ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion || eager ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.72, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function PortraitScene({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 120, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div
      className="portrait-scene"
      data-portrait
      data-cursor="View"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.008 }}
      transition={{ duration: 0.45, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

  return (
    <motion.div
      className={className}
      style={reduceMotion ? undefined : { x: smoothX, y: smoothY }}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
