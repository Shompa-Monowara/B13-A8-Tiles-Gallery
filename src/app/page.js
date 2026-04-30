
import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import MarqueeSection from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div >
     <Banner/>
     <MarqueeSection/>
     <FeaturedTiles/>
    </div>
  );
}
