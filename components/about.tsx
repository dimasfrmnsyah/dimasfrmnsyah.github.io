"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { fadeUp, staggerContainer } from "@/lib/motion";

const focusStack = [
  "API Development",
  "System Security",
  "PHP",
  "Node.js",
  "Golang",
  "Microservices",
  "PostgreSQL"
];

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Building clean, secure systems ready for production scale."
          description="Experienced in building web applications end-to-end. My focus is backend services, APIs, and system security with measurable delivery."
        />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-muted"
          >
            <motion.p variants={fadeUp} className="text-base leading-relaxed">
              I handle the full delivery lifecycle: requirement gathering,
              planning, design, development, testing, delivery, and maintenance.
              My strength is backend engineering, API integration, and system
              security.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base leading-relaxed">
              I enjoy collaborating across teams to build stable, maintainable,
              and business-relevant solutions for web applications and mobile
              services.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {focusStack.map((item) => (
                <span
                  key={item}
                className="rounded-full border border-border/10 bg-panel/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="rounded-2xl border border-border/10 bg-panel/70 p-6"
              >
                <p className="text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/60">
                  {stat.label}
                </p>
                {stat.description ? (
                  <p className="mt-3 text-sm text-muted">
                    {stat.description}
                  </p>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
