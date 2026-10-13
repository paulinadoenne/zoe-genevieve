import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import {
  person,
  oeffnungszeiten,
  leistungen,
  galerie,
  ueberMich,
} from "@/lib/content";

const adresse = `${person.strasse}, ${person.plz} ${person.stadt}`;
const kartenLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${person.salon} ${adresse}`
)}`;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero container">
          <div className="hero__text">
            <p className="eyebrow">
              {person.beruf} in {person.stadt}
            </p>
            <h1>
              Haare mit Ruhe <em>und Gefühl.</em>
            </h1>
            <p className="lead">
              Schnitt, Farbe und Styling, abgestimmt auf dich und deinen Alltag.
              Du findest mich im {person.salon} in {person.stadt}.
            </p>
            <div className="actions">
              <a href="#termin" className="btn">
                Termin buchen
              </a>
              <a href="#leistungen" className="link">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <Photo alt="Portrait von Zoe" className="hero__photo" />
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="section container">
          <header className="section__head">
            <p className="eyebrow">Leistungen und Preise</p>
            <h2>Was ich für dich tun kann</h2>
            <p className="muted">
              Alle Preise inklusive Beratung. Der genaue Preis richtet sich nach
              Haarlänge und Aufwand, ich sage ihn dir vorher.
            </p>
          </header>
          <div className="price-grid">
            {leistungen.map((k) => (
              <div key={k.titel} className="price-cat">
                <h3>{k.titel}</h3>
                <ul>
                  {k.leistungen.map((l, i) => (
                    <li key={i}>
                      <span className="price-name">
                        {l.name}
                        {l.info && <small>{l.info}</small>}
                      </span>
                      <span className="price-dots" aria-hidden />
                      <span className="price-value">{l.preis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Termin */}
        <section id="termin" className="band">
          <div className="container band__inner">
            <div>
              <p className="eyebrow">Termin</p>
              <h2>Buch dir deinen Platz bei mir</h2>
              <p className="muted">
                Ich arbeite auf Stuhlmiete, du buchst also direkt bei mir.
                Schreib mir kurz, was du dir vorstellst, dann plane ich genug
                Zeit für dich ein.
              </p>
            </div>
            <div className="band__actions">
              {person.buchungsLink && (
                <a href={person.buchungsLink} className="btn" target="_blank" rel="noopener">
                  Online buchen
                </a>
              )}
              <a href={person.whatsappLink} className="btn" target="_blank" rel="noopener">
                Per WhatsApp anfragen
              </a>
              <a href={person.telefonLink} className="btn btn--ghost">
                Anrufen · {person.telefon}
              </a>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section id="galerie" className="section container">
          <header className="section__head">
            <p className="eyebrow">Galerie</p>
            <h2>Ein paar meiner Arbeiten</h2>
          </header>
          <div className="gallery">
            {galerie.map((g, i) => (
              <Photo key={i} src={g.src} alt={g.alt} className="gallery__item" />
            ))}
          </div>
          <p className="gallery__more">
            Mehr auf Instagram{" "}
            <a href={person.instagramLink} target="_blank" rel="noopener" className="link">
              {person.instagram}
            </a>
          </p>
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="section container about">
          <Photo alt="Zoe bei der Arbeit" className="about__photo" />
          <div>
            <p className="eyebrow">Über mich</p>
            <h2>Schön, dass du da bist</h2>
            {ueberMich.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="section container">
          <header className="section__head">
            <p className="eyebrow">Kontakt</p>
            <h2>So findest du mich</h2>
          </header>
          <div className="contact">
            <div>
              <h3>Adresse</h3>
              <p>
                {person.salon}
                <br />
                {person.strasse}
                <br />
                {person.plz} {person.stadt}
              </p>
              <a href={kartenLink} target="_blank" rel="noopener" className="link">
                Route planen
              </a>
            </div>
            <div>
              <h3>Öffnungszeiten</h3>
              <dl className="hours">
                {oeffnungszeiten.map((o) => (
                  <div key={o.tage}>
                    <dt>{o.tage}</dt>
                    <dd>{o.zeit}</dd>
                  </div>
                ))}
              </dl>
              <p className="muted small">Termine nur nach Vereinbarung.</p>
            </div>
            <div>
              <h3>Kontakt</h3>
              <p>
                <a href={person.telefonLink}>{person.telefon}</a>
                <br />
                <a href={`mailto:${person.email.replace(/[[\]]/g, "")}`}>{person.email}</a>
                <br />
                <a href={person.instagramLink} target="_blank" rel="noopener">
                  {person.instagram}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
