export function VineDivider() {
  return (
    <div aria-hidden className="relative flex items-center justify-center py-10">
      <svg viewBox="0 0 600 40" className="w-full max-w-3xl h-10 text-[color:var(--gold)]" fill="none">
        <path
          d="M0 20 Q 75 0 150 20 T 300 20 T 450 20 T 600 20"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <g fill="currentColor" opacity="0.85">
          <path d="M150 20 q -6 -10 -16 -8 q 4 8 16 8 z" />
          <path d="M300 20 q 6 -12 18 -8 q -4 10 -18 8 z" />
          <path d="M450 20 q -6 -10 -16 -8 q 4 8 16 8 z" />
          <circle cx="75" cy="14" r="2" />
          <circle cx="525" cy="26" r="2" />
        </g>
      </svg>
    </div>
  );
}
