"use client";

import { useEffect } from "react";

// Schreibt "zoe" auf der Startseite in einer fließenden Linie vom z bis zum e.
// Statt Strich-Tricks (stroke-dasharray), die Safari falsch darstellt, wird die Linie
// Bild für Bild verlängert: der Pfad bekommt nur die Punkte bis zur aktuellen Stelle.
type Punkt = [number, number];

function punkteAus(d: string): Punkt[] {
  const zahlen = d.replace(/[ML]/g, " ").trim().split(/\s+/).map(Number);
  const pts: Punkt[] = [];
  for (let i = 0; i + 1 < zahlen.length; i += 2) pts.push([zahlen[i], zahlen[i + 1]]);
  return pts;
}

function teilpfad(pts: Punkt[], kum: number[], bis: number) {
  if (bis <= 0) return "";
  let s = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    if (kum[i] <= bis) {
      s += ` L ${pts[i][0]} ${pts[i][1]}`;
    } else {
      const t = (bis - kum[i - 1]) / (kum[i] - kum[i - 1]);
      const x = pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t;
      const y = pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t;
      s += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
      break;
    }
  }
  return s;
}

const sanft = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function LogoSchreiben() {
  useEffect(() => {
    const svg = document.querySelector<SVGSVGElement>(".hero4__logo .logo__script");
    const linien = svg ? Array.from(svg.querySelectorAll<SVGPathElement>(".zoe-linie")) : [];
    const fill = svg?.querySelector<SVGPathElement>(".zoe-fill");
    const name = document.querySelector<HTMLElement>(".hero4__logo .logo__name");
    if (!svg || !linien.length || !fill) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const teile = linien.map((l) => {
      const pts = punkteAus(l.getAttribute("d") || "");
      const kum = [0];
      for (let i = 1; i < pts.length; i++) {
        kum.push(kum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
      }
      return { l, pts, kum, laenge: kum[kum.length - 1], original: l.getAttribute("d") || "" };
    });
    const gesamt = teile.reduce((a, t) => a + t.laenge, 0);

    fill.style.opacity = "0";
    if (name) name.style.opacity = "0";
    teile.forEach((t) => {
      t.l.setAttribute("d", "");
      t.l.style.opacity = "1";
    });

    const dauer = 3400;
    const verzoegerung = 300;
    let raf = 0;
    let startzeit = 0;

    const fertig = () => {
      teile.forEach((t) => t.l.setAttribute("d", t.original));
      fill.style.transition = "opacity 0.5s ease";
      fill.style.opacity = "1";
      teile.forEach((t) => {
        t.l.style.transition = "opacity 0.5s ease";
        t.l.style.opacity = "0";
      });
      if (name) {
        name.style.transition = "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s";
        name.style.transform = "none";
        name.style.opacity = "1";
      }
    };

    const schritt = (jetzt: number) => {
      if (!startzeit) startzeit = jetzt + verzoegerung;
      const t = Math.min(1, Math.max(0, (jetzt - startzeit) / dauer));
      let rest = sanft(t) * gesamt;
      for (const teil of teile) {
        const bis = Math.min(rest, teil.laenge);
        teil.l.setAttribute("d", teilpfad(teil.pts, teil.kum, bis));
        rest -= teil.laenge;
      }
      if (t < 1) raf = requestAnimationFrame(schritt);
      else fertig();
    };
    if (name) name.style.transform = "translateY(6px)";
    raf = requestAnimationFrame(schritt);

    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
