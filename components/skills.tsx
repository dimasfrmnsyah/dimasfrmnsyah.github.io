"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Database, Layout, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { fadeUp, staggerContainer } from "@/lib/motion";

const iconMap = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  tool: Wrench,
  brain: Brain
};

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Core stack for web and backend development."
          description="Focused on APIs, backend services, and modern frontends for digital products."
        />

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon as keyof typeof iconMap] ?? Layout;
            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-border/10 bg-panel/70 p-6 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/10 bg-panel/70">
                    <Icon className="h-5 w-5 text-cyan-200" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
                      {group.title}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {group.skills.length} Core Skills
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-xs text-foreground/50">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-panel/70">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
                        />
                      </div>
                      {skill.description ? (
                        <p className="mt-2 text-xs text-muted">
                          {skill.description}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
