"use client";
import React, { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import ClipLoader from "react-spinners/ClipLoader";

const FeaturedTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTiles = async () => {
      setLoading(true);
      try {
        await new Promise((r) => setTimeout(r, 1000));
        const res = await fetch("/data.json");
        const data = await res.json();
        setTiles(data.slice(0, 4));
      } catch (err) {
        console.error("Error fetching tiles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTiles();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 mb-16 font-sans">
      
      <div className="flex items-end justify-between mb-14 gap-4">
        <div className="space-y-3">
          
          <div className="flex items-center gap-3">
            <span className="block w-6 h-px bg-[#D5B471]" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#D5B471]">
              Handpicked Selection
            </p>
          </div>
         
          <h2 className="text-[44px] md:text-[52px] font-light tracking-[0.03em] leading-[1.1] text-[#2a0e17] font-serif">
            Featured <em className="not-italic text-[#7a1e2d]">Tiles</em>
          </h2>
        </div>

       
        <Link
          href="/all-tiles"
          className="group flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#7a1e2d]/50 hover:text-[#7a1e2d] transition-colors duration-300 whitespace-nowrap mb-2"
        >
          View All
          <span className="flex items-center justify-center w-7 h-7 border border-[#7a1e2d]/20 group-hover:border-[#7a1e2d]/60 group-hover:bg-[#7a1e2d]/5 transition-all duration-300">
            <HiArrowRight className="w-3 h-3" />
          </span>
        </Link>
      </div>

      
      <div className="w-full h-px bg-gradient-to-r from-[#D5B471]/50 via-[#7a1e2d]/10 to-transparent mb-14 -mt-6" />

     
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <ClipLoader color="#7a1e2d" size={40} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <FeaturedCard key={tile.id} tile={tile} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedTiles;