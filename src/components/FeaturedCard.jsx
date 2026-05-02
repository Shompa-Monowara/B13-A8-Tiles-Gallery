import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ tile }) => {
    return (
        <Card className="border rounded-xl p-4 flex flex-col justify-between h-full">
            <div>
                {/* Image Section */}
                <div className="relative w-full aspect-square mb-3">
                    <Image
                        src={tile.imageUrl}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={tile.title}
                        className="object-cover rounded-xl"
                    />
                    <Chip 
                        size="sm" 
                        className="absolute right-2 top-2 flex items-center justify-center h-6 px-3 leading-none"
                    >
                        {tile.category}
                    </Chip>
                </div>

                {/* Title Section */}
                <div>
                    <h2 className="font-medium text-lg leading-tight">{tile.title}</h2>
                </div>
            </div>

            {/* Action Section */}
            <div className="mt-4">
                <Link href={`/all-tiles/${tile.id}`}>
                    <Button 
                        className="w-full bg-[#6D1731] text-white hover:bg-[#c09d5e] font-semibold transition-colors"
                    >
                        View Details
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default FeaturedCard;