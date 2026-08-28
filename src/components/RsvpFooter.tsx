import Countdown from "./Countdown";

export default function RsvpFooter() {
  return (
    <section
      id="rsvp"
      className="grain relative bg-moss-deep py-28 px-6 text-center border-t border-cream/10"
    >
      <div className="relative z-10 mx-auto max-w-xl">
        <p className="eyebrow text-gold-soft mb-4">Our Forever Begins In</p>
        <Countdown />

        <h2 className="font-script italic text-3xl md:text-4xl text-cream mt-16 mb-4">
          We can&rsquo;t wait to celebrate with you
        </h2>
        <p className="font-body text-cream/70 mb-8">
          Kindly respond by August 9, 2027
        </p>
        <a
          href="mailto:layla.omar.wedding@example.com?subject=RSVP"
          className="inline-block font-utility text-xs uppercase tracking-[0.25em] bg-gold text-moss-deep px-8 py-4 hover:bg-gold-soft transition-colors"
        >
          RSVP Now
        </a>
      </div>

      <footer className="relative z-10 mt-24 pt-8 border-t border-cream/10">
        <p className="font-script italic text-2xl text-cream/80">L &amp; O</p>
        <p className="font-utility text-[0.65rem] uppercase tracking-[0.25em] text-cream/40 mt-3">
          October 9, 2027 · Giza, Egypt
        </p>
      </footer>
    </section>
  );
}
