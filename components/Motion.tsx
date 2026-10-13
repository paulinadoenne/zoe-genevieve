"use client";

import { useEffect } from "react";

// Dezente Einblend-Animationen beim Scrollen. Elemente werden erst versteckt,
// wenn dieses Skript läuft, ohne JavaScript bleibt alles sichtbar.
const TEXT = [
  ".kicker",
  ".title-xl",
  ".subline",
  ".cover-kicker",
  ".cover-line",
  ".hero__m-intro",
  ".hero__lead",
  ".small-text",
  ".facts div",
  ".acc__item",
  ".booking__bottom",
  ".ed__item figcaption",
  ".footer__name",
].join(",");

const BILDER = [".ed__img", ".about__photo", ".hero__img"].join(",");

export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("motion");

    const els = Array.from(document.querySelectorAll<HTMLElement>(`${TEXT},${BILDER}`));
    els.forEach((el) => {
      el.classList.add(el.matches(BILDER) ? "rv-img" : "rv");
      // Geschwister nacheinander einblenden
      const parent = el.parentElement;
      const i = parent ? Array.from(parent.children).indexOf(el) : 0;
      el.style.setProperty("--d", `${Math.min(i, 6) * 70}ms`);
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
