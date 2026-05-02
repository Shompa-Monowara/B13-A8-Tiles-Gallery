"use client";

import { useState, useEffect } from "react";
import FeaturedCard from "@/components/FeaturedCard";
import { Input, Button } from "@heroui/react";
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
        
        <div className="container mx-auto p-6 mt-24">
           
            <div className="mb-8 max-w-lg mx-auto">
                <form 
                    onSubmit={(e) => e.preventDefault()} 
                    className="flex items-center gap-3 w-full"
                >
                    <Input
                        name="search"
                        type="text"
                        size="lg"
                        placeholder="Search for tiles by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="shadow-sm w-full"
                        startContent={
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={2} 
                                stroke="currentColor" 
                                className="w-5 h-5 text-default-400"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.601 10.601Z" 
                                />
                            </svg>
                        }
                    />
                    
                    
                    <Button 
                        type="submit" 
                        size="lg"
                        className="bg-[#6D1731] text-white hover:bg-[#8B1E3F] transition-colors font-semibold"
                    >
                        Search
                    </Button>
                </form>
            </div>

            <h1 className="text-3xl font-bold text-default-900 m-4">All Tiles</h1>

           
            {filteredTiles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredTiles.map(tile => (
                        <FeaturedCard key={tile.id} tile={tile} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-xl font-medium text-default-500">No tiles found matching your search.</h2>
                </div>
            )}
        </div>
    );
};

export default AllTilesPage;