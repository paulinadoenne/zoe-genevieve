import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Logo from "@/components/Logo";
import Gallery from "@/components/Gallery";
import StickyCta from "@/components/StickyCta";
import InfoLine from "@/components/InfoLine";
import HeaderTheme from "@/components/HeaderTheme";
import ScreenBg from "@/components/ScreenBg";
import { person, oeffnungszeiten, galerie, ueberMich, steckbrief, hintergruende, fotos } from "@/lib/content";

const adresse = `${person.strasse}, ${person.plz} ${person.stadt}`;
const kartenLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [person.salon, adresse].filter(Boolean).join(" ")
)}`;
// Hauptbutton: Online-Buchung, solange kein Link hinterlegt ist WhatsApp
const terminLink = person.buchungsLink || person.whatsappLink;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero: Farbfläche links, Foto rechts, Logo läuft über die Kante */}
        <section className="hero" data-header="dark">
          <p className="hero__m-intro">
            Master Hairstylist und Blonde Specialist in Köln. 1:1 Termine in der
            Sankt-Apern-Straße, du stehst im Mittelpunkt.
          </p>
          <div className="hero__panel">
            <p className="kicker kicker--light">01 · Hair · Köln</p>
            <div className="hero__bottom">
              <p className="hero__lead">
                Master Hairstylist und <em>Blonde Specialist.</em> 1:1 Termine,
                du stehst im Mittelpunkt.
              </p>
              <a href={terminLink} className="btn btn--light hero__cta" target="_blank" rel="noopener">
                Termin buchen <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__img">
              <Photo src="/zoe.jpg" alt="Zoe Genevieve sitzt vor einer roten Holztür" className="hero__photo" />
            </div>
            <h1 className="hero__title">
              <Logo />
            </h1>
          </div>
          <nav className="hero__m-links" aria-label="Menü">
            <a href="#galerie">Arbeiten</a>
            <a href="#ueber-mich">Über mich</a>
            <a href="#kontakt">Kontakt</a>
            <a href={terminLink} target="_blank" rel="noopener">
              Termin buchen
            </a>
          </nav>
          <InfoLine className="hero__m-info" />
        </section>
        <div className="ticker container">
          <span>{person.beruf}</span>
          <span>Sankt-Apern-Straße, {person.stadt}</span>
          <span>{person.instagram}</span>
        </div>

        {/* Termin: Schwarzweißfoto, große orange Schrift, oranger Block */}
        <section id="termin" className="booking" data-header="light">
          <ScreenBg {...hintergruende.termin} mono />
          <div className="container booking__top">
            <p className="kicker">02 · Termin</p>
            <h2 className="title-xl">
              Termin buchen
            </h2>
            <p className="subline">
              <em>bei Zoe Genevieve</em>
            </p>
          </div>
          <div className="container booking__bottom">
            <a href={terminLink} className="btn btn--accent btn--big" target="_blank" rel="noopener">
              Jetzt buchen <span aria-hidden>↗</span>
            </a>
          </div>
        </section>

        {/* Arbeiten */}
        <section id="galerie" className="section">
          <div className="container works__head">
            <p className="kicker">03 · Arbeiten</p>
            <h2 className="title-xl">Arbeiten</h2>
            <p className="subline">
              <em>Blond, Balayage, Schnitt</em>
            </p>
          </div>
          <Gallery bilder={galerie} />
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="section container about">
          <ScreenBg {...hintergruende.ueberMich} mono />
          <div className="about__grid">
            <div className="about__media">
              <Photo src={fotos.ueberMich} alt="Zoe im Strickpulli" className="about__photo" />
              <Photo src={fotos.karl} alt="Zoe mit Karl, dem Salon Dog" className="about__small" />
            </div>
            <div className="about__text">
              <p className="kicker">04 · Über mich</p>
              <h2 className="title-xl">
              Hi, ich bin Zoe
            </h2>
              <p className="subline">
                <em>und Karl, mein Salon Dog</em>
              </p>
              <div className="panel panel--orange about__panel">
                {ueberMich.map((p, i) => (
                  <p key={i} className="small-text">
                    {p}
                  </p>
                ))}
                <dl className="facts">
                  {steckbrief.map((f) => (
                    <div key={f.label}>
                      <dt>{f.label}</dt>
                      <dd>{f.wert}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="section container">
          <ScreenBg {...hintergruende.kontakt} mono />
          <p className="kicker">05 · Kontakt</p>
          <h2 className="title-xl">Kontakt</h2>
          <p className="subline">
            <em>Sankt-Apern-Straße, Köln</em>
          </p>
          <div className="acc">
            <details className="acc__item">
              <summary>
                Adresse
                <span className="acc__sub">↳ {person.strasse}</span>
              </summary>
              <div className="acc__body">
                <p>
                  {person.salon && (
                    <>
                      {person.salon}
                      <br />
                    </>
                  )}
                  {person.strasse}
                  <br />
                  {person.plz} {person.stadt}
                </p>
                <a href={kartenLink} target="_blank" rel="noopener" className="text-link">
                  Route planen ↗
                </a>
              </div>
            </details>
            <details className="acc__item">
              <summary>
                Öffnungszeiten
                <span className="acc__sub">↳ Termine nach Vereinbarung</span>
              </summary>
              <dl className="hours acc__body">
                {oeffnungszeiten.map((o) => (
                  <div key={o.tage}>
                    <dt>{o.tage}</dt>
                    <dd>{o.zeit}</dd>
                  </div>
                ))}
              </dl>
            </details>
            <details className="acc__item">
              <summary>
                Kontakt
                <span className="acc__sub">↳ WhatsApp, E-Mail, Instagram</span>
              </summary>
              <p className="acc__body">
                <a href={person.whatsappLink} target="_blank" rel="noopener">WhatsApp</a>
                <br />
                <a href={`mailto:${person.email.replace(/[[\]]/g, "")}`}>{person.email}</a>
                <br />
                <a href={person.instagramLink} target="_blank" rel="noopener">
                  {person.instagram}
                </a>
              </p>
            </details>
            <details className="acc__item">
              <summary>
                Termin
                <span className="acc__sub">↳ Online über Planity</span>
              </summary>
              <div className="acc__body">
                <a href={terminLink} className="text-link" target="_blank" rel="noopener">
                  Jetzt online buchen ↗
                </a>
              </div>
            </details>
          </div>
        </section>
      </main>

      <StickyCta href={terminLink} />
      <HeaderTheme />
      <Footer />
    </>
  );
}
