// Sticker im Stil von Zoes Merch: weißer Rand, leicht gedreht, mit Schatten.
type Props = {
  form: "circle" | "arch" | "card" | "ticket";
  farbe: "cayenne" | "cocoa" | "glass" | "cream" | "peach";
  drehung?: number;
  className?: string;
  children: React.ReactNode;
};

export default function Sticker({ form, farbe, drehung = 0, className = "", children }: Props) {
  return (
    <div
      className={`sticker sticker--${form} sticker--${farbe} ${className}`}
      style={{ "--r": `${drehung}deg` } as React.CSSProperties}
      aria-hidden
    >
      {children}
    </div>
  );
}
