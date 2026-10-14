"use client";

import { useEffect, useState } from "react";
import { person } from "@/lib/content";

const links = [
  { href: "/#termin", label: "Termin" },
  { href: "/#arbeiten", label: "Arbeiten" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`header${open ? " is-open" : ""}`}>
        <a href="/" className="header__mark" onClick={() => setOpen(false)}>
          ( ZG )
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          <span className="menu-btn__label">{open ? "Schließen" : "Menü"}</span>
          <span className="menu-btn__icon" aria-hidden>
            <i />
            <i />
          </span>
        </button>
      </header>

      <nav id="menu" className={`menu${open ? " is-open" : ""}`} aria-label="Hauptmenü" aria-hidden={!open}>
        <ul className="menu__list">
          {links.map((l, i) => (
            <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
              <a href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                <span className="menu__nr">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu__img" aria-hidden>
          <img src="/zoe-portrait.jpg" alt="" />
        </div>
        <div className="menu__foot">
          <a href={person.buchungsLink} className="pill pill--big" target="_blank" rel="noopener" tabIndex={open ? 0 : -1}>
            Termin online buchen ↗
          </a>
          <p>
            {person.strasse}, {person.plz} {person.stadt}
            <br />
            <a href={person.instagramLink} target="_blank" rel="noopener" tabIndex={open ? 0 : -1}>
              {person.instagram}
            </a>
          </p>
        </div>
      </nav>
    </>
  );
}
