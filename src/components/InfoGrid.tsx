const PALETTE = ["#EAE2CF", "#B28A4C", "#6B7748", "#34291D", "#B97F6E"];

export default function InfoGrid() {
  return (
    <section className="bg-moss-deep py-24 px-6 border-t border-cream/10">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-center text-gold-soft mb-16">
          Additional Information
        </p>
        <div className="grid md:grid-cols-3 gap-14 text-center">
          <div>
            <h3 className="font-script italic text-2xl text-cream mb-4">
              Ceremony
            </h3>
            <p className="font-body text-cream/75 leading-relaxed">
              The ceremony begins at 4:00 PM sharp. We kindly ask guests to
              arrive by 3:30 PM to get settled before Yasmin walks down the
              aisle.
            </p>
          </div>
          <div>
            <h3 className="font-script italic text-2xl text-cream mb-4">
              Attire
            </h3>
            <p className="font-body text-cream/75 leading-relaxed mb-5">
              Garden formal. We kindly ask guests to avoid white, and would
              love for you to draw from our chosen palette.
            </p>
            <div className="flex justify-center gap-2">
              {PALETTE.map((c) => (
                <span
                  key={c}
                  className="w-7 h-7 rounded-full border border-cream/30"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-script italic text-2xl text-cream mb-4">
              Transport
            </h3>
            <p className="font-body text-cream/75 leading-relaxed">
              Complimentary shuttles depart from the Marriott Mena House at
              3:00 PM, with return service running until midnight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
