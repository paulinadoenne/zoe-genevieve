"use client";

import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";

type Bild = { src: string; alt: string };

// Langsam wechselnde Diashow auf weißem Grund, ein Foto zur Zeit.
const DAUER = 7000;

export default function Gallery({ bilder }: { bilder: Bild[] }) {
  const n = bilder.length;
  const [aktiv, setAktiv] = useState(0);
  const [pause, setPause] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (pause) return;
    const t = setTimeout(() => setAktiv((i) => (i + 1) % n), DAUER);
    return () => clearTimeout(t);
  }, [aktiv, pause, n]);

  const gehe = (r: number) => {
    setAktiv((i) => (i + r + n) % n);
    setPause(true);
    setTimeout(() => setPause(false), 10000);
  };

  const nr = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <div
      className="show"
      aria-label="Arbeiten"
      aria-roledescription="Diashow"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const d = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(d) > 40) gehe(d < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="show__frame">
        {bilder.map((b, i) => (
          <div key={b.src} className={`show__slide${i === aktiv ? " is-active" : ""}`} aria-hidden={i !== aktiv}>
            <Photo src={b.src} alt={b.alt} />
          </div>
        ))}
        <button className="show__nav show__nav--prev" aria-label="Vorheriges Bild" onClick={() => gehe(-1)} />
        <button className="show__nav show__nav--next" aria-label="Nächstes Bild" onClick={() => gehe(1)} />
      </div>
      <div className="show__meta">
        <span className="show__caption">{bilder[aktiv].alt}</span>
        <span className="show__count">
          {nr(aktiv)} / {nr(n - 1)}
        </span>
      </div>
      <div className="show__progress">
        <span key={`${aktiv}-${pause}`} className={pause ? "" : "is-running"} />
      </div>
    </div>
  );
}
