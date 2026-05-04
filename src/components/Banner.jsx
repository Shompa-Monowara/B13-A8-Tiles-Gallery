"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/bannerimgg.jpg",
    eyebrow: "Premium Collection · 2025",
    title: "Echoes of\nExcellence",
    description: "Discover our premium selection of tiles for your modern home.",
    buttonText: "View Details",
    buttonLink: "/all-tiles",
  },
  {
    image: "/bannerimg.png",
    eyebrow: "Luxury Living · 2025",
    title: "Timeless\nElegance",
    description: "Transform your spaces with unmatched luxury and style.",
    buttonText: "View Details",
    buttonLink: "/all-tiles",
  },
  {
    image: "/bannerimgg.png",
    eyebrow: "Design Studio · 2025",
    title: "Modern\nAesthetics",
    description: "Crafted for those who appreciate the finer details.",
    buttonText: "View Details",
    buttonLink: "/all-tiles",
  },
];

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <line x1="14" y1="9" x2="4" y2="9" stroke="#D5B471" strokeWidth="1.2" />
    <polyline
      points="8,4 3,9 8,14"
      fill="none"
      stroke="#D5B471"
      strokeWidth="1.2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <line x1="4" y1="9" x2="14" y2="9" stroke="#D5B471" strokeWidth="1.2" />
    <polyline
      points="10,4 15,9 10,14"
      fill="none"
      stroke="#D5B471"
      strokeWidth="1.2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const Banner = () => {
  return (
    <div className="w-screen max-w-full overflow-hidden relative left-1/2 right-1/2 -translate-x-1/2">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          type: "fraction",
          renderFraction: (currentClass, totalClass) =>
            `<span class="${currentClass}"></span>
             <span class="frac-sep">—</span>
             <span class="${totalClass}"></span>`,
        }}
        loop={true}
        className="h-screen w-full select-none"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Layered overlays */}
              <div className="absolute inset-0 bg-black/45 z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 60%, transparent 40%, rgba(0,0,0,0.45) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 gap-4">
                {/* Eyebrow */}
                <p className="text-[11px] tracking-[0.35em] uppercase text-[#D5B471] font-light opacity-90 font-sans">
                  {slide.eyebrow}
                </p>

                {/* Title */}
                <h1
                  className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.08em] uppercase text-[#f5f0e8] leading-tight"
                  style={{
                    textShadow: "0 2px 40px rgba(0,0,0,0.5)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {slide.title}
                </h1>

                {/* Gold separator */}
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-10 h-px bg-[#D5B471]" />
                  <div className="w-1 h-1 rounded-full bg-[#D5B471]" />
                  <div className="w-10 h-px bg-[#D5B471]" />
                </div>

                {/* Description */}
                <p className="font-sans text-sm md:text-base text-[rgba(220,210,195,0.75)] max-w-md leading-loose tracking-[0.08em] font-light">
                  {slide.description}
                </p>

                {/* CTA Button */}
                <Link href={slide.buttonLink} className="mt-2">
                  <button className="group relative overflow-hidden px-11 py-[14px] text-[11px] tracking-[0.3em] uppercase font-medium text-black bg-[#D5B471] transition-all duration-300">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-350 ease-in-out" />
                    <span className="relative z-10 font-sans">
                      {slide.buttonText}
                    </span>
                  </button>
                </Link>
              </div>

              {/* Slide counter top-left */}
              <div className="font-sans absolute top-9 left-11 z-20 text-[11px] tracking-[0.2em] uppercase text-[rgba(213,180,113,0.6)] font-light">
                Collection
              </div>

              {/* Corner deco top-right */}
              <div className="absolute top-8 right-11 z-20 w-7 h-7 border-t border-r border-[rgba(213,180,113,0.3)]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow Buttons */}
      <button className="custom-prev group absolute left-7 top-1/2 -translate-y-1/2 z-30 w-[52px] h-[52px] flex items-center justify-center border border-[rgba(213,180,113,0.25)] bg-black/30 backdrop-blur-sm hover:border-[rgba(213,180,113,0.7)] hover:bg-[rgba(213,180,113,0.12)] transition-all duration-300">
        <ArrowLeft />
      </button>
      <button className="custom-next group absolute right-7 top-1/2 -translate-y-1/2 z-30 w-[52px] h-[52px] flex items-center justify-center border border-[rgba(213,180,113,0.25)] bg-black/30 backdrop-blur-sm hover:border-[rgba(213,180,113,0.7)] hover:bg-[rgba(213,180,113,0.12)] transition-all duration-300">
        <ArrowRight />
      </button>
    </div>
  );
};

export default Banner;