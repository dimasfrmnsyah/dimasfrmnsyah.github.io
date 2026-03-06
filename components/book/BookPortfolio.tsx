"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useBookNavigation } from "@/lib/book/use-book-navigation";
import { Book, type BookHandle } from "@/components/book/Book";
import { PixelButton } from "@/components/book/PixelButton";
import { CoverPage } from "@/components/book/pages/CoverPage";
import { ProjectsPage1 } from "@/components/book/pages/ProjectsPage1";
import { ProjectsPage2 } from "@/components/book/pages/ProjectsPage2";

const PAGES = [
  <CoverPage key="cover" />,
  <ProjectsPage1 key="projects1" />,
  <ProjectsPage2 key="projects2" />
];

const MAX_PAGES = PAGES.length;

export function BookPortfolio() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { currentPage, isMounted, goToPage } = useBookNavigation(MAX_PAGES);
  const [isSpread, setIsSpread] = useState(true);
  const bookRef = useRef<BookHandle>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setIsSpread(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const handleNext = useCallback(() => {
    if (bookRef.current?.isReady()) {
      bookRef.current.next();
      return;
    }
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const handlePrev = useCallback(() => {
    if (bookRef.current?.isReady()) {
      bookRef.current.prev();
      return;
    }
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const pageLabel =
    isSpread && currentPage > 1
      ? `${currentPage}-${Math.min(currentPage + 1, MAX_PAGES)}`
      : `${currentPage}`;

  const canNext = isSpread
    ? currentPage < MAX_PAGES - 1
    : currentPage < MAX_PAGES;
  const canPrev = currentPage > 1;

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        if (canNext) handleNext();
      } else if (event.key === "ArrowLeft") {
        if (canPrev) handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMounted, canNext, canPrev, handleNext, handlePrev]);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-6 md:py-10 bg-gradient-to-br from-retro-sky via-[#f6e6c6] to-retro-mint relative overflow-hidden">
      <div className="absolute inset-0 pixel-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-6 md:gap-8">
        <div className="flex items-center justify-between w-full flex-wrap gap-3">
          <div className="text-[10px] md:text-xs text-retro-ink bg-retro-paper px-3 py-2 border-2 border-retro-ink shadow-[3px_3px_0_#2b1f1a]">
            JOURNAL LOGBOOK
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="px-3 py-2 border-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-retro-ink bg-retro-mint transition-all hover:bg-[#97dfd0]"
              style={{
                textShadow: "2px 2px 0 rgba(0,0,0,0.25)",
                boxShadow: "3px 3px 0 rgba(43,31,26,0.5)"
              }}
            >
              BACK TO PORTFOLIO
            </Link>
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className={`px-3 py-2 border-2 text-[9px] md:text-[10px] font-bold transition-all ${
                soundEnabled
                  ? "border-retro-ink bg-retro-gold text-retro-ink shadow-[3px_3px_0_#2b1f1a]"
                  : "border-retro-ink/60 bg-retro-paper text-retro-ink/70"
              }`}
            >
              SOUND: {soundEnabled ? "ON" : "OFF"}
            </button>
          </div>
        </div>

        <Book
          ref={bookRef}
          currentPage={currentPage}
          maxPages={MAX_PAGES}
          pages={PAGES}
          soundEnabled={soundEnabled}
          isSpread={isSpread}
          onPageChange={goToPage}
        />

        <div className="flex items-center justify-center gap-4 md:gap-6 w-full flex-wrap">
          <PixelButton
            onClick={handlePrev}
            disabled={!canPrev}
            variant="secondary"
          >
            PREV
          </PixelButton>

          <div className="text-[10px] md:text-xs text-retro-ink bg-retro-paper px-3 py-2 border-2 border-retro-ink shadow-[3px_3px_0_#2b1f1a]">
            PAGE {pageLabel} / {MAX_PAGES}
          </div>

          <PixelButton onClick={handleNext} disabled={!canNext} variant="primary">
            NEXT
          </PixelButton>
        </div>

        <div className="text-[9px] md:text-[10px] text-retro-ink/70 text-center">
          USE ARROW KEYS TO TURN PAGES
        </div>
      </div>
    </div>
  );
}
