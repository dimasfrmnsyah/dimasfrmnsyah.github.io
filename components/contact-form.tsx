"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { createWhatsAppHref } from "@/data/contact";

const initialState = {
  name: "",
  message: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const whatsappMessage = [
      "Halo Dimas,",
      `Saya ${formData.name}.`,
      "",
      formData.message
    ].join("\n");

    const whatsappUrl = createWhatsAppHref(whatsappMessage);
    const nextWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!nextWindow) {
      window.location.href = whatsappUrl;
    }

    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-foreground/50">
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, name: event.target.value }))
          }
          autoComplete="name"
          required
          className="mt-2 w-full rounded-2xl border border-border/10 bg-panelStrong/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-cyan-400/60 focus:ring-0"
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? (
          <p className="mt-2 text-xs text-rose-300">{errors.name}</p>
        ) : null}
      </div>

      <div>
        <label className="text-xs uppercase tracking-[0.2em] text-foreground/50">
          Message
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
          required
          className="mt-2 w-full resize-none rounded-2xl border border-border/10 bg-panelStrong/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-cyan-400/60 focus:ring-0"
          placeholder="Tell me about your project"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-2 text-xs text-rose-300">{errors.message}</p>
        ) : null}
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900"
          type="submit"
        >
          Continue to WhatsApp
          <MessageCircle className="h-4 w-4" />
        </motion.button>
      </div>
    </form>
  );
}
