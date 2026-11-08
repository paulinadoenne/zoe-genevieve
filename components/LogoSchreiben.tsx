"use client";

import { useEffect } from "react";

// Schreibt "zoe" auf der Startseite wie mit einem Füller: die Linie wächst vom z bis
// zum e, ihre Breite hängt von der Schreibrichtung ab und die Enden laufen spitz aus.
// Die Werte entsprechen der statischen Form in ZoeScript, damit am Ende nichts springt.
type P = [number, number];
const WMAX = 74;
const WMIN = 20;
const NIB = (-35 * Math.PI) / 180;
const TAPER_A = 90;
const TAPER_E = 220;
const ease = (x: number) => Math.sin(Math.min(1, Math.max(0, x)) * (Math.PI / 2));

function punkte(d: string): P[] {
  const z = d.replace(/[MLZ]/g, " ").trim().split(/[\s,]+/).map(Number);
  const pts: P[] = [];
  for (let i = 0; i + 1 < z.length; i += 2) {
    const p: P = [z[i], z[i + 1]];
    const q = pts[pts.length - 1];
    if (!q || Math.hypot(p[0] - q[0], p[1] - q[1]) > 0.01) pts.push(p);
  }
  return pts;
}

function vorbereiten(pts: P[]) {
  const n = pts.length;
  const s = [0];
  for (let i = 1; i < n; i++) s.push(s[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const L = s[n - 1];
  const nx: number[] = [];
  const ny: number[] = [];
  const roh: number[] = [];
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(n - 1, i + 1)];
    let tx = b[0] - a[0];
    let ty = b[1] - a[1];
    const l = Math.hypot(tx, ty) || 1;
    tx /= l;
    ty /= l;
    nx.push(-ty);
    ny.push(tx);
    roh.push(WMIN + (WMAX - WMIN) * Math.abs(Math.sin(Math.atan2(ty, tx) - NIB)));
  }
  const w = roh.map((_, i) => {
    let sum = 0;
    for (let k = -7; k <= 7; k++) sum += roh[Math.min(n - 1, Math.max(0, i + k))];
    const taper = Math.min(0.35 + 0.65 * ease(s[i] / TAPER_A), 0.08 + 0.92 * ease((L - s[i]) / TAPER_E));
    return (sum / 15) * taper;
  });
  return { pts, s, L, nx, ny, w };
}

function umriss(t: ReturnType<typeof vorbereiten>, bis: number) {
  if (bis <= 0) return "";
  const links: string[] = [];
  const rechts: string[] = [];
  for (let i = 0; i < t.pts.length && t.s[i] <= bis; i++) {
    const h = t.w[i] / 2;
    links.push(`${(t.pts[i][0] + t.nx[i] * h).toFixed(1)} ${(t.pts[i][1] + t.ny[i] * h).toFixed(1)}`);
    rechts.push(`${(t.pts[i][0] - t.nx[i] * h).toFixed(1)} ${(t.pts[i][1] - t.ny[i] * h).toFixed(1)}`);
  }
  if (links.length < 2) return "";
  return `M ${links.join(" L ")} L ${rechts.reverse().join(" L ")} Z`;
}

const sanft = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function LogoSchreiben() {
  useEffect(() => {
    const svg = document.querySelector<SVGSVGElement>(".hero4__logo .logo__script");
    const linien = svg ? Array.from(svg.querySelectorAll<SVGPathElement>(".zoe-linie")) : [];
    const tinte = svg ? Array.from(svg.querySelectorAll<SVGPathElement>(".zoe-tinte")) : [];
    const name = document.querySelector<HTMLElement>(".hero4__logo .logo__name");
    if (!svg || !linien.length || linien.length !== tinte.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const teile = linien.map((l, i) => ({
      geo: vorbereiten(punkte(l.getAttribute("d") || "")),
      el: tinte[i],
      original: tinte[i].getAttribute("d") || "",
    }));
    const gesamt = teile.reduce((a, t) => a + t.geo.L, 0);

    teile.forEach((t) => {
      t.el.setAttribute("d", "");
      t.el.style.opacity = "1";
      t.el.style.animation = "none";
    });
    if (name) {
      name.style.opacity = "0";
      name.style.transform = "translateY(6px)";
    }

    const dauer = 3400;
    let raf = 0;
    let start = 0;
    const schritt = (jetzt: number) => {
      if (!start) start = jetzt + 300;
      const f = Math.min(1, Math.max(0, (jetzt - start) / dauer));
      let rest = sanft(f) * gesamt;
      for (const t of teile) {
        t.el.setAttribute("d", umriss(t.geo, Math.min(rest, t.geo.L)));
        rest -= t.geo.L;
      }
      if (f < 1) {
        raf = requestAnimationFrame(schritt);
        return;
      }
      teile.forEach((t) => t.el.setAttribute("d", t.original));
      if (name) {
        name.style.transition = "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s";
        name.style.transform = "none";
        name.style.opacity = "1";
      }
    };
    raf = requestAnimationFrame(schritt);
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
