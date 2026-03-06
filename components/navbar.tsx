"use client";
import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { useActiveSection } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } }
};

export function Navbar() {
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );
  const { activeId, setActiveId } = useActiveSection(sectionIds);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-border/10 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={() => setActiveId("home")}
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 bg-panel/70">
            DF
          </span>
          <span className="hidden text-xs uppercase text-foreground/70 sm:inline">
            Dimas Firmansyah
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          <LayoutGroup>
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveId(id)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative text-sm font-medium text-muted transition hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
                    />
                  ) : null}
                </a>
              );
            })}
          </LayoutGroup>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden items-center rounded-full border border-border/10 bg-panel/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition hover:border-cyan-400/50 hover:text-cyan-200 md:flex"
          >
            Let&apos;s Talk
          </a>
          <button
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 bg-panel/70 text-foreground transition hover:border-cyan-400/50 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobileMenuVariants}
            className="lg:hidden"
          >
            <div className="border-t border-border/10 bg-background/90 backdrop-blur-xl">
              <Container className="py-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                    Navigation
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 bg-panel/70 text-foreground"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-6 grid gap-4">
                  {navItems.map((item, index) => {
                    const id = item.href.replace("#", "");
                    const isActive = activeId === id;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <a
                          href={item.href}
                          onClick={() => {
                            setActiveId(id);
                            setOpen(false);
                          }}
                          className={cn(
                            "flex items-center justify-between rounded-2xl border border-border/10 bg-panel/70 px-4 py-3 text-sm font-medium text-foreground transition hover:border-cyan-400/40 hover:text-foreground",
                            isActive && "border-cyan-400/60 text-foreground"
                          )}
                        >
                          {item.label}
                          <span className="text-xs text-foreground/40">0{index + 1}</span>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>
              </Container>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
