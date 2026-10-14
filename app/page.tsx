import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import Photo from "@/components/Photo";
import Logo from "@/components/Logo";
import Motion from "@/components/Motion";
import Rondell from "@/components/Rondell";
import HeaderScroll from "@/components/HeaderScroll";
import { IconWhatsApp, IconMail, IconInstagram } from "@/components/Icons";
import { person, oeffnungszeiten, galerie, ueberMich, steckbrief } from "@/lib/content";

const adresse = `${person.strasse}, ${person.plz} ${person.stadt}`;
const kartenLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adresse)}`;
const kacheln = [
  { src: "/kacheln/balayage-braun.jpg", alt: "Lange braune Haare mit weichem Balayage in Wellen" },
  { src: "/kacheln/karamell-wellen.jpg", alt: "Karamellblonde Haare mit großen Locken" },
  { src: "/kacheln/blond-balayage.jpg", alt: "Lange Haare mit hellblondem Balayage" },
];
const leistungen = ["Blonde Specialist", "Balayage", "Farbe", "Schnitt", "Styling"];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Start: riesiger Name, Portrait überlappt die Schrift */}
        <section className="hero">
          <h1 className="hero__logo">
            <Logo />
          </h1>
          <div className="hero__portrait">
            <Photo src="/zoe-portrait.jpg" alt="Zoe Genevieve im Strickpulli" />
          </div>
          <p className="hero__lead">
            Master Hairstylist und Blonde Specialist in Köln. 1:1 Termine in der
            Sankt-Apern-Straße: Beratung, Farbe und Schnitt aus einer Hand, du stehst
            im Mittelpunkt.
          </p>
          <ul className="hero__list">
            {leistungen.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>

        {/* Termin: zentrierte Überschrift, großes Bild, Button */}
        <section id="termin" className="booking">
          <h2 className="h-center">Termin buchen</h2>
          <div className="booking__image">
            <Photo src="/haar-textur.jpg" alt="Glänzendes braunes Haar in Wellen" />
            <a href={person.buchungsLink} className="pill pill--big pill--light" target="_blank" rel="noopener">
              Jetzt online buchen ↗
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
          <p className="aboutx__p aboutx__p--1">
            {ueberMich[0]} {ueberMich[1]}
          </p>
          <p className="aboutx__p aboutx__p--2">
            {ueberMich[2]}
            <a href={person.buchungsLink} className="aboutx__link" target="_blank" rel="noopener">
              Termin buchen →
            </a>
          </p>
          <div className="aboutx__tiles">
            {kacheln.map((k) => (
              <Photo key={k.src} src={k.src} alt={k.alt} />
            ))}
          </div>
          <p className="aboutx__note">
            {steckbrief.map((f) => `${f.label} ${f.wert}`).join(" · ")}
          </p>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="contact">
          <h2 className="contact__title">Lass uns deinen Look gestalten</h2>
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
                <a href={person.whatsappLink} target="_blank" rel="noopener" aria-label="WhatsApp">
                  <IconWhatsApp />
                </a>
                <a href={`mailto:${person.email.replace(/[[\]]/g, "")}`} aria-label="E-Mail">
                  <IconMail />
                </a>
                <a href={person.instagramLink} target="_blank" rel="noopener" aria-label="Instagram">
                  <IconInstagram />
                </a>
              </span>
            </div>
            <a href={person.buchungsLink} className="pill" target="_blank" rel="noopener">
              Termin buchen
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Motion />
      <HeaderScroll />
    </>
  );
}
