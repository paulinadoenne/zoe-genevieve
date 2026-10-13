// Vollflächiges Hintergrundbild für einen Screen.
export default function ScreenBg({ src, pos = "50% 50%" }: { src: string; pos?: string }) {
  return (
    <div className="screen-bg" aria-hidden>
      <img src={src} alt="" loading="lazy" style={{ objectPosition: pos }} />
    </div>
  );
}
