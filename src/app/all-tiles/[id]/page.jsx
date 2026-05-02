import React from 'react';
import Image from "next/image";
import { Chip } from "@heroui/react";

const DetailsPage = async ({ params }) => {
    // Resolve params if using Next.js 15+ async pattern
    const { id } = await params;

    // Fetching the tile data
    const res = await fetch('http://localhost:3000/data.json');
    const tiles = await res.json();

    // Find the specific tile
    const tile = tiles.find(t => t.id === id);

    return (
        <div className="container mx-auto p-6 max-w-6xl mt-40">
            {tile ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={tile.imageUrl}
                            alt={tile.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        {/* Category Chip */}
                        <Chip 
                            size="md" 
                            className="absolute right-4 top-4 flex items-center justify-center h-8 px-4"
                        >
                            {tile.category}
                        </Chip>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h1 className="text-4xl font-bold text-default-900 mb-2">{tile.title}</h1>
                            <p className="text-default-500 text-lg">{tile.description}</p>
                        </div>

                        <div className="flex flex-col gap-2 border-y py-4 border-default-200">
                            <div className="flex justify-between items-center">
                                <span className="text-default-500 font-medium">Price</span>
                                <span className="text-2xl font-semibold text-primary">
                                    {tile.currency} {tile.price}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-default-500">Material</span>
                                <span className="font-medium text-default-800">{tile.material}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-default-500">Dimensions</span>
                                <span className="font-medium text-default-800">{tile.dimensions}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-default-500">Category</span>
                                <span className="font-medium text-default-800 capitalize">
                                    {tile.category}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-default-500">Stock Status</span>
                                <span className={`font-medium ${tile.inStock ? 'text-success' : 'text-danger'}`}>
                                    {tile.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold text-default-600">Tile Not Found</h2>
                </div>
            )}
        </div>
    );
};

export default DetailsPage;