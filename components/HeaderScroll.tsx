"use client";

import { useEffect } from "react";

// Kopfzeile: oben transparent, beim Runterscrollen ausgeblendet,
// beim Hochscrollen wieder da (mit weichem Verlauf statt Fläche).
export default function HeaderScroll() {
  useEffect(() => {
    const h = document.querySelector<HTMLElement>(".header");
    if (!h) return;
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      h.classList.toggle("is-scrolled", y > 40);
      h.classList.toggle("is-hidden", y > last && y > 120);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}
