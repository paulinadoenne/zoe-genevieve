"use client";

import { useEffect, useState } from "react";

// Mobile Menüzeile am unteren Rand, erscheint sobald das Startbild weggescrollt ist.
export default function StickyCta({ href }: { href: string }) {
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const ziel = document.querySelector(".hero");
    if (!ziel) return;
    const obs = new IntersectionObserver(([e]) =>
      setSichtbar(!e.isIntersecting && e.boundingClientRect.top < 0)
    );
    obs.observe(ziel);
    return () => obs.disconnect();
  }, []);

  const tab = sichtbar ? 0 : -1;

  return (
    <nav className={`sticky-cta${sichtbar ? " is-visible" : ""}`} aria-label="Menü">
      <a href="#galerie" tabIndex={tab}>Arbeiten</a>
      <a href="#ueber-mich" tabIndex={tab}>Über mich</a>
      <a href="#kontakt" tabIndex={tab}>Kontakt</a>
      <a href={href} className="sticky-cta__book" target="_blank" rel="noopener" tabIndex={tab}>
        Termin buchen
      </a>
    </nav>
  );
}
