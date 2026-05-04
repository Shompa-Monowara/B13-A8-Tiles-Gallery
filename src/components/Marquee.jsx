"use client";
import Marquee from "react-fast-marquee";

const items = [
  { label: "New →", text: "Carrara Marble Polish" },
  null, // separator
  { text: "Weekly Feature: Modern Geometric Patterns" },
  null,
  { text: "Join the Community & Explore Exclusive Collections" },
  null,
];

const MarqueeSection = () => {
  return (
    <div
      className="w-full overflow-hidden border-b border-white/[0.08] flex items-stretch bg-[#2B2720] h-[46px] font-sans"
    >
      {/* Badge with arrow tail */}
      <div className="relative flex items-center gap-2 shrink-0 px-4 pr-6 bg-[#6D1731]">
        {/* Pulsing dot */}
        <span className="w-[5px] h-[5px] rounded-full bg-[#D5B471] animate-pulse shrink-0" />
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white whitespace-nowrap">
          New Arrivals
        </span>
        {/* Arrow tail */}
        <span
          className="absolute -right-[10px] top-0 bottom-0 w-5 z-10 bg-[#6D1731] [clip-path:polygon(0_0,60%_0,100%_50%,60%_100%,0_100%)]"
        />
      </div>

      {/* Marquee */}
      <div
        className="flex-1 overflow-hidden flex items-center pl-7 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        <Marquee gradient={false} speed={50}>
          {items.map((item, i) =>
            item === null ? (
              <span
                key={i}
                className="inline-block w-px mx-0 shrink-0 h-[14px] bg-[rgba(213,180,113,0.35)]"
              />
            ) : (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-8 text-[12px] tracking-[0.14em] uppercase font-light text-white/70 whitespace-nowrap"
              >
                {item.label && (
                  <strong className="text-[#D5B471] font-medium not-italic">{item.label}&nbsp;</strong>
                )}
                {item.text}
              </span>
            )
          )}
        </Marquee>
      </div>

      {/* View All CTA */}
      <div className="group flex items-center gap-1.5 px-5 border-l border-white/[0.08] shrink-0 cursor-pointer">
        <span className="text-[11px] tracking-[0.15em] uppercase font-light text-white/40 group-hover:text-[#D5B471] transition-colors duration-200">
          View All
        </span>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className="group-hover:translate-x-0.5 transition-transform duration-200"
        >
          <line x1="2" y1="6" x2="10" y2="6" stroke="rgba(213,180,113,0.6)" strokeWidth="1" />
          <polyline
            points="7,3 10,6 7,9" fill="none"
            stroke="rgba(213,180,113,0.6)" strokeWidth="1"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default MarqueeSection;