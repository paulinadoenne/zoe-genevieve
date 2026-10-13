import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Logo from "@/components/Logo";
import {
  person,
  oeffnungszeiten,
  leistungen,
  galerie,
  ueberMich,
  kundenstimme,
  steckbrief,
} from "@/lib/content";

const adresse = `${person.strasse}, ${person.plz} ${person.stadt}`;
const kartenLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  [person.salon, adresse].filter(Boolean).join(" ")
)}`;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero: großer Name über dem Portrait */}
        <section className="hero dark">
          <div className="hero__stage">
            <Photo alt="Portrait von Zoe" className="hero__photo" />
            <h1 className="hero__title">
              <Logo />
            </h1>
          </div>
          <div className="hero__meta container">
            <span>{person.beruf}</span>
            <span className="hero__rule" aria-hidden />
            <span>
              {person.stadt} · Sankt-Apern-Straße
            </span>
          </div>
        </section>

        {/* Intro mit Fotostreifen */}
        <section className="intro cayenne">
          <div className="container intro__text">
            <p className="eyebrow">Über Zoe</p>
            <h2 className="mix mix--center">
              Ich schneide <em>Haare,</em> die zu deinem Leben passen und{" "}
              <em>auch nach dem Föhnen</em> noch sitzen
            </h2>
            <a href="#ueber-mich" className="btn btn--light btn--small">
              Mehr über mich
            </a>
          </div>
          <div className="strip">
            {galerie.slice(0, 5).map((g, i) => (
              <Photo key={i} src={g.src} alt={g.alt} className="strip__item" />
            ))}
          </div>
          <p className="outline-word" aria-hidden>
            Zoe Genevieve Zoe Genevieve
          </p>
        </section>

        {/* Arbeiten */}
        <section id="galerie" className="works light">
          <div className="container works__inner">
            <div>
              <p className="eyebrow">Meine Arbeiten</p>
              <h2 className="mix">
                Haare, die <em>im Licht</em> und <em>im Alltag</em> wirken
              </h2>
              <p className="muted">
                Jeder Kopf ist anders. Deshalb gibt es bei mir keine Frisur nach
                Schema F, sondern einen Schnitt, der zu deinem Haar, deinem
                Gesicht und deiner Routine passt.
              </p>
              <a
                href={person.instagramLink}
                target="_blank"
                rel="noopener"
                className="btn btn--small"
              >
                Mehr auf Instagram
              </a>
            </div>
            <div className="works__stack">
              {galerie.slice(3, 6).map((g, i) => (
                <Photo key={i} src={g.src} alt={g.alt} className="works__item" />
              ))}
            </div>
          </div>
        </section>

        {/* Statement mit Outline Wiederholung */}
        <section className="statement dark">
          <div className="container statement__inner">
            <p className="eyebrow statement__eyebrow">
              Für alle, die beim Friseur
              <br />
              wirklich gehört werden wollen
            </p>
            <p className="statement__words" aria-label="Dein Haar, deine Regeln.">
              <span>Dein Haar,</span>
              <span className="is-outline">Dein Haar,</span>
              <span>Deine</span>
              <span>Regeln.</span>
            </p>
          </div>
        </section>

        {/* Leistungen und Preise */}
        <section id="leistungen" className="services light">
          <div className="container services__intro">
            <p className="eyebrow">Leistungen und Preise</p>
            <h2 className="mix mix--center">
              Ehrliche Preise, <em>klare</em> Beratung und keine{" "}
              <em>Überraschungen</em> an der Kasse
            </h2>
            <p className="muted">
              Alle Preise inklusive Beratung. Der genaue Preis richtet sich nach
              Haarlänge und Aufwand, ich sage ihn dir vorher.
            </p>
            <a href="#termin" className="btn btn--small">
              Termin anfragen
            </a>
          </div>
        </section>

        <nav className="service-index dark" aria-label="Kategorien">
          {leistungen.map((k, i) => (
            <a key={k.titel} href={`#leistung-${i}`} className="service-index__row">
              <span>Leistung {i + 1}</span>
              <span className="service-index__name">{k.titel}</span>
              <span>{k.ab}</span>
            </a>
          ))}
        </nav>

        {leistungen.map((k, i) => (
          <section key={k.titel} id={`leistung-${i}`} className="service">
            <div className="service__feature dark">
              <div className="container service__feature-inner">
                <div>
                  <h3 className="mix mix--big">
                    {k.titel} <em>{k.akzent}</em>
                  </h3>
                  <p className="muted">{k.text}</p>
                </div>
                <Photo alt={`${k.titel} bei Zoe`} className="service__photo" />
              </div>
            </div>
            <div className="carte light">
              <div className="container">
                <div className="carte__head">
                  <span>À la carte</span>
                  <span>{k.titel}</span>
                </div>
                <ul>
                  {k.leistungen.map((l, j) => (
                    <li key={j}>
                      <span className="carte__name">
                        {l.name}
                        {l.info && <em> {l.info}</em>}
                      </span>
                      <span className="carte__price">{l.preis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* Termin */}
        <section id="termin" className="booking cayenne">
          <Photo alt="Detail Schnitt" className="booking__float booking__float--1" />
          <Photo alt="Detail Farbe" className="booking__float booking__float--2" />
          <Photo alt="Detail Styling" className="booking__float booking__float--3" />
          <div className="container booking__inner">
            <p className="booking__words">
              Keine Frisur
              <br />
              von der
              <br />
              Stange
            </p>
            <p className="booking__text">
              Ich arbeite auf Stuhlmiete, du buchst also direkt bei mir. Schreib
              mir kurz, was du dir vorstellst, dann plane ich genug Zeit für dich
              ein.
            </p>
            <div className="booking__actions">
              {person.buchungsLink && (
                <a href={person.buchungsLink} className="btn btn--light" target="_blank" rel="noopener">
                  Online buchen
                </a>
              )}
              <a href={person.whatsappLink} className="btn btn--light" target="_blank" rel="noopener">
                Per WhatsApp anfragen
              </a>
              <a href={person.telefonLink} className="btn btn--outline-light">
                Anrufen · {person.telefon}
              </a>
            </div>
          </div>
        </section>

        {/* Kundenstimme */}
        <section className="quote dark">
          <figure className="quote__card">
            <Photo alt="Kundin" className="quote__photo" />
            <blockquote>{kundenstimme.zitat}</blockquote>
            <figcaption>{kundenstimme.name}</figcaption>
          </figure>
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="about light">
          <div className="container">
            <p className="eyebrow eyebrow--center">Über mich</p>
            <h2 className="mix mix--center">
              Schön, dass <em>du</em> da bist
            </h2>
            <div className="about__inner">
              <div className="about__photos">
                <Photo alt="Zoe bei der Arbeit" className="about__photo" />
                <Photo alt="Zoe im Salon" className="about__polaroid" />
              </div>
              <div className="about__text">
                {ueberMich.map((p, i) => (
                  <p key={i}>{p}</p>
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
        <section id="kontakt" className="contact dark">
          <div className="container">
            <p className="eyebrow">Kontakt</p>
            <h2 className="mix">
              So <em>findest</em> du mich
            </h2>
            <div className="contact__grid">
              <div>
                <h3>Adresse</h3>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
