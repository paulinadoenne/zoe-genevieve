// Bild mit ruhigem Platzhalter, solange noch kein Foto hinterlegt ist.
export default function Photo({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (src) {
    return <img src={src} alt={alt} className={`photo ${className}`} loading="lazy" />;
  }
  return (
    <div className={`photo photo--empty ${className}`} role="img" aria-label={alt}>
      <span>{alt}</span>
    </div>
  );
}
