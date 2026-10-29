"use client";

import { useEffect } from "react";

// Schreibt "zoe" auf der Startseite in einer durchgehenden Linie vom z bis zum e
// und blendet danach den fertigen Schriftzug und "Genevieve" ein.
export default function LogoSchreiben() {
  useEffect(() => {
    const svg = document.querySelector<SVGSVGElement>(".hero4__logo .logo__script");
    const linien = svg ? Array.from(svg.querySelectorAll<SVGPathElement>(".zoe-linie")) : [];
    const fill = svg?.querySelector<SVGPathElement>(".zoe-fill");
    const name = document.querySelector<HTMLElement>(".hero4__logo .logo__name");
    if (!svg || !linien.length || !fill) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Gleichmäßiges Tempo: jede Teillinie bekommt Zeit im Verhältnis zu ihrer Länge
    const laengen = linien.map((l) => l.getTotalLength());
    const gesamt = laengen.reduce((a, b) => a + b, 0);
    const dauer = 3200;
    const pause = 120;
    fill.style.opacity = "0";
    if (name) name.style.opacity = "0";

    let start = 300;
    const animationen = linien.map((l, i) => {
      const laenge = laengen[i];
      const zeit = (dauer * laenge) / gesamt;
      l.style.strokeDasharray = `${laenge} ${laenge}`;
      l.style.strokeDashoffset = `${laenge}`;
      l.style.opacity = "1";
      const anim = l.animate([{ strokeDashoffset: laenge }, { strokeDashoffset: 0 }], {
        duration: zeit,
        delay: start,
        easing: i === 0 ? "cubic-bezier(0.45, 0.05, 0.55, 1)" : "cubic-bezier(0.4, 0, 0.4, 1)",
        fill: "forwards",
      });
      start += zeit + pause;
      return anim;
    });

    animationen[animationen.length - 1].finished
      .then(() => {
        fill.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: "forwards" });
        linien.forEach((l) => l.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, fill: "forwards" }));
        name?.animate(
          [
            { opacity: 0, transform: "translateY(6px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 800, delay: 150, easing: "ease", fill: "forwards" },
        );
      })
      .catch(() => {});

    return () => animationen.forEach((a) => a.cancel());
  }, []);

  return null;
}
