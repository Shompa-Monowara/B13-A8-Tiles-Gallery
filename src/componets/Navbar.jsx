"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    
    <div className="bg-[#3B342B] border-b border-white/10 px-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center py-4 max-w-7xl mx-auto w-full text-white">
        
        
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={35}
            height={35}
            className="object-contain"
          />
          
          {/* <h3 className="font-bold text-xl tracking-tighter uppercase">pixgen.</h3> */}
        </div>

       
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <li>
            <Link href={"/"} className="hover:text-gray-300 transition-colors">Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"} className="hover:text-gray-300 transition-colors">All Tiles</Link>
          </li>
          <li>
            <Link href={"/pricing"} className="hover:text-gray-300 transition-colors">Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"} className="hover:text-gray-300 transition-colors">My Profile</Link>
          </li>
        </ul>

      
        <div className="flex items-center gap-6 text-sm font-semibold uppercase">
          <Link href={"/signin"} className="hover:text-gray-300 transition-colors">
            SignIn
          </Link>
        
          <Link 
            href={"/signup"} 
            className="bg-white text-[#3B342B] px-5 py-2 rounded-sm hover:bg-gray-200 transition-all"
          >
            SignUp
          </Link>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;