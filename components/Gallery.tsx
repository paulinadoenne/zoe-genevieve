"use client";

import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";

type Bild = { src: string; alt: string };

const DAUER = 4500;

// Desktop: ruhige, langsam laufende Bildreihe mit Bildunterschriften.
// Mobil: ein großes Foto, Überblendung, Zähler und Fortschrittslinie.
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
    setTimeout(() => setPause(false), 8000);
  };

  const nr = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <>
      <div className="reel" aria-label="Arbeiten">
        <div className="reel__track">
          {[...bilder, ...bilder].map((b, i) => (
            <figure key={i} className="reel__item" aria-hidden={i >= n}>
              <div className="reel__img">
                <Photo src={b.src} alt={b.alt} />
              </div>
              <figcaption>
                <span>{nr(i % n)}</span>
                <em>{b.alt}</em>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div
        className="folio"
        aria-label="Arbeiten"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const d = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(d) > 40) gehe(d < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="folio__frame">
          {bilder.map((b, i) => (
            <div key={i} className={`folio__slide${i === aktiv ? " is-active" : ""}`} aria-hidden={i !== aktiv}>
              <Photo src={b.src} alt={b.alt} />
            </div>
          ))}
          <button className="folio__nav folio__nav--prev" aria-label="Vorheriges Bild" onClick={() => gehe(-1)} />
          <button className="folio__nav folio__nav--next" aria-label="Nächstes Bild" onClick={() => gehe(1)} />
        </div>
        <div className="folio__meta">
          <em>{bilder[aktiv].alt}</em>
          <span>
            {nr(aktiv)} / {nr(n - 1)}
          </span>
        </div>
        <div className="folio__progress">
          <span key={`${aktiv}-${pause}`} className={pause ? "" : "is-running"} />
        </div>
      </div>
    </>
  );
}
