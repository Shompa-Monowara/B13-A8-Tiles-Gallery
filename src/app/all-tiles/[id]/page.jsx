"use client";

import React, { useState, useEffect, use } from 'react';
import Image from "next/image";
import { ClipLoader } from "react-spinners";

const DetailsPage = ({ params }) => {
    const resolvedParams = use(params);
    const id = resolvedParams.id;
    const [tile, setTile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTile = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const res = await fetch('/data.json');
                const tiles = await res.json();
                const foundTile = tiles.find(t => String(t.id) === String(id));
                setTile(foundTile);
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay for loading
            } catch (error) {
                console.error("Error fetching tile details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTile();
    }, [id]);

    return (
        <div
            className="max-w-5xl mx-auto px-4 md:px-8 mt-36 mb-24 text-[#2a0e17] font-sans"
        >
            {loading ? (
                <div className="flex flex-col justify-center items-center py-28 gap-5">
                    <ClipLoader color="#7a1e2d" loading={loading} size={36} />
                    <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#7a1e2d]/40">
                        Loading Tile
                    </p>
                </div>
            ) : tile ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    
                    <div className="relative w-full aspect-square overflow-hidden bg-[#f5f0eb]">
                        <Image
                            src={tile.imageUrl}
                            alt={tile.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        
                        <span className="absolute top-3.5 left-3.5 bg-[#2a0e17]/60 backdrop-blur-md text-[#D5B471] text-[9.5px] font-semibold tracking-[0.2em] uppercase px-3 py-[5px] border border-[#D5B471]/30">
                            {tile.category}
                        </span>
                    </div>

                    <div className="flex flex-col gap-8">
                        
                        <div className="space-y-4">
                            {/* Eyebrow */}
                            <div className="flex items-center gap-3">
                                <span className="block w-6 h-px bg-[#D5B471]" />
                                <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#D5B471]">
                                    {tile.category}
                                </p>
                            </div>

                            <h1
                                className="font-light leading-[1.05] tracking-[0.03em] text-[#2a0e17] font-serif text-[46px]"
                            >
                                {tile.title}
                            </h1>

                            <div className="w-8 h-px bg-[#7a1e2d]/20" />

                            <p className="text-[13px] font-light leading-[1.9] tracking-[0.04em] text-[#7a1e2d]/50">
                                {tile.description}
                            </p>
                        </div>

                        <div className="border-t border-[#7a1e2d]/10">
                            
                            <div className="flex justify-between items-center py-3.5 border-b border-[#7a1e2d]/10">
                                <span className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#7a1e2d]/40">
                                    Price
                                </span>
                                <span
                                    className="font-light tracking-[0.02em] text-[#D5B471] font-serif text-[30px]"
                                >
                                    {tile.currency} {tile.price}
                                </span>
                            </div>

                            
                            <div className="flex justify-between items-center py-3.5 border-b border-[#7a1e2d]/10">
                                <span className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#7a1e2d]/40">
                                    Material
                                </span>
                                <span className="text-[13px] font-light tracking-[0.04em] text-[#2a0e17]">
                                    {tile.material}
                                </span>
                            </div>

                            
                            <div className="flex justify-between items-center py-3.5 border-b border-[#7a1e2d]/10">
                                <span className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#7a1e2d]/40">
                                    Dimensions
                                </span>
                                <span className="text-[13px] font-light tracking-[0.04em] text-[#2a0e17]">
                                    {tile.dimensions}
                                </span>
                            </div>

                            
                            <div className="flex justify-between items-center py-3.5 border-b border-[#7a1e2d]/10">
                                <span className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#7a1e2d]/40">
                                    Category
                                </span>
                                <span className="text-[13px] font-light tracking-[0.04em] text-[#2a0e17] capitalize">
                                    {tile.category}
                                </span>
                            </div>

                            
                            <div className="flex justify-between items-center py-3.5">
                                <span className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#7a1e2d]/40">
                                    Stock Status
                                </span>
                                <span className={`text-[11px] font-semibold tracking-[0.18em] uppercase px-3 py-1 ${
                                    tile.inStock
                                        ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
                                        : 'text-[#7a1e2d] bg-[#7a1e2d]/5 border border-[#7a1e2d]/15'
                                }`}>
                                    {tile.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-28 gap-4">
                    <div className="w-12 h-px bg-[#D5B471]/50" />
                    <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#7a1e2d]/40">
                        Tile Not Found
                    </p>
                </div>
            )}
        </div>
    );
};

export default DetailsPage;