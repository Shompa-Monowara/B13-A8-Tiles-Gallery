import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tiles Gallery",
  description: "A modern gallery application featuring curated architectural and interior photography.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" 
      data-theme="light" 
      className={`h-full antialiased ${jost.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased min-h-full flex flex-col text-[#2a0e17] bg-[#f5f0eb]">
        <Navbar />
        
        <main>{children}</main>
        
        <Toaster 
          position="top-center" 
          reverseOrder={false} 
        />
        
        <Footer />
      </body>
    </html>
  );
}