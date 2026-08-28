"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "What time should I arrive?",
    a: "The ceremony begins at 4:00 PM. We kindly ask guests to arrive by 3:30 PM to allow time to get settled.",
  },
  {
    q: "Is transportation provided?",
    a: "Complimentary shuttles depart from the Marriott Mena House at 3:00 PM, with return service running until midnight.",
  },
  {
    q: "Are children welcome?",
    a: "While we love your little ones, this will be an adults-only celebration so everyone can relax and enjoy the evening.",
  },
  {
    q: "What should I wear?",
    a: "Garden formal. We'd love for you to draw from our chosen palette shown in the details section, and kindly ask guests to avoid white.",
  },
  {
    q: "Can I bring a plus one?",
    a: "Please check your invitation — plus ones are noted by name. If you're unsure, just reach out to us directly.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-parchment-deep py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <p className="eyebrow text-gold mb-3">Questions</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Frequently Asked
          </h2>
        </div>

        <ul className="divide-y divide-ink/15 border-t border-b border-ink/15">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-utility text-xs text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg md:text-xl text-ink">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 font-utility text-xl text-ink/50 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-ink/70 leading-relaxed pb-6 pl-9 pr-8">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
