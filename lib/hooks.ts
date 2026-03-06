"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  const idKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    if (!sectionIds.length) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "-15% 0px -55% 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [idKey, sectionIds]);

  return { activeId, setActiveId };
}
