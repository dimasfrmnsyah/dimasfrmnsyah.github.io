"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="Professional experience in backend and web development."
          description="A timeline of roles and key contributions across services and applications."
        />

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid gap-6"
        >
          <div className="absolute left-3 top-2 hidden h-full w-px bg-border/10 md:block" />
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              variants={fadeUp}
              className="relative rounded-3xl border border-border/10 bg-panel/70 p-6 md:ml-10"
            >
              <div className="absolute left-[-26px] top-8 hidden h-4 w-4 rounded-full border border-cyan-300/80 bg-background md:block" />
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/50">
                <span className="rounded-full border border-border/10 bg-panel/70 px-3 py-1">
                  {item.period}
                </span>
                <span>{item.location}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-cyan-200">{item.company}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-muted">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
