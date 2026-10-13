"use client";

import { useEffect, useState } from "react";
import Photo from "./Photo";

type Bild = { src: string; alt: string };

// Desktop: endlos laufendes Rondell, das Bild unter der Maus wird groß.
// Mobil: Reihe kleiner Bilder, nacheinander wird jeweils eins groß.
export default function Gallery({ bilder }: { bilder: Bild[] }) {
  const n = bilder.length;
  // Die Bilder liegen dreimal hintereinander, aktiv läuft durch die mittlere
  // Kopie. Am Ende springt es unsichtbar zurück, so wirkt die Reihe endlos.
  const [aktiv, setAktiv] = useState(n);
  const [sprung, setSprung] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const timer = setInterval(() => setAktiv((i) => i + 1), 2600);
    return () => clearInterval(timer);
  }, [pause]);

  useEffect(() => {
    if (aktiv < 2 * n && aktiv >= n) return;
    const t = setTimeout(() => {
      setSprung(true);
      setAktiv((i) => ((i % n) + n));
      requestAnimationFrame(() => requestAnimationFrame(() => setSprung(false)));
    }, 650);
    return () => clearTimeout(t);
  }, [aktiv, n]);

  const waehle = (i: number) => {
    setAktiv(i);
    setPause(true);
    setTimeout(() => setPause(false), 6000);
  };

  return (
    <>
      <div className="carousel" aria-label="Arbeiten">
        <div className="carousel__track">
          {[...bilder, ...bilder].map((b, i) => (
            <figure key={i} className="carousel__item" aria-hidden={i >= bilder.length}>
              <Photo src={b.src} alt={b.alt} />
            </figure>
          ))}
        </div>
      </div>

      <div className="slideshow" aria-label="Arbeiten">
        <div
          className={`slideshow__track${sprung ? " no-anim" : ""}`}
          style={{ "--i": aktiv } as React.CSSProperties}
        >
          {[...bilder, ...bilder, ...bilder].map((b, i) => (
            <button
              key={i}
              className={`slideshow__item${i === aktiv ? " is-active" : ""}`}
              onClick={() => waehle(i)}
              aria-label={b.alt}
              tabIndex={i >= n && i < 2 * n ? 0 : -1}
            >
              <Photo src={b.src} alt={b.alt} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
