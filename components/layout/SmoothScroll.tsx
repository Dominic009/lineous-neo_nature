"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

type SmoothScrollProps = {
  children: ReactNode;
};

const lenisOptions = {
  duration: 1.15,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 0.85,
  touchMultiplier: 1.2,
  autoRaf: true,
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
