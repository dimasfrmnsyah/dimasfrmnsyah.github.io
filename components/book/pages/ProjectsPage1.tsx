"use client";

import { bookPortfolio } from "@/data/book-portfolio";

export function ProjectsPage1() {
  const publications = bookPortfolio.publications.slice(0, 3);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-base md:text-lg text-retro-teal tracking-[0.12em]">
        JOURNALS 1/2
      </h1>

      {publications.map((item) => {
        const hasLink = Boolean(item.link);
        return (
          <div
            key={item.id}
            className="bg-retro-paper border-2 border-retro-ink p-3 shadow-[3px_3px_0_#2b1f1a]"
          >
            <h3 className="text-xs md:text-sm text-retro-brick mb-1">
              {item.title}
            </h3>
            <p className="text-[9px] md:text-[10px] text-retro-ink/70 mb-2">
              {item.venue} · {item.year}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {[item.type, item.status, item.medium].map((meta, index) => (
                <span
                  key={`${item.id}-meta-${meta}-${index}`}
                  className="text-[8px] bg-retro-mint border-2 border-retro-ink px-1.5 py-0.5"
                >
                  {meta}
                </span>
              ))}
            </div>
            <p className="text-[9px] md:text-[10px] text-retro-ink/80 mb-2">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {item.keywords.map((keyword, index) => (
                <span
                  key={`${item.id}-keyword-${keyword}-${index}`}
                  className="text-[8px] bg-retro-gold border-2 border-retro-ink px-1.5 py-0.5"
                >
                  {keyword}
                </span>
              ))}
            </div>
            {hasLink ? (
              <div className="flex gap-3 text-[9px] md:text-[10px]">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-retro-teal underline"
                >
                  VIEW
                </a>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
