import { socials } from "@/data/socials";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-border/10 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Dimas Firmansyah
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/40">
            Web & Backend Developer
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border/10 bg-panel/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/70 transition hover:border-cyan-400/50 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} Dimas Firmansyah. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
