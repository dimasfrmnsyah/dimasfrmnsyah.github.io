"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation and continuous learning."
          description="Formal education that shaped my engineering fundamentals and system development skills."
        />

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {education.map((item) => (
            <motion.div
              key={item.institution}
              variants={fadeUp}
              className="flex h-full flex-col rounded-3xl border border-border/10 bg-panel/70 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-cyan-200">{item.institution}</p>
                  <p className="mt-2 text-xs text-muted">{item.location}</p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/10 bg-panel/70">
                  <GraduationCap className="h-5 w-5 text-cyan-200" />
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              <ul className="mt-4 grid gap-2 text-sm text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {item.focus?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.focus.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-border/10 bg-panelStrong/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
