"use client";

import { useState, useEffect } from "react";
import FeaturedCard from "@/components/FeaturedCard";
import { useSearchParams } from "next/navigation";

const AllTilesPage = () => {
    const [tiles, setTiles] = useState([]);
    const [search, setSearch] = useState("");
    
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    // Fetching the tile data on component mount
    useEffect(() => {
        const fetchTiles = async () => {
            try {
                const res = await fetch('http://localhost:3000/data.json');
                const data = await res.json();
                setTiles(data);
            } catch (error) {
                console.error("Error fetching tiles:", error);
            }
        };
        fetchTiles();
    }, []);

    // Filter tiles based on category and search query
    const filteredTiles = tiles.filter(tile => {
        const matchesCategory = category 
            ? tile.category.toLowerCase() === category.toLowerCase() 
            : true;
            
        const matchesSearch = tile.title.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto p-6 mt-24 font-[var(--font-poppins, 'inherit')]">
            
            <div className="mb-8 max-w-lg mx-auto">
                <form 
                    onSubmit={(e) => e.preventDefault()} 
                    className="flex items-center gap-3 w-full"
                >
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={2} 
                                stroke="currentColor" 
                                className="w-5 h-5 text-gray-400"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.601 10.601Z" 
                                />
                            </svg>
                        </span>
                        <input
                            name="search"
                            type="text"
                            placeholder="Search for tiles by title..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-12 pl-11 pr-4 rounded-xl bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-300 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6D1731]/40 transition-all shadow-sm"
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="h-12 px-6 bg-[#6D1731] text-white hover:bg-[#8B1E3F] transition-colors font-semibold rounded-xl shadow-sm"
                    >
                        Search
                    </button>
                </form>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 m-4">All Tiles</h1>

            {filteredTiles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredTiles.map(tile => (
                        <FeaturedCard key={tile.id} tile={tile} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-xl font-medium text-gray-500">No tiles found matching your search.</h2>
                </div>
            )}
        </div>
    );
};

export default AllTilesPage;