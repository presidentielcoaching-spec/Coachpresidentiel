export function SankofaLogo({ size = 36 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex items-center justify-center rounded-full"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 45deg, #f7e7a4, #cd7f32, #1e3a8a, #d946ef, #f1c34a)",
          padding: 2,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <svg
        viewBox="0 0 48 48"
        width={size * 0.6}
        height={size * 0.6}
        fill="none"
      >
        <path
          d="M24 6c8 0 16 6 16 16 0 7-5 12-12 12-5 0-9-3-10-7"
          stroke="url(#g1)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M20 23l-7 5 7 5"
          stroke="url(#g1)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="20" r="2.4" fill="#f1c34a" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#f7e7a4" />
            <stop offset="0.6" stopColor="#f1c34a" />
            <stop offset="1" stopColor="#cd7f32" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}
