import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-[#3F3B36] border-b border-white/15 text-sm tracking-wider uppercase font-medium text-white py-3.5 w-full">
      {/* কন্টেইনারটিকে max-w-7xl-এ বেঁধে দেওয়া হয়েছে যাতে এটি সেন্টারে থাকে */}
      <div className="max-w-7xl mx-auto flex items-center px-4 md:px-8 w-full">
        {/* Marquee-র বাইরে থাকা বাটন */}
        <button className="bg-[#6D1731] text-white text-[14px] px-3 py-2 text-xs font-bold tracking-wider hover:bg-[#8B1E3F] transition-colors shrink-0 rounded-md">
          New Arrivals:
        </button>

        {/* Marquee সেকশন, যা শুধু বাকি টেক্সটগুলো স্ক্রোল করবে */}
        <Marquee 
          gradient={false} 
          speed={50}
          className="flex-1 ml-6"
        >
          <span className="mx-8">
            Carrara Marble Polish
          </span>
          <span className="text-[#D5B471] mx-6">|</span>
          <span className="mx-8">
            Weekly Feature: Modern Geometric Patterns
          </span>
          <span className="text-[#D5B471] mx-6">|</span>
          <span className="mx-8">
            Join the Community & Explore Exclusive Collections
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSection;