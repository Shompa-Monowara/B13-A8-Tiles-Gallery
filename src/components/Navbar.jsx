"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#3F3B36]/30 backdrop-blur-lg border-b border-white/15 shadow-sm px-4 fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full text-white">
        
        <Link href="/" className="flex items-center group pl-2 md:pl-0">
          <h3 className="font-black text-xl tracking-wider uppercase">
            Tiles<span className="text-[#38BDF8] font-light">Gallery</span>
          </h3>
        </Link>

       
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider">
          <li>
            <Link href={"/"} className="hover:text-gray-300 transition-colors ">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/all-tiles"} className="hover:text-gray-300 transition-colors ">
              All Tiles
            </Link>
          </li>
          <li>
            <Link href={"/my-profile"} className="hover:text-gray-300 transition-colors ">
              My Profile
            </Link>
          </li>
        </ul>

        
        <div className="flex items-center gap-6 text-sm font-semibold tracking-wider pr-2 md:pr-0">
          <Link href={"/signin"} className="hover:text-gray-300 transition-colors ">
            SignIn
          </Link>
          
          <Link 
            href={"/signup"} 
            className="border border-white/30 hover:bg-white hover:text-[#3F3B36] px-5 py-2 rounded-sm transition-all duration-300 "
          >
            SignUp
          </Link>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;