// Vollflächiges Hintergrundbild für einen Screen. Mit "variante" wird ein
// anderer Ausschnitt gewählt, solange es noch nicht für jeden Bereich ein
// eigenes Foto gibt.
export default function ScreenBg({
  src,
  variante,
}: {
  src: string;
  variante: "tuer" | "haar" | "stufen";
}) {
  return (
    <div className={`screen-bg screen-bg--${variante}`} aria-hidden>
      <img src={src} alt="" loading="lazy" />
    </div>
  );
}
