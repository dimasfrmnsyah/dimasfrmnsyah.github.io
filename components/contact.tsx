"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { socials } from "@/data/socials";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { fadeUp, staggerContainer } from "@/lib/motion";

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  phone: Phone
};

export function Contact() {
  return (
    <Section id="contact" className="pb-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's discuss your project needs."
          description="Open for collaboration and system development. Share your requirements and I'll respond promptly."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-border/10 bg-panel/70 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                Direct
              </p>
              <p className="mt-3 text-xl font-semibold text-foreground">
                dimasfrmnsyh@gmail.com
              </p>
              <p className="mt-2 text-sm text-muted">0894106932</p>
              <p className="mt-2 text-sm text-muted">Bandung</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-border/10 bg-panel/70 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                Socials
              </p>
              <div className="mt-4 grid gap-3">
                {socials.map((item) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Mail;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-border/10 bg-panelStrong/70 px-4 py-3 text-sm text-foreground transition hover:border-cyan-400/50"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 bg-panel/70">
                          <Icon className="h-4 w-4 text-cyan-200" />
                        </span>
                        {item.label}
                      </span>
                      <span className="text-xs text-foreground/50">Visit</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-border/10 bg-panel/70 p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
              Start a project
            </p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">
              Tell me about your goals
            </h3>
            <p className="mt-2 text-sm text-muted">
              Share the scope, timeline, and desired outcomes.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
