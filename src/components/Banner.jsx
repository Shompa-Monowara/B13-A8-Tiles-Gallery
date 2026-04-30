"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Button } from "@heroui/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/bannerimgg.jpg",
    title: "Echoes of Excellence",
    description: "Discover our premium selection of tiles for your modern home.",
    buttonText: "Browse Now",
    buttonLink: "/all-tiles",
  },
  {
    image: "/bannerimg.png",
    title: "Timeless Elegance",
    description: "Transform your spaces with unmatched luxury and style.",
    buttonText: "Browse Now",
    buttonLink: "/all-tiles",
  },
  {
    image: "/bannerimgg.png",
    title: "Modern Aesthetics",
    description: "Crafted for those who appreciate the finer details.",
    buttonText: "Browse Now",
    buttonLink: "/all-tiles",
  },
];

const Banner = () => {
  return (
    <div className="w-screen max-w-full overflow-hidden shadow-2xl relative left-1/2 right-1/2 -translate-x-1/2">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true}
        pagination={{
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              ' text-base font-normal text-white"></span>' +
              '<span class="text-white/50 mx-2">-</span>' +
              '<span class="' +
              totalClass +
              ' text-base font-normal text-white/50"></span>'
            );
          },
        }}
        loop={true}
        className="h-screen w-full select-none"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              {/* Cinematic Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />

              {/* Central Content Container */}
              <div className="relative z-20 flex flex-col items-center justify-center text-white text-center px-6">
                <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-4 max-w-4xl drop-shadow-md animate-fade-in">
                  {slide.title}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-normal leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex gap-4 flex-col sm:flex-row">
                  <Link href={slide.buttonLink}>
                    <Button
                      radius="none"
                      className="bg-white text-black font-semibold tracking-wider px-8 py-6 hover:bg-gray-200 transition-colors duration-300"
                    >
                      {slide.buttonText}
                    </Button>
                  </Link>

                  <Link href="/signin">
                    <Button
                      radius="none"
                      variant="bordered"
                      className="text-white border-white/30 hover:bg-white hover:text-black font-semibold tracking-wider px-8 py-6 transition-all duration-300"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Pagination */}
      <style jsx global>{`
        .swiper-pagination-fraction {
          bottom: 2.5rem !important;
          right: 2.5rem !important;
          left: auto !important;
          width: auto !important;
          z-index: 20;
          letter-spacing: 0.1em;
        }

        .swiper-pagination-current {
          color: #ffffff;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Banner;