export function Fireflies({ count = 18 }: { count?: number }) {
  const flies = Array.from({ length: count }, (_, i) => {
    const top = (i * 13) % 100;
    const left = (i * 17) % 100;
    const duration = 6 + ((i * 2) % 8);
    const delay = (i * 0.7) % 6;
    return (
      <span
        key={i}
        className="firefly"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
        }}
      />
    );
  });
  return <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">{flies}</div>;
}
