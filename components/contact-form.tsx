"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  message: ""
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setFormData(initialState);

    setTimeout(() => setStatus("idle"), 2000);
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
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          autoComplete="email"
          required
          className="mt-2 w-full rounded-2xl border border-border/10 bg-panelStrong/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-cyan-400/60 focus:ring-0"
          placeholder="you@email.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <p className="mt-2 text-xs text-rose-300">{errors.email}</p>
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
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 disabled:opacity-70"
          type="submit"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          <Send className="h-4 w-4" />
        </motion.button>
        <div aria-live="polite">
          {status === "success" ? (
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-200">
              Message sent
            </span>
          ) : null}
          {status === "error" ? (
            <span className="text-xs uppercase tracking-[0.2em] text-rose-300">
              Something went wrong
            </span>
          ) : null}
        </div>
      </div>
    </form>
  );
}
