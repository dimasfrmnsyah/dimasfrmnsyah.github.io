"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-14 w-14 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          Loading
        </p>
      </motion.div>
    </div>
  );
}
