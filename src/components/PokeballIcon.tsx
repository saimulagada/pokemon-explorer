export default function PokeballIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="white" stroke="#1e293b" strokeWidth="2.5" />
      <path
        d="M2 24a22 22 0 0 1 44 0z"
        fill="#ef4444"
        stroke="#1e293b"
        strokeWidth="2.5"
      />
      <rect x="2" y="22.5" width="44" height="3" fill="#1e293b" />
      <circle cx="24" cy="24" r="7" fill="white" stroke="#1e293b" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="3" fill="white" stroke="#1e293b" strokeWidth="2" />
    </svg>
  );
}
