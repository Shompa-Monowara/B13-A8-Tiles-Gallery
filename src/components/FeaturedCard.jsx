import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRulerCombined } from "react-icons/fa";

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
                    <Chip size="sm" className="absolute right-2 top-2">{tile.category}</Chip>
                </div>

                {/* Content Section */}
                <div>
                    <h2 className="font-medium text-lg leading-tight">{tile.title}</h2>
                    <p className="text-default-500 text-sm mt-1 line-clamp-2">{tile.description}</p>
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center px-1">
                    <div className="flex items-center gap-1 font-semibold">
                        <span className="text-sm font-medium">$</span>
                        <span>{tile.price}</span>
                    </div>

                    <Separator orientation="vertical" className="h-5" />

                    <div className="flex items-center gap-1 text-sm text-default-500">
                        <FaRulerCombined size={14} />
                        <span>{tile.dimensions}</span>
                    </div>
                </div>

                {/* Updated link to match the all-tiles directory structure */}
                <Link href={`/all-tiles/${tile.id}`}>
                    <Button variant="bordered" className="w-full">
                        View
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default FeaturedCard;