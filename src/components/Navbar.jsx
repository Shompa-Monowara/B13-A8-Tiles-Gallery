"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineHome, HiOutlineViewGrid, HiOutlineUser } from "react-icons/hi";
import { HiArrowUpRight, HiArrowRightOnRectangle } from "react-icons/hi2";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const isMyProfilePage = pathname === "/my-profile";

  const navLinkClass = (href) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `transition-all duration-200 font-semibold tracking-[0.12em] uppercase text-[11px] relative group/link ${
      isActive
        ? "text-[#7a1e2d]"
        : "text-[#3F3B36]/60 hover:text-[#7a1e2d]"
    }`;
  };

  const mobileNavLinkClass = (href) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold tracking-[0.1em] uppercase text-[11px] ${
      isActive
        ? "text-[#7a1e2d] bg-[#7a1e2d]/8 border-l-2 border-[#D5B471]"
        : "text-[#3F3B36]/60 hover:text-[#7a1e2d] hover:bg-[#7a1e2d]/5"
    }`;
  };

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <nav
          className="bg-[#FAF9F6]/95 text-[#3F3B36] rounded-full shadow-[0_8px_30px_rgba(122,30,45,0.12)] border border-[#7a1e2d]/12 px-3 py-2 flex justify-between items-center backdrop-blur-md w-full font-sans"
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
              <Image src="/loader.svg" alt="Tiles Gallery Logo" width={42} height={42} className="object-contain" />
            </div>
            <h3 className="font-serif font-extrabold text-lg md:text-xl tracking-[0.08em] uppercase">
              <span className="text-[#5C1522]">Tiles</span>
              <span className="text-[#D5B471]">Gallery</span>
            </h3>
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/all-tiles", label: "All Tiles" },
              { href: "/my-profile", label: "My Profile" },
            ].map(({ href, label }) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link href={href} className={`${navLinkClass(href)} ${isActive ? "nav-active-dot" : ""}`}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            {/* Desktop Auth Section */}
            <div className="hidden md:flex items-center gap-4">
              {!user && (
                <Link
                  href="/login"
                  className="bg-[#7a1e2d] text-white hover:bg-[#5c1522] pl-5 pr-1 py-1 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(122,30,45,0.3)] flex items-center gap-3 group text-[10.5px] font-semibold tracking-[0.2em] uppercase"
                >
                  <span>Login</span>
                  <span className="w-9 h-9 bg-[#D5B471] text-[#7a1e2d] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                    <HiArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
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
                      <Avatar size="lg" className="cursor-pointer hover:opacity-80 transition-opacity border-2 border-[#D5B471]/60 shadow-sm">
                        <Avatar.Image alt={user?.name || "User Avatar"} src={user?.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                      </Avatar>
                    </Link>
                  )}
                  <button
                    onClick={handleSignOut}
                    className="bg-[#7a1e2d] text-white hover:bg-[#5c1522] pl-5 pr-1 py-1 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(122,30,45,0.3)] flex items-center gap-3 group select-none text-[10.5px] font-semibold tracking-[0.2em] uppercase"
                  >
                    <span>Logout</span>
                    <span className="w-9 h-9 bg-[#D5B471] text-[#7a1e2d] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                      <HiArrowRightOnRectangle className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 text-[#7a1e2d]"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <RxHamburgerMenu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#7a1e2d]/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#FAF9F6] z-50 shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out font-sans ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#7a1e2d]/10">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
            <Image src="/loader.svg" alt="Logo" width={32} height={32} className="object-contain" />
            <h3 className="font-serif font-light text-base tracking-[0.08em] uppercase">
              <span className="text-[#7a1e2d]">Tiles</span>
              <span className="text-[#D5B471]">Gallery</span>
            </h3>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 text-[#7a1e2d] hover:bg-[#7a1e2d]/8 rounded-full transition-colors"
            aria-label="Close Menu"
          >
            <RxCross2 className="w-5 h-5" />
          </button>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-[#D5B471]/60 via-[#7a1e2d]/20 to-transparent" />

        {/* Mobile Links */}
        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass("/")}>
            <HiOutlineHome className="w-4 h-4 flex-shrink-0" />
            Home
          </Link>
          <Link href="/all-tiles" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass("/all-tiles")}>
            <HiOutlineViewGrid className="w-4 h-4 flex-shrink-0" />
            All Tiles
          </Link>
          <Link href="/my-profile" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass("/my-profile")}>
            <HiOutlineUser className="w-4 h-4 flex-shrink-0" />
            My Profile
          </Link>
        </nav>

        {/* Mobile Authentication Area */}
        <div className="px-4 py-5 border-t border-[#7a1e2d]/10">
          {!user ? (
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-[#7a1e2d] text-white hover:bg-[#5c1522] px-4 py-2.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(122,30,45,0.25)] flex items-center justify-center gap-2 text-[10.5px] font-semibold tracking-[0.2em] uppercase"
            >
              Login
              <HiArrowUpRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/my-profile" onClick={() => setIsMobileMenuOpen(false)}>
                <Avatar size="sm" className="cursor-pointer hover:opacity-80 transition-opacity border-2 border-[#D5B471]/60 shadow-sm">
                  <Avatar.Image alt={user?.name || "User Avatar"} src={user?.image} referrerPolicy="no-referrer" />
                  <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                </Avatar>
              </Link>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#7a1e2d] truncate">{user?.name}</p>
                <p className="text-xs text-[#7a1e2d]/40 truncate">{user?.email}</p>
              </div>
              <button
                onClick={() => {
                  handleSignOutAction();
                  setIsMobileMenuOpen(false);
                }}
                className="text-white bg-[#7a1e2d] hover:bg-[#5c1522] text-[10px] px-3 py-2 rounded-full transition-all shadow-sm flex-shrink-0 flex items-center gap-1.5 font-bold tracking-[0.15em] uppercase"
              >
                Logout
                <HiArrowRightOnRectangle className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;