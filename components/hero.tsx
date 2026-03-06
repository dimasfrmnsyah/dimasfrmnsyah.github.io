"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Mail } from "lucide-react";
import { heroHighlights, heroTechStack } from "@/data/hero";
import { Container } from "@/components/container";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-glow opacity-70" />
      </div>

      <Container className="relative grid items-center gap-16 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={staggerContainer(0.12, 0.12)}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-panel/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200/70"
          >
            Web & Backend Developer
            <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Dimas Firmansyah — building
            <span className="text-gradient"> secure</span>, high-performance web
            systems ready for production scale.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-muted"
          >
            Experienced in end-to-end delivery: requirement gathering, planning,
            design, development, testing, delivery, and maintenance. Strong
            focus on backend services, APIs, and system security.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-glow transition"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-panel/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-cyan-400/40"
              >
                Open Book
                <BookOpen className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-panel/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-cyan-400/40"
              >
                Contact Me
                <Mail className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/10 bg-panel/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/70"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {heroTechStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/10 bg-panelStrong/70 px-3 py-1 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-border/10 bg-panel/70"
          />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-10 h-16 w-16 rounded-full border border-border/10 bg-panel/70"
          />
          <div className="relative rounded-3xl border border-border/10 bg-panel/70 p-6 shadow-soft-xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-cyan-500/10" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/pp.png"
                alt="Dimas Firmansyah profile"
                width={560}
                height={640}
                priority
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="relative mt-6 grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-foreground/50">
                    Focus
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    API Development & System Security
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/10 bg-panel/70">
                  <span className="text-xs font-semibold text-cyan-200">
                    2026
                  </span>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Bandung, Indonesia</span>
                <span>Open for collaborations</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
