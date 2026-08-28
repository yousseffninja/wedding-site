"use client";

import { useEffect, useRef } from "react";

const MILESTONES = [
  {
    year: "2019",
    title: "Where our story began",
    text: "A mutual friend's gathering in Cairo a quiet hello that turned into hours of conversation and an unexpected spark.",
  },
  {
    year: "2021",
    title: "Small adventures, big love",
    text: "Weekend trips to Dahab, long walks along the Nile, and quiet mornings over coffee. Every moment deepened the bond.",
  },
  {
    year: "2023",
    title: "The question, at sunset",
    text: "Omar asked, overlooking the Giza skyline as the sky turned gold. Yasmin said yes before he finished the sentence.",
  },
  {
    year: "2027",
    title: "Happily ever starts",
    text: "Now they're ready to say 'I do', surrounded by the family and friends who shaped their story.",
  },
];

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const section = sectionRef.current;
    if (!path || !section) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const progressed = Math.min(Math.max(vh - rect.top, 0), total);
      const ratio = Math.min(progressed / total, 1);
      path.style.strokeDashoffset = `${length * (1 - ratio)}`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".milestone");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("milestone-in-view");
        });
      },
      { threshold: 0.35 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative bg-parchment-deep py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <p className="eyebrow text-gold mb-3">Memory Lane</p>
          <h2 className="underline-flourish inline-block font-display text-3xl md:text-4xl text-ink">
            Our Story
          </h2>
        </div>

        <div className="relative">
          {/* Growing vine */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-16 hidden md:block"
            viewBox="0 0 64 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              d="M32,0 C10,80 54,160 32,240 C10,320 54,400 32,480 C10,560 54,640 32,720 C10,800 54,880 32,1000"
              fill="none"
              stroke="#B28A4C"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {/* Mobile vine */}
          <svg
            className="absolute left-4 top-0 h-full w-4 md:hidden"
            viewBox="0 0 16 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M8,0 L8,1000"
              fill="none"
              stroke="#B28A4C"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
          </svg>

          <ol className="relative flex flex-col gap-16 md:gap-24">
            {MILESTONES.map((m, i) => (
              <li
                key={m.year}
                className={`milestone pl-12 md:pl-0 md:flex md:items-center ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`md:w-[45%] ${
                    i % 2 === 0 ? "md:text-right md:pr-14" : "md:pl-14"
                  }`}
                >
                  <span className="font-script italic text-3xl text-gold">
                    {m.year}
                  </span>
                  <h3 className="font-display text-xl text-ink mt-2 mb-2">
                    {m.title}
                  </h3>
                  <p className="font-body text-ink/75 leading-relaxed">
                    {m.text}
                  </p>
                </div>
                <span className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-gold ring-4 ring-parchment-deep" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
