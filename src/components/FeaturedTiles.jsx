"use client";

import React, { useState, useEffect } from 'react';
import FeaturedCard from './FeaturedCard';
import { ClipLoader } from 'react-spinners'; // react-spinners থেকে ClipLoader ইমপোর্ট করা হলো

const FeaturedTiles = () => {
    const [tiles, setTiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTiles = async () => {
            setLoading(true);
            try {
               
                await new Promise(resolve => setTimeout(resolve, 1000));

               
                const res = await fetch('/data.json');
                const data = await res.json();
                
                setTiles(data.slice(0, 4));
            } catch (error) {
                console.error("Error fetching tiles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTiles();
    }, []);

    
    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <ClipLoader 
                    color="#6D1731" 
                    size={50} 
                    speedMultiplier={0.5} 
                />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto mt-20">
            <h1 className="text-2xl font-bold my-5">Featured Tiles</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {tiles.map(tile => (
                    <FeaturedCard key={tile.id} tile={tile} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedTiles;