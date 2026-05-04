"use client";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ tile }) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer font-sans">
     
      <div className="relative aspect-square overflow-hidden bg-[#f5f0eb]">
        <Image
          src={tile.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          alt={tile.title}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
        />

        
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0e17]/70 via-[#7a1e2d]/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

       
        <span className="absolute top-3 left-3 bg-[#2a0e17]/60 backdrop-blur-md text-[#D5B471] text-[9.5px] font-semibold tracking-[0.2em] uppercase px-3 py-[5px] border border-[#D5B471]/30">
          {tile.category}
        </span>

        
        <div className="absolute bottom-0 left-0 right-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[400ms] ease-out px-4 pb-4 pt-2">
          <p className="text-[13px] font-medium tracking-[0.04em] text-white leading-snug">
            {tile.title}
          </p>
          {tile.size && (
            <p className="text-[11px] font-light tracking-[0.08em] text-[#D5B471]/80 mt-0.5">
              {tile.size}
            </p>
          )}
        </div>
      </div>

      
      <div className="pt-4 pb-5 border-b border-[#7a1e2d]/10">
        <p className="text-[13.5px] font-medium tracking-[0.03em] text-[#2a0e17] truncate mb-1">
          {tile.title}
        </p>

        {tile.size ? (
          <p className="text-[11.5px] font-light tracking-[0.06em] text-[#7a1e2d]/40 mb-5">
            {tile.size}
          </p>
        ) : (
          <div className="mb-5" />
        )}

        <Link href={`/all-tiles/${tile.id}`}>
          <button className="relative w-full py-[10px] text-[10px] font-semibold tracking-[0.25em] uppercase overflow-hidden border border-[#7a1e2d]/20 text-[#7a1e2d]/60 bg-transparent group-hover:text-white group-hover:border-[#7a1e2d] transition-colors duration-300">
            {/* Crimson fill slides in from left */}
            <span className="absolute inset-0 bg-[#7a1e2d] -translate-x-full group-hover:translate-x-0 transition-transform duration-[350ms] ease-out" />
            <span className="relative">View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;