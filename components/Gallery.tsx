import Photo from "./Photo";

type Bild = { src: string; alt: string };

// Arbeiten als Editorial Layout: große Bilder, Paare, versetzte und
// eingerückte Bilder im Wechsel, jeweils mit kleiner Bildunterschrift.
export default function Gallery({ bilder }: { bilder: Bild[] }) {
  return (
    <div className="ed" aria-label="Arbeiten">
      {bilder.map((b, i) => (
        <figure key={b.src} className="ed__item">
          <div className="ed__img">
            <Photo src={b.src} alt={b.alt} />
          </div>
          <figcaption>
            <span>{String(i + 1).padStart(2, "0")}</span>
            {b.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
