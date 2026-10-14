// Schlichte Linien Icons für den Kontaktbereich.
const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconWhatsApp() {
  return (
    <svg {...base}>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.1.7l-.5.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.6.8-.6.3-1.6.4-3-.2a8.3 8.3 0 0 1-4.2-4.2c-.6-1.4-.5-2.4-.2-3z" />
    </svg>
  );
}

export function IconMail() {
  return (
    <svg {...base}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6l8.5 7 8.5-7" />
    </svg>
  );
}

export function IconInstagram() {
  return (
    <svg {...base}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
