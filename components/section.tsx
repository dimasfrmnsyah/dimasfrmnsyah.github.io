"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { amount: 0.25, margin: "-15% 0px -40% 0px" });

  return (
    <section
      id={id}
      ref={ref}
      data-section
      className={cn("relative section-padding", className)}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 rounded-[32px] border border-border/10 bg-panel/30 opacity-0 transition-opacity duration-700",
          isInView && "opacity-100"
        )}
      />
      {children}
    </section>
  );
}
