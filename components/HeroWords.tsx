"use client";

import { useEffect, useState } from "react";

// Wechselndes Wort: gleitet in einer Maske nach oben heraus und das nächste von unten nach.
export default function HeroWords({ worte, intervall = 2400 }: { worte: string[]; intervall?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % worte.length), intervall);
    return () => clearInterval(t);
  }, [worte.length, intervall]);

  return (
    <span className="words" aria-live="off">
      {/* unsichtbares längstes Wort hält die Breite stabil */}
      <span className="words__sizer" aria-hidden>
        {worte.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      {worte.map((w, n) => (
        <span
          key={w}
          className={`words__w${n === i ? " is-on" : ""}${n === (i - 1 + worte.length) % worte.length ? " is-out" : ""}`}
          aria-hidden={n !== i}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
