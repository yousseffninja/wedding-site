export default function Venue() {
  return (
    <section id="venue" className="bg-parchment py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="eyebrow text-gold mb-3">Where To Be</p>
          <h2 className="font-script italic text-4xl md:text-5xl text-ink">
            Nour El Nil Garden
          </h2>
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ink/50 mt-3">
            Al Haram Road, Giza, Egypt
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] border border-gold/40 p-2">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full"
              aria-hidden="true"
            >
              <rect width="400" height="300" fill="#EAE2CF" />
              <path
                d="M0,220 C60,190 120,240 200,210 C280,180 340,220 400,200 L400,300 L0,300 Z"
                fill="#6B7748"
                opacity="0.5"
              />
              <path
                d="M0,250 C80,230 160,270 240,245 C320,220 360,250 400,235 L400,300 L0,300 Z"
                fill="#333F26"
                opacity="0.6"
              />
              <rect x="150" y="120" width="100" height="70" fill="#B28A4C" opacity="0.8" />
              <path d="M140,120 L200,90 L260,120 Z" fill="#34291D" />
              {Array.from({ length: 14 }).map((_, i) => (
                <circle
                  key={i}
                  cx={30 + ((i * 27) % 360)}
                  cy={210 + ((i * 53) % 70)}
                  r={3}
                  fill="#B97F6E"
                />
              ))}
              <circle cx="200" cy="150" r="6" fill="#34291D" />
              <path
                d="M200,150 m0,-14 a14,14 0 1,1 0,28 a14,14 0 1,1 0,-28"
                fill="none"
                stroke="#34291D"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div>
            <p className="font-body text-lg text-ink/80 leading-relaxed mb-6">
              Set along the riverbank with views of the pyramids at dusk,
              Nour El Nil Garden is our favourite spot in the city — the
              same place we had our first date. Complimentary valet parking
              is available on-site; signs and attendants will guide you upon
              arrival.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Giza+Egypt"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-utility text-xs uppercase tracking-[0.2em] border border-ink/30 px-6 py-3 hover:bg-ink hover:text-parchment transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
