import ZoeScript from "./ZoeScript";

// Wortmarke: "zoe" in ihrer Handschrift, darunter Genevieve.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <ZoeScript className="logo__script" />
      <span className="logo__name">Genevieve</span>
      <span className="sr-only">Zoe Genevieve</span>
    </span>
  );
}
