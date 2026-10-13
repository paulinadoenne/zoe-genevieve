"use client";

import { useEffect } from "react";

// Färbt Kopfzeile und mobile Menüzeile passend zum Bereich darunter ein.
// Bereiche markieren sich mit data-header="dark" oder "light".
export default function HeaderTheme() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    const bar = document.querySelector<HTMLElement>(".sticky-cta");

    const themeAt = (y: number, x = window.innerWidth / 2) => {
      // Kopfzeile und Menüzeile liegen über dem Inhalt, also darunter suchen
      const el = document
        .elementsFromPoint(x, y)
        .find((e) => !e.closest(".header, .sticky-cta"));
      const mobil = window.innerWidth <= 760;
      const sec = el?.closest<HTMLElement>(mobil ? "[data-header-m], [data-header]" : "[data-header]");
      return (mobil && sec?.dataset.headerM) || sec?.dataset.header || "light";
    };

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (header) {
          // Logo links und Menü rechts können über verschiedenen Flächen liegen
          const y = header.offsetHeight / 2;
          header.dataset.theme = themeAt(y);
          header.dataset.themeLeft = themeAt(y, 40);
          header.dataset.themeRight = themeAt(y, window.innerWidth - 40);
        }
        if (bar) bar.dataset.theme = themeAt(window.innerHeight - bar.offsetHeight / 2);
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
