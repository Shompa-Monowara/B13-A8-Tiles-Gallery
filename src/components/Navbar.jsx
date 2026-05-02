"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const isMyProfilePage = pathname === "/my-profile";
  const isLoginPage = pathname === "/login";
  const isShowingLoginForm = isLoginPage || (isMyProfilePage && !user);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <nav className="bg-[#FAF9F6] text-[#3F3B36] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#7a1e2d]/15 px-3 py-2 flex justify-between items-center backdrop-blur-md w-full">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11  flex items-center justify-center  flex-shrink-0">
            <Image
              src="/loader.svg"
              alt="Tiles Gallery Logo"
              width={42}
              height={42}
              className="object-contain "
            />
          </div>
          <h3 className="font-black text-lg md:text-xl tracking-wider uppercase text-[#7a1e2d]">
            Tiles<span className="text-gray-500 font-light">Gallery</span>
          </h3>
        </Link>

       
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-gray-700">
          <li>
            <Link href={"/"} className="hover:text-[#6D1731] transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/all-tiles"} className="hover:text-[#631421] transition-colors duration-200">
              All Tiles
            </Link>
          </li>
          <li>
            {isMyProfilePage ? (
              <span className="text-[#7a1e2d] cursor-not-allowed select-none">
                My Profile
              </span>
            ) : (
              <Link href={"/my-profile"} className="hover:text-[#7a1e2d] transition-colors duration-200">
                My Profile
              </Link>
            )}
          </li>
        </ul>

        
        <div className="flex items-center gap-4 text-sm font-bold tracking-wider">

          {!user && (
            isShowingLoginForm ? (
              <span className="bg-[#7a1e2d] text-white pl-5 pr-1 py-1 rounded-full shadow-md flex items-center gap-3 cursor-not-allowed select-none opacity-70">
                <span>Login</span>
                <span className="w-9 h-9 bg-[#D5B471] text-[#7a1e2d] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </span>
            ) : (
              <Link
                href={"/login"}
                className="bg-[#7a1e2d] text-white hover:bg-[#631421] pl-5 pr-1 py-1 rounded-full transition-all duration-300 shadow-md flex items-center gap-3 group"
              >
                <span>Login</span>
                <span className="w-9 h-9 bg-[#D5B471]/80 text-[#7a1e2d] rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </span>
              </Link>
            )
          )}

          {user && (
            <div className="flex items-center gap-3">
              {isMyProfilePage ? (
                <span className="cursor-not-allowed select-none opacity-80">
                  <Avatar size="sm">
                    <Avatar.Image alt={user?.name || "User Avatar"} src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                  </Avatar>
                </span>
              ) : (
                <Link href={"/my-profile"}>
                  <Avatar size="sm" className="cursor-pointer hover:opacity-80 transition-opacity border-2 border-[#7a1e2d]/30 shadow-sm">
                    <Avatar.Image alt={user?.name || "User Avatar"} src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                  </Avatar>
                </Link>
              )}
              <Button
                onClick={handleSignOut}
                size="sm"
                className="text-white bg-[#7a1e2d] hover:bg-[#631421] text-xs px-3 py-1.5 rounded-full transition-all border border-transparent shadow-sm"
              >
                Logout
              </Button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1.5 text-[#7a1e2d] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#FAF9F6] rounded-3xl shadow-lg border border-[#7a1e2d]/15 p-4 flex flex-col gap-3 text-sm font-semibold tracking-wider text-gray-700 w-full backdrop-blur-md">
          <Link href={"/"} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#7a1e2d] transition-colors p-2 border-b border-[#7a1e2d]/10">
            Home
          </Link>
          <Link href={"/all-tiles"} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#7a1e2d] transition-colors p-2 border-b border-[#7a1e2d]/10">
            All Tiles
          </Link>
          <Link href={"/my-profile"} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#7a1e2d] transition-colors p-2">
            My Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;