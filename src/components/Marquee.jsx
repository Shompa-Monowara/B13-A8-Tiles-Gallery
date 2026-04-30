import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <Marquee 
      gradient={false} 
      speed={50} 
      className="bg-[#3F3B36] text-white py-3 border-b border-white/15 text-sm tracking-wider uppercase font-medium"
    >
      <span className="mx-8">New Arrivals: Carrara Marble Polish</span>
      <span className="text-[#38BDF8] mx-2">|</span>
      <span className="mx-8">Weekly Feature: Modern Geometric Patterns</span>
      <span className="text-[#38BDF8] mx-2">|</span>
      <span className="mx-8">Join the Community & Explore Exclusive Collections</span>
    </Marquee>
  );
};

export default MarqueeSection;