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

  const navLinkClass = (href) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `transition-colors duration-200 ${
      isActive
        ? "text-[#7a1e2d] font-black"
        : "text-gray-700 hover:text-[#6D1731]"
    }`;
  };

  const mobileNavLinkClass = (href) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive
        ? "text-[#7a1e2d] font-black bg-[#7a1e2d]/8"
        : "text-gray-700 hover:text-[#7a1e2d] hover:bg-[#7a1e2d]/5"
    }`;
  };

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <nav className="bg-[#FAF9F6] text-[#3F3B36] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#7a1e2d]/15 px-3 py-2 flex justify-between items-center backdrop-blur-md w-full">

          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
              <Image
                src="/loader.svg"
                alt="Tiles Gallery Logo"
                width={42}
                height={42}
                className="object-contain"
              />
            </div>
            <h3 className="font-black text-lg md:text-xl tracking-wider uppercase text-[#7a1e2d]">
              Tiles<span className="text-gray-500 font-light">Gallery</span>
            </h3>
          </Link>

          {/* Middle: Desktop Menu only */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider">
            <li>
              <Link href="/" className={navLinkClass("/")}>Home</Link>
            </li>
            <li>
              <Link href="/all-tiles" className={navLinkClass("/all-tiles")}>All Tiles</Link>
            </li>
            <li>
              <Link href="/my-profile" className={navLinkClass("/my-profile")}>My Profile</Link>
            </li>
          </ul>

          {/* Right */}
          <div className="flex items-center gap-4 text-sm font-bold tracking-wider">

            {/* Desktop only: Login / User */}
            <div className="hidden md:flex items-center gap-4">
              {!user && (
                isShowingLoginForm ? (
                  <span className="bg-[#7a1e2d] text-white pl-5 pr-1 py-1 rounded-full shadow-md flex items-center gap-3 select-none opacity-70">
                    <span>Login</span>
                    <span className="w-9 h-9 bg-[#D5B471] text-[#7a1e2d] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </span>
                  </span>
                ) : (
                  <Link
                    href="/login"
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
                    <span className="cursor-pointer select-none opacity-80">
                      <Avatar size="sm">
                        <Avatar.Image alt={user?.name || "User Avatar"} src={user?.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                      </Avatar>
                    </span>
                  ) : (
                    <Link href="/my-profile">
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
            </div>

            {/* Mobile: Hamburger only */}
            <button
              className="md:hidden p-1.5 text-[#7a1e2d]"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

     
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

     
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#FAF9F6] z-50 shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#7a1e2d]/10">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <Image src="/loader.svg" alt="Logo" width={32} height={32} className="object-contain" />
            <h3 className="font-black text-base tracking-wider uppercase text-[#7a1e2d]">
              Tiles<span className="text-gray-400 font-light">Gallery</span>
            </h3>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 text-[#7a1e2d] hover:bg-[#7a1e2d]/10 rounded-full transition-colors"
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </Link>
          <Link href="/all-tiles" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass("/all-tiles")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            All Tiles
          </Link>
          <Link href="/my-profile" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass("/my-profile")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            My Profile
          </Link>
        </nav>

        
        <div className="px-4 py-5 border-t border-[#7a1e2d]/10">
          {!user ? (
            isShowingLoginForm ? (
              <span className="w-full bg-[#7a1e2d] text-white px-4 py-2.5 rounded-xl shadow-md flex items-center justify-center gap-2 select-none opacity-70 text-sm font-semibold">
                Login
              </span>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#7a1e2d] text-white hover:bg-[#631421] px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm font-semibold"
              >
                Login
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            )
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/my-profile" onClick={() => setIsMobileMenuOpen(false)}>
                <Avatar size="sm" className="cursor-pointer hover:opacity-80 transition-opacity border-2 border-[#7a1e2d]/30 shadow-sm">
                  <Avatar.Image alt={user?.name || "User Avatar"} src={user?.image} referrerPolicy="no-referrer" />
                  <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                </Avatar>
              </Link>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{user?.name}</p>
                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
              </div>
              <Button
                onClick={() => {
                  handleSignOut();
                  setIsMobileMenuOpen(false);
                }}
                size="sm"
                className="text-white bg-[#7a1e2d] hover:bg-[#631421] text-xs px-3 py-1 rounded-full transition-all border border-transparent shadow-sm flex-shrink-0"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;