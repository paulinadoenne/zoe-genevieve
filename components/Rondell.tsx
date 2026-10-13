import Photo from "./Photo";

type Bild = { src: string; alt: string; titel?: string; info?: string };

// Endlos laufende Bildreihe. Die Bilder liegen zweimal hintereinander,
// damit der Übergang nahtlos ist. Das Bild unter der Maus wird größer.
export default function Rondell({ bilder }: { bilder: Bild[] }) {
  const reihe = [...bilder, ...bilder, ...bilder, ...bilder];
  return (
    <div className="rondell" aria-label="Arbeiten">
      <div className="rondell__track">
        {reihe.map((b, i) => (
          <figure key={i} className="rondell__item" aria-hidden={i >= bilder.length}>
            <div className="rondell__img">
              <Photo src={b.src} alt={b.alt} />
            </div>
            <figcaption className="caption">
              <strong>{b.titel}</strong>
              <br />
              {b.info}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
