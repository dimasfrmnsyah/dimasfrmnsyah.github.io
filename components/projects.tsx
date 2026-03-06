"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { fadeUp, staggerContainer } from "@/lib/motion";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category)))
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects delivered."
          description="Web and API solutions across government, logistics, POS, and education."
        />

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={category}
                variants={fadeUp}
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border-cyan-400/60 bg-cyan-400/10 text-foreground"
                    : "border-border/10 bg-panel/70 text-foreground/70 hover:border-cyan-400/30"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setSelected(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      <AnimatePresence>
        {selected ? (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
