const SCHEDULE = [
  { time: "4:00 PM", event: "Ceremony" },
  { time: "4:30 PM", event: "Cocktail Hour" },
  { time: "5:15 PM", event: "Photos" },
  { time: "6:30 PM", event: "Dinner" },
  { time: "8:00 PM", event: "Cake Cutting" },
  { time: "8:30 PM", event: "Dancing" },
];

export default function Itinerary() {
  return (
    <section id="details" className="bg-moss-deep py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="eyebrow text-gold-soft mb-3">The Day Of</p>
          <h2 className="font-display text-3xl md:text-4xl text-cream">
            Itinerary
          </h2>
        </div>

        <div className="relative flex bg-cream text-ink px-8 py-10 sm:px-14 sm:py-14 border border-gold/40">
          <span className="absolute inset-2 border border-gold/25 pointer-events-none" />
          <span
            className="hidden sm:block font-script italic text-3xl text-gold/70 mr-8 self-center"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Itinerary
          </span>
          <ul className="flex-1 divide-y divide-ink/10">
            {SCHEDULE.map((s) => (
              <li
                key={s.event}
                className="flex items-baseline justify-between py-4 first:pt-0 last:pb-0"
              >
                <span className="font-utility text-xs uppercase tracking-[0.2em] text-ink/50">
                  {s.time}
                </span>
                <span className="font-display text-lg sm:text-xl text-ink">
                  {s.event}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
