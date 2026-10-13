// Vollflächiges Hintergrundbild für einen Screen, optional in Schwarzweiß.
export default function ScreenBg({
  src,
  pos = "50% 50%",
  mono = false,
}: {
  src: string;
  pos?: string;
  mono?: boolean;
}) {
  return (
    <div className={`screen-bg${mono ? " screen-bg--mono" : ""}`} aria-hidden>
      <img src={src} alt="" loading="lazy" style={{ objectPosition: pos }} />
    </div>
  );
}
