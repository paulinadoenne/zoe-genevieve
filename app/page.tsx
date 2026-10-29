import Link from "next/link";
import Header from "@/components/Header";
import Photo from "@/components/Photo";
import Logo from "@/components/Logo";
import Motion from "@/components/Motion";
import Rondell from "@/components/Rondell";
import HeaderScroll from "@/components/HeaderScroll";
import { IconWhatsApp, IconMail, IconInstagram } from "@/components/Icons";
import {
  person,
  oeffnungszeiten,
  galerie,
  ueberMichNeu,
  fragen,
} from "@/lib/content";

const adresse = `${person.strasse}, ${person.plz} ${person.stadt}`;
const kartenLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adresse)}`;
const kacheln = [
  {
    src: "/kacheln/balayage-braun.jpg",
    alt: "Lange braune Haare mit weichem Balayage in Wellen",
  },
  {
    src: "/kacheln/karamell-wellen.jpg",
    alt: "Karamellblonde Haare mit großen Locken",
  },
  {
    src: "/kacheln/blond-balayage.jpg",
    alt: "Lange Haare mit hellblondem Balayage",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Start: riesiger Name, Portrait überlappt die Schrift */}
        <section className="hero">
          <div className="hero__stage">
            <h1 className="hero__logo">
              <Logo />
            </h1>
            <div className="hero__portrait">
              <Photo src="/zoe-portrait.jpg" alt="Zoe Genevieve im Strickpulli" />
            </div>
          </div>
          <div className="hero__side">
            <p className="hero__lead">
              Haare, die sich so gut anfühlen, wie sie aussehen. Balayage, Schnitte
              für langes Haar und Extensions, in Ruhe und nur für dich. Mitten in Köln.
            </p>
          </div>
          <ul className="hero__info">
            <li>
              {person.strasse}, {person.stadt}
            </li>
            <li>
              Di bis Fr {oeffnungszeiten[0].zeit} · Sa {oeffnungszeiten[1].zeit}
            </li>
            <li>
              <a href={person.instagramLink} target="_blank" rel="noopener">
                {person.instagram}
              </a>
            </li>
          </ul>
        </section>

        {/* Termin: zentrierte Überschrift, großes Bild, Button */}
        <section id="termin" className="booking">
          <h2 className="h-center">Termin buchen</h2>
          <div className="booking__image">
            <Photo
              src="/haar-textur.jpg"
              alt="Glänzendes braunes Haar in Wellen"
            />
            <a
              href={person.buchungsLink}
              className="pill pill--big pill--light"
              target="_blank"
              rel="noopener"
            >
              Jetzt buchen ↗
            </a>
          </div>
        </section>

        {/* Arbeiten: großes Bild, dann weitere Arbeiten */}
        <section id="arbeiten" className="works">
          <div className="works__head">
            <h2 className="h-center">Arbeiten</h2>
          </div>
          <Rondell bilder={galerie} />
        </section>

        {/* Über mich: kleine Texte, versetztes Bildraster */}
        <section id="ueber-mich" className="aboutx">
          <h2 className="h-center">Über mich</h2>
          <div className="aboutx__hero">
            <Photo src="/zoe-karl.jpg" alt="Zoe mit Karl, dem Salon Dog" />
          </div>
          <div className="aboutx__text">
            <div className="aboutx__col">
              {ueberMichNeu.intro.map((t) => (
                <p key={t} className="aboutx__p">
                  {t}
                </p>
              ))}
              <p className="aboutx__p aboutx__sub">Meine Schwerpunkte</p>
              <ul className="aboutx__list">
                {ueberMichNeu.schwerpunkte.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="aboutx__col">
              {ueberMichNeu.outro.map((t) => (
                <p key={t} className="aboutx__p">
                  {t}
                </p>
              ))}
              <a
                href={person.buchungsLink}
                className="aboutx__link"
                target="_blank"
                rel="noopener"
              >
                Termin buchen →
              </a>
            </div>
          </div>
        </section>

        {/* Q&A */}
        <section id="fragen" className="faq">
          <h2 className="h-center">Q&amp;A</h2>
          <div className="faq__list">
            {fragen.map((f, i) => (
              <details
                key={f.frage}
                className="faq__item"
                name="faq"
                open={i === 0}
              >
                <summary>
                  <span>{f.frage}</span>
                  <span className="faq__icon" aria-hidden />
                </summary>
                <p>{f.antwort}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="contact">
          <div className="contact__left">
            <h2 className="contact__title">Lass uns deinen Look gestalten</h2>
            <div className="contact__tiles">
              {kacheln.map((k) => (
                <Photo key={k.src} src={k.src} alt={k.alt} />
              ))}
            </div>
          </div>
          <div className="contact__fields">
            <div className="field">
              <span className="field__label">Adresse</span>
              <a href={kartenLink} target="_blank" rel="noopener">
                {adresse}
              </a>
            </div>
            <div className="field">
              <span className="field__label">Öffnungszeiten</span>
              {oeffnungszeiten.map((o) => (
                <span key={o.tage} className="field__row">
                  <span>{o.tage}</span>
                  <span>{o.zeit}</span>
                </span>
              ))}
            </div>
            <div className="field">
              <span className="field__label">Kontakt</span>
              <span className="contact__icons">
                <a
                  href={person.whatsappLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="WhatsApp"
                >
                  <IconWhatsApp />
                </a>
                <a
                  href={`mailto:${person.email.replace(/[[\]]/g, "")}`}
                  aria-label="E-Mail"
                >
                  <IconMail />
                </a>
                <a
                  href={person.instagramLink}
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                >
                  <IconInstagram />
                </a>
              </span>
            </div>
            <p className="contact__legal">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </p>
          </div>
        </section>
      </main>
      <Motion />
      <HeaderScroll />
    </>
  );
}
