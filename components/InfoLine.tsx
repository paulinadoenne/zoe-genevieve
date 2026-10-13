import LocalTime from "./LocalTime";

// Kleine Infozeile: Uhrzeit, Ort und Koordinaten des Salons.
export default function InfoLine({ className = "" }: { className?: string }) {
  return (
    <p className={`infoline ${className}`}>
      <LocalTime />
      <span>Köln</span>
      <span>50°56′22″N 6°56′38″E</span>
    </p>
  );
}
