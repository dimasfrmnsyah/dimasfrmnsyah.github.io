"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="mb-12 max-w-2xl"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
