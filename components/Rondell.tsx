"use client";

import { useRef } from "react";
import Photo from "./Photo";

type Bild = { src: string; alt: string; titel?: string; info?: string };

// Bildreihe, die nur seitlich verschoben wird: Wischen am Handy,
// Ziehen mit der Maus oder seitliches Scrollen am Desktop.
export default function Rondell({ bilder }: { bilder: Bild[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  return (
    <div
      ref={ref}
      className="rondell"
      aria-label="Arbeiten, seitlich verschieben"
      onPointerDown={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        drag.current = { x: e.clientX, left: ref.current.scrollLeft };
        ref.current.classList.add("is-dragging");
      }}
      onPointerMove={(e) => {
        if (!drag.current || !ref.current) return;
        ref.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
      }}
      onPointerUp={() => {
        drag.current = null;
        ref.current?.classList.remove("is-dragging");
      }}
      onPointerLeave={() => {
        drag.current = null;
        ref.current?.classList.remove("is-dragging");
      }}
    >
      <div className="rondell__track">
        {bilder.map((b) => (
          <figure key={b.src} className="rondell__item">
            <div className="rondell__img">
              <Photo src={b.src} alt={b.alt} />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
