"use client";

import { useEffect, useState } from "react";
import { person } from "@/lib/content";

const links = [
  { href: "/#termin", label: "Termin" },
  { href: "/#arbeiten", label: "Arbeiten" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#fragen", label: "Q&A" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Springt sofort zum Abschnitt, solange das Menü noch alles verdeckt,
  // und blendet das Menü erst danach aus. So ist unterwegs nichts von
  // anderen Abschnitten zu sehen.
  const springe = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.split("#")[1];
    const ziel = id ? document.getElementById(id) : null;
    if (!ziel) {
      setOpen(false);
      return;
    }
    e.preventDefault();
    const y = ziel.getBoundingClientRect().top + window.scrollY;
    document.documentElement.classList.remove("menu-open");
    window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
    history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

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
        <nav className="header__links" aria-label="Navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => springe(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>
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
              <a href={l.href} onClick={(e) => springe(e, l.href)} tabIndex={open ? 0 : -1}>
                <span className="menu__nr">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
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
