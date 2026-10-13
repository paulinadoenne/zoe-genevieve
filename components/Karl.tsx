// Karl, Zoes Dackel, als flache Illustration im Stil der Sticker.
export default function Karl({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 210 90" aria-hidden>
      <path d="M48 42 Q26 32 10 16" stroke="#8b5a3b" strokeWidth="6" strokeLinecap="round" fill="none" />
      <rect x="52" y="58" width="9" height="24" rx="3" fill="#6b4128" />
      <rect x="128" y="58" width="9" height="24" rx="3" fill="#6b4128" />
      <rect x="40" y="30" width="114" height="34" rx="17" fill="#8b5a3b" />
      <rect x="66" y="58" width="9" height="24" rx="3" fill="#8b5a3b" />
      <rect x="142" y="58" width="9" height="24" rx="3" fill="#8b5a3b" />
      <path d="M138 38 L160 18 L172 38 L152 60 Z" fill="#8b5a3b" />
      <ellipse cx="168" cy="28" rx="22" ry="16" fill="#8b5a3b" />
      <ellipse cx="188" cy="34" rx="16" ry="9" fill="#8b5a3b" />
      <ellipse cx="160" cy="34" rx="8" ry="15" transform="rotate(-12 160 34)" fill="#5a3423" />
      <circle cx="174" cy="24" r="2.4" fill="#1d0f0a" />
      <circle cx="202" cy="32" r="3.4" fill="#1d0f0a" />
      <path d="M193 40 Q197 43 200 40" stroke="#1d0f0a" strokeWidth="1.4" fill="none" />
      <path d="M146 30 L157 54" stroke="#c24e0c" strokeWidth="5" strokeLinecap="round" />
      <circle cx="155" cy="59" r="3.2" fill="#c9a04f" />
    </svg>
  );
}
