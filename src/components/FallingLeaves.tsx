const LEAVES = ["🍃", "🍂", "🌿", "🍃", "🍂"];

export function FallingLeaves() {
  const leaves = Array.from({ length: 14 }, (_, i) => {
    const left = (i * 7.3) % 100;
    const duration = 12 + ((i * 3) % 10);
    const delay = (i * 1.7) % 14;
    const size = 1.2 + ((i * 0.3) % 1.4);
    const emoji = LEAVES[i % LEAVES.length];
    return (
      <span
        key={i}
        className="leaf"
        style={{
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
          fontSize: `${size}rem`,
        }}
      >
        {emoji}
      </span>
    );
  });
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-[1]">{leaves}</div>;
}
