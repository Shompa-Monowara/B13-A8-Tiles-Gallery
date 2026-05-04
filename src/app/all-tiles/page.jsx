"use client";
import { useState, useEffect } from "react";
import FeaturedCard from "@/components/FeaturedCard";
import { useSearchParams } from "next/navigation";
import { HiOutlineSearch } from "react-icons/hi";

const AllTilesPage = () => {
    const [tiles, setTiles] = useState([]);
    const [search, setSearch] = useState("");

    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    useEffect(() => {
        const fetchTiles = async () => {
            const res = await fetch('http://localhost:3000/data.json');
            const data = await res.json();
            setTiles(data);
        };
        fetchTiles();
    }, []);

    const filteredTiles = tiles.filter(tile => {
        const matchesCategory = category
            ? tile.category.toLowerCase() === category.toLowerCase()
            : true;
        const matchesSearch = tile.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div
            className="max-w-7xl mx-auto px-4 md:px-8 mt-40 mb-20 font-sans"
        >
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-3">
                    <span className="block w-6 h-px bg-[#D5B471]" />
                    <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#D5B471]">
                        {category ? category : "Complete Collection"}
                    </p>
                </div>
                <h1
                    className="text-[42px] md:text-[52px] font-light tracking-[0.03em] leading-[1.1] text-[#2a0e17] font-serif"
                >
                    All <em className="not-italic text-[#7a1e2d]">Tiles</em>
                </h1>
                <div className="w-full h-px bg-gradient-to-r from-[#D5B471]/50 via-[#7a1e2d]/10 to-transparent mt-8" />
            </div>

            <div className="mb-12 max-w-xl">
                <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-3">
                    <div className="relative flex-1">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <HiOutlineSearch className="w-4 h-4 text-[#7a1e2d]/30" />
                        </span>
                        <input
                            name="search"
                            type="text"
                            placeholder="Search tiles by title..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-11 pl-11 pr-4 bg-white border border-[#7a1e2d]/15 text-[13px] text-[#2a0e17] placeholder:text-[#7a1e2d]/30 focus:outline-none focus:border-[#7a1e2d]/40 focus:ring-1 focus:ring-[#7a1e2d]/10 transition-all duration-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="relative h-11 px-7 text-[10.5px] font-semibold tracking-[0.22em] uppercase overflow-hidden border border-[#7a1e2d]/20 text-[#7a1e2d]/60 bg-transparent hover:text-white hover:border-[#7a1e2d] transition-colors duration-300 group"
                    >
                        <span className="absolute inset-0 bg-[#7a1e2d] -translate-x-full group-hover:translate-x-0 transition-transform duration-[350ms] ease-out" />
                        <span className="relative">Search</span>
                    </button>
                </form>
            </div>

            {filteredTiles.length > 0 ? (
                <>
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#7a1e2d]/40 mb-8">
                        {filteredTiles.length} {filteredTiles.length === 1 ? "Result" : "Results"}
                        {category && (
                            <span className="text-[#D5B471] ml-2"> {category}</span>
                        )}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredTiles.map(tile => (
                            <FeaturedCard key={tile.id} tile={tile} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-28 gap-4">
                    <div className="w-12 h-px bg-[#D5B471]/50" />
                    <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#7a1e2d]/40">
                        No Results Found
                    </p>
                    <p className="text-[13px] text-[#7a1e2d]/30 mt-1">
                        Try adjusting your search term.
                    </p>
                </div>
            )}
        </div>
    );
};

export default AllTilesPage;