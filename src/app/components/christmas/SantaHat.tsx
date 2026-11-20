/** Pose un bonnet de Noël sur le coin d'un logo. Invisible hors période de fêtes. */
export default function SantaHat({ children }: { children: React.ReactNode }) {
  return (
    <span className="xmas-hat-wrap">
      {children}
      <svg
        className="xmas-hat xmas-only"
        viewBox="0 0 100 90"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 72 C14 40 34 10 70 8 C58 22 66 38 88 60 Z"
          fill="#c0261b"
        />
        <path
          d="M12 72 C16 50 30 28 52 16 C42 34 44 52 60 66 Z"
          fill="#a11d14"
          opacity="0.55"
        />
        <rect x="6" y="58" width="90" height="22" rx="11" fill="#fff6ea" />
        <circle cx="72" cy="12" r="10" fill="#fff6ea" />
      </svg>
    </span>
  );
}
