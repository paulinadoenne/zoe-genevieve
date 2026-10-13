"use client";

import { useEffect, useState } from "react";

// Mobiler Buchungsbutton, erscheint sobald das Startbild weggescrollt ist.
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

  return (
    <a
      href={href}
      className={`sticky-cta${sichtbar ? " is-visible" : ""}`}
      target="_blank"
      rel="noopener"
      tabIndex={sichtbar ? 0 : -1}
    >
      Termin buchen
    </a>
  );
}
