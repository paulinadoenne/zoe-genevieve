"use client";

import { useEffect } from "react";

// Schreibt "zoe" auf der Startseite wie mit einer Spitzfeder (Copperplate Kalligrafie):
// Abstriche entlang der Schriftneigung schwellen an, Aufstriche bleiben Haarlinien,
// die Enden laufen spitz aus.
// Die Werte entsprechen der statischen Form in ZoeScript, damit am Ende nichts springt.
type P = [number, number];
const WMAX = 62;
const WMIN = 26;
// Richtung eines Abstrichs (Schriftneigung nach unten links)
const AB_X = -0.5;
const AB_Y = 0.866;
const TAPER_A = 150;
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
    const druck = Math.max(0, tx * AB_X + ty * AB_Y);
    roh.push(WMIN + (WMAX - WMIN) * Math.pow(druck, 1.4));
  }
  const w = roh.map((_, i) => {
    let sum = 0;
    for (let k = -30; k <= 30; k++) sum += roh[Math.min(n - 1, Math.max(0, i + k))];
    const taper = Math.min(0.2 + 0.8 * ease(s[i] / TAPER_A), 0.08 + 0.92 * ease((L - s[i]) / TAPER_E));
    return (sum / 61) * taper;
  });
  return { pts, s, L, nx, ny, w };
}

// Strich als Kette aus Kreisen und Verbindungsstücken mit gleicher Drehrichtung.
// So bleibt die Form an scharfen Kurven lückenlos und die Kanten sind glatt.
function kreis(x: number, y: number, r: number) {
  const R = r.toFixed(1);
  return `M ${(x + r).toFixed(1)} ${y.toFixed(1)} A ${R} ${R} 0 1 1 ${(x - r).toFixed(1)} ${y.toFixed(1)} A ${R} ${R} 0 1 1 ${(x + r).toFixed(1)} ${y.toFixed(1)} Z`;
}

function umriss(t: ReturnType<typeof vorbereiten>, bis: number) {
  if (bis <= 0) return "";
  const out: string[] = [];
  let prev = -1;
  for (let i = 0; i < t.pts.length && t.s[i] <= bis; i++) {
    const [x, y] = t.pts[i];
    const r = Math.max(t.w[i] / 2, 0.4);
    out.push(kreis(x, y, r));
    if (prev >= 0) {
      const [px, py] = t.pts[prev];
      const pr = Math.max(t.w[prev] / 2, 0.4);
      let dx = x - px;
      let dy = y - py;
      const l = Math.hypot(dx, dy) || 1;
      dx /= l;
      dy /= l;
      const q = [
        [px - dy * pr, py + dx * pr],
        [x - dy * r, y + dx * r],
        [x + dy * r, y - dx * r],
        [px + dy * pr, py - dx * pr],
      ];
      const area = q.reduce((a, p, k) => a + p[0] * q[(k + 1) % 4][1] - q[(k + 1) % 4][0] * p[1], 0);
      if (area < 0) q.reverse();
      out.push(`M ${q.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L ")} Z`);
    }
    prev = i;
  }
  return out.join(" ");
}

const sanft = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function LogoSchreiben() {
  useEffect(() => {
    const svg = document.querySelector<SVGSVGElement>(".hero4__logo .logo__script");
    const linien = svg ? Array.from(svg.querySelectorAll<SVGPathElement>(".zoe-linie")) : [];
    const tinte = svg ? Array.from(svg.querySelectorAll<SVGPathElement>(".zoe-tinte")) : [];
    const name = document.querySelector<HTMLElement>(".hero4__logo .logo__name");
    if (!svg || !linien.length || linien.length !== tinte.length) return;

    const teile = linien.map((l, i) => ({
      geo: vorbereiten(punkte(l.getAttribute("d") || "")),
      el: tinte[i],
    }));
    const gesamt = teile.reduce((a, t) => a + t.geo.L, 0);
    svg.classList.add("ist-tinte");

    // Ohne Animation: Füllerform sofort fertig zeigen
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      teile.forEach((t) => {
        t.el.setAttribute("d", umriss(t.geo, t.geo.L));
        t.el.style.opacity = "1";
      });
      return;
    }

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
      teile.forEach((t) => t.el.setAttribute("d", umriss(t.geo, t.geo.L)));
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
