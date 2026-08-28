"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#story", label: "Our Story" },
  { href: "#details", label: "Details" },
  { href: "#venue", label: "Venue" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className={`font-display italic text-lg tracking-wide transition-colors ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          L &amp; O
        </a>
        <ul
          className={`hidden md:flex items-center gap-9 font-utility text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${
            scrolled ? "text-ink/80" : "text-cream/90"
          }`}
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#rsvp"
          className={`font-utility text-[0.7rem] uppercase tracking-[0.2em] border px-4 py-2 transition-colors ${
            scrolled
              ? "border-ink/30 text-ink hover:bg-ink hover:text-parchment"
              : "border-cream/60 text-cream hover:bg-cream hover:text-moss-deep"
          }`}
        >
          RSVP
        </a>
      </nav>
    </header>
  );
}
