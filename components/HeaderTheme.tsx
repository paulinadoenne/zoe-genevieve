"use client";

import { useEffect } from "react";

// Färbt Kopfzeile und mobile Menüzeile passend zum Bereich darunter ein.
// Bereiche markieren sich mit data-header="dark" oder "light".
export default function HeaderTheme() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    const bar = document.querySelector<HTMLElement>(".sticky-cta");

    const themeAt = (y: number) => {
      const el = document.elementFromPoint(window.innerWidth / 2, y);
      return el?.closest<HTMLElement>("[data-header]")?.dataset.header ?? "light";
    };

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (header) header.dataset.theme = themeAt(header.offsetHeight + 1);
        if (bar) bar.dataset.theme = themeAt(window.innerHeight - bar.offsetHeight - 1);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
