"use client";

import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";

type Bild = { src: string; alt: string };

// Desktop: endlos laufendes Rondell, das Bild unter der Maus wird groß.
// Mobil: Diashow zum Wischen, die automatisch weiterläuft.
export default function Gallery({ bilder }: { bilder: Bild[] }) {
  const slider = useRef<HTMLDivElement>(null);
  const [aktiv, setAktiv] = useState(0);
  const pause = useRef(false);

  useEffect(() => {
    const el = slider.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setAktiv(Math.max(0, Math.min(bilder.length - 1, i)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const timer = setInterval(() => {
      if (pause.current || el.offsetParent === null) return;
      const next = (Math.round(el.scrollLeft / el.clientWidth) + 1) % bilder.length;
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    }, 3500);
    return () => {
      el.removeEventListener("scroll", onScroll);
      clearInterval(timer);
    };
  }, [bilder.length]);

  const geheZu = (i: number) => {
    const el = slider.current;
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
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

      <div className="slideshow">
        <div
          className="slideshow__track"
          ref={slider}
          onTouchStart={() => (pause.current = true)}
          onTouchEnd={() => setTimeout(() => (pause.current = false), 4000)}
        >
          {bilder.map((b, i) => (
            <Photo key={i} src={b.src} alt={b.alt} className="slideshow__slide" />
          ))}
        </div>
        <div className="slideshow__dots">
          {bilder.map((_, i) => (
            <button
              key={i}
              aria-label={`Bild ${i + 1}`}
              className={i === aktiv ? "is-active" : ""}
              onClick={() => geheZu(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
