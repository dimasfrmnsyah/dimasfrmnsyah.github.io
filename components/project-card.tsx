"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  onOpen
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/10 bg-panel/70 transition"
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={520}
          className={cn(
            "h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]",
            project.imageClassName
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-border/10 bg-panelStrong/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-foreground/80 backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/10 bg-panel/70 px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <button
            onClick={onOpen}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-foreground"
          >
            View details
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3">
            {project.links.github ? (
              <Link
                href={project.links.github}
                target="_blank"
                className="text-foreground/60 transition hover:text-foreground"
                onClick={(event) => event.stopPropagation()}
              >
                <Github className="h-4 w-4" />
              </Link>
            ) : null}
            {project.links.demo ? (
              <Link
                href={project.links.demo}
                target="_blank"
                className="text-foreground/60 transition hover:text-foreground"
                onClick={(event) => event.stopPropagation()}
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
