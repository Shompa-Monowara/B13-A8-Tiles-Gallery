import React from 'react';
import FeaturedCard from './FeaturedCard';

const FeaturedTiles = async () => {
    
    const res = await fetch('http://localhost:3000//data.json');
    const tiles = await res.json();
    
   
    const featuredTiles = tiles.slice(0, 4);

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <h1 className="text-2xl font-bold my-5 text-white">Featured Tiles</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {featuredTiles.map(tile => (
                    <FeaturedCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedTiles;