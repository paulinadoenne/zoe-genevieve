"use client";

import { useEffect, useRef } from "react";

// Rundes Textelement als Teaser zum Termin, dreht sich beim Scrollen (runter: im Uhrzeigersinn, hoch: zurück).
export default function ScrollBadge() {
  const ring = useRef<SVGGElement>(null);

  useEffect(() => {
    const el = ring.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotate(${(window.scrollY * 0.25).toFixed(1)}deg)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <a href="#termin" className="badge" aria-label="Zum Termin">
      <svg viewBox="0 0 120 120">
        <defs>
          <path id="badge-kreis" d="M 60 60 m -46 0 a 46 46 0 1 1 92 0 a 46 46 0 1 1 -92 0" />
        </defs>
        <g ref={ring} className="badge__ring">
          <text>
            <textPath href="#badge-kreis" textLength="289" lengthAdjust="spacing">
              {"\u00a0Zu deinem Termin · Zu deinem Termin ·"}
            </textPath>
          </text>
        </g>
        <path className="badge__pfeil" d="M60 46 V74 M50 64 L60 74 L70 64" />
      </svg>
    </a>
  );
}
