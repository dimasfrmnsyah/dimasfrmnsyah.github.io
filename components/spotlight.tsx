"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

export function Spotlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const element = ref.current;
    if (!element) return;

    const update = (event: PointerEvent) => {
      element.style.setProperty("--spotlight-x", `${event.clientX}px`);
      element.style.setProperty("--spotlight-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      style={{
        "--spotlight-x": "50%",
        "--spotlight-y": "20%"
      } as CSSProperties}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(56,189,248,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />
      <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-soft-light" />
    </div>
  );
}
