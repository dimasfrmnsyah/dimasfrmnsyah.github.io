"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProjectModal({
  project,
  onClose
}: {
  project: Project;
  onClose: () => void;
}) {
  const highlightText =
    project.highlights && project.highlights.length > 0
      ? project.highlights.join(" · ")
      : "Outcome-driven delivery";
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-6 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35 }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border/10 bg-background/90"
      >
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={960}
            height={600}
            className={cn("h-64 w-full object-cover", project.imageClassName)}
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border/10 bg-panelStrong/80 text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-6 p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
              {project.category}
            </p>
            <h3
              id="project-title"
              className="mt-3 text-2xl font-semibold text-foreground"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-muted">
              {project.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/10 bg-panel/70 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                Role
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {project.role}
              </p>
            </div>
            <div className="rounded-2xl border border-border/10 bg-panel/70 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                Highlights
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {highlightText}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Key Features
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/10 bg-panel/70 px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.demo ? (
              <Link
                href={project.links.demo}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </Link>
            ) : null}
            {project.links.github ? (
              <Link
                href={project.links.github}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border/10 bg-panel/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
              >
                GitHub
                <Github className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
