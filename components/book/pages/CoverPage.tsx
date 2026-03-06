"use client";

export function CoverPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
      <div className="bg-retro-paper border-4 border-retro-ink px-6 py-5 shadow-[3px_3px_0_#2b1f1a]">
        <div className="bg-retro-paper-deep border-2 border-retro-ink px-5 py-4">
          <div className="text-sm md:text-base text-retro-ink tracking-[0.3em]">
            JOURNAL
          </div>
          <div className="mt-2 text-base md:text-xl text-retro-brick tracking-[0.22em]">
            LOGBOOK
          </div>
          <div className="mt-3 text-[9px] md:text-[10px] text-retro-ink/70">
            Published, in-review, and draft research notes.
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 border-2 border-retro-ink ${
              i % 2 === 0 ? "bg-retro-teal" : "bg-retro-gold"
            }`}
          />
        ))}
      </div>

      <div className="text-[9px] md:text-[10px] text-retro-ink/70 animate-pulse">
        OPEN WITH NEXT
      </div>
    </div>
  );
}
