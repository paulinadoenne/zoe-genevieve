"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { person } from "@/lib/content";

const links = [
  { href: "/#galerie", label: "Arbeiten" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header${open ? " is-open" : ""}`}>
      <div className="header__inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          <Logo className="logo--inline" />
        </Link>
        <nav className="nav" aria-label="Hauptnavigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={person.buchungsLink || "/#termin"} className="nav__cta" target="_blank" rel="noopener" onClick={() => setOpen(false)}>
            Termin buchen
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
