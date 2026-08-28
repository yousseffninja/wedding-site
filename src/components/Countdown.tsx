"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2027-10-09T16:00:00+02:00").getTime();

function getRemaining() {
  const diff = Math.max(TARGET - Date.now(), 0);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(
    null
  );

  useEffect(() => {
    const tick = () => setTime(getRemaining());
    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, []);

  const units: [string, number][] = [
    ["Days", time?.days ?? 0],
    ["Hours", time?.hours ?? 0],
    ["Minutes", time?.minutes ?? 0],
    ["Seconds", time?.seconds ?? 0],
  ];

  return (
    <div
      className="flex items-start justify-center gap-6 sm:gap-10"
      suppressHydrationWarning
    >
      {units.map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="font-display text-4xl sm:text-5xl text-cream tabular-nums">
            {time ? String(value).padStart(2, "0") : "--"}
          </span>
          <span className="mt-2 font-utility text-[0.65rem] uppercase tracking-[0.25em] text-cream/60">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
