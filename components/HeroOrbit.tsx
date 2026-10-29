"use client";

import { useEffect, useRef } from "react";
import Photo from "@/components/Photo";

type Bild = { src: string; alt: string };

// Startbild in 3D: Zoes Portrait in der Mitte, ihre Arbeiten kreisen langsam
// auf einem Ring darum. Die Maus neigt die Szene leicht.
export default function HeroOrbit({ portrait, bilder }: { portrait: Bild; bilder: Bild[] }) {
  const welt = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = welt.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--tx", `${(-8 - y * 8).toFixed(2)}deg`);
        el.style.setProperty("--ty", `${(x * 10).toFixed(2)}deg`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="orbit" aria-hidden={false}>
      <div className="orbit__welt" ref={welt}>
        <div className="orbit__ring">
          {bilder.map((b, i) => (
            <div
              key={b.src}
              className="orbit__item"
              style={{ "--i": i, "--n": bilder.length } as React.CSSProperties}
            >
              <Photo src={b.src} alt={b.alt} />
            </div>
          ))}
        </div>
        <div className="orbit__portrait">
          <Photo src={portrait.src} alt={portrait.alt} />
        </div>
      </div>
    </div>
  );
}
