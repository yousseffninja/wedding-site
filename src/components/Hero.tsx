// Deterministic scattered wildflower dots for the hero meadow illustration.
function flowerDots(seed: number, count: number) {
  const dots = [];
  let x = seed;
  for (let i = 0; i < count; i++) {
    x = (x * 9301 + 49297) % 233280;
    const rx = x / 233280;
    x = (x * 9301 + 49297) % 233280;
    const ry = x / 233280;
    x = (x * 9301 + 49297) % 233280;
    const r = 2 + (x / 233280) * 3.2;
    dots.push({ cx: rx * 1440, cy: 640 + ry * 220, r });
  }
  return dots;
}

export default function Hero() {
  const dots = flowerDots(17, 90);

  return (
    <section
      id="top"
      className="grain relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-moss-deep text-cream"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a5233" />
            <stop offset="55%" stopColor="#333f26" />
            <stop offset="100%" stopColor="#232b19" />
          </linearGradient>
          <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5c6a3e" />
            <stop offset="100%" stopColor="#404c2b" />
          </linearGradient>
          <linearGradient id="hillNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3c4726" />
            <stop offset="100%" stopColor="#232b19" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#sky)" />
        <path
          d="M0,560 C260,500 420,620 700,560 C980,500 1180,600 1440,540 L1440,900 L0,900 Z"
          fill="url(#hillFar)"
          opacity="0.65"
        />
        <path
          d="M0,660 C220,610 480,700 760,650 C1040,600 1240,690 1440,640 L1440,900 L0,900 Z"
          fill="url(#hillNear)"
        />
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill={i % 5 === 0 ? "#d3b47f" : "#f4efe2"}
            opacity={0.5 + (i % 3) * 0.15}
          />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="eyebrow text-gold-soft mb-6">The Wedding Of</p>
        <h1 className="font-script italic text-[3.6rem] sm:text-[5.5rem] md:text-[7rem] leading-[0.95] text-cream">
          Layla <span className="text-gold-soft">&amp;</span> Omar
        </h1>
        <div className="mt-8 flex items-center gap-4 text-cream/85 font-utility text-xs sm:text-sm uppercase tracking-[0.25em]">
          <span>October 9, 2027</span>
          <span className="w-1 h-1 rounded-full bg-gold-soft" />
          <span>Giza, Egypt</span>
        </div>
      </div>

      <a
        href="#invitation"
        className="relative z-10 mt-16 flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition-colors"
        aria-label="Scroll to invitation"
      >
        <span className="font-utility text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="block w-px h-10 bg-cream/50" />
      </a>
    </section>
  );
}
