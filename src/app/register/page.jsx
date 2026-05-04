"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineEye, HiOutlineEyeOff, HiCheck } from "react-icons/hi";

export default function RegisterPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data, error });

    if (!error) {
      await authClient.signOut();
      router.push("/login");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-16 mt-10 font-sans"
    >
      <div className="w-full max-w-md">

       
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-[#D5B471]" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#D5B471]">
              Join Us
            </p>
          </div>
          <h1
            className="text-[40px] font-light tracking-[0.03em] leading-[1.1] text-[#2a0e17] font-serif"
          >
            Create <em className="not-italic text-[#7a1e2d]">Account</em>
          </h1>
          <div className="w-full h-px bg-gradient-to-r from-[#D5B471]/50 via-[#7a1e2d]/10 to-transparent mt-5" />
        </div>

     
        <div className="bg-white border border-[#7a1e2d]/10 shadow-[0_4px_32px_rgba(122,30,45,0.06)] p-8">

          <form className="flex flex-col gap-6" onSubmit={onSubmit}>

            
            <div className="flex flex-col gap-2">
              <label className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7a1e2d]/50">
                Name <span className="text-[#7a1e2d]">*</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter your name"
                className="h-11 w-full px-4 bg-white border border-[#7a1e2d]/15 text-[13px] text-[#2a0e17] placeholder:text-[#7a1e2d]/25 focus:outline-none focus:border-[#7a1e2d]/40 focus:ring-1 focus:ring-[#7a1e2d]/10 transition-all duration-200"
              />
            </div>

           
            <div className="flex flex-col gap-2">
              <label className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7a1e2d]/50">
                Image URL <span className="text-[#7a1e2d]">*</span>
              </label>
              <input
                required
                name="image"
                type="text"
                placeholder="Image URL"
                className="h-11 w-full px-4 bg-white border border-[#7a1e2d]/15 text-[13px] text-[#2a0e17] placeholder:text-[#7a1e2d]/25 focus:outline-none focus:border-[#7a1e2d]/40 focus:ring-1 focus:ring-[#7a1e2d]/10 transition-all duration-200"
              />
            </div>

            
            <div className="flex flex-col gap-2">
              <label className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7a1e2d]/50">
                Email <span className="text-[#7a1e2d]">*</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="john@example.com"
                className="h-11 w-full px-4 bg-white border border-[#7a1e2d]/15 text-[13px] text-[#2a0e17] placeholder:text-[#7a1e2d]/25 focus:outline-none focus:border-[#7a1e2d]/40 focus:ring-1 focus:ring-[#7a1e2d]/10 transition-all duration-200"
              />
            </div>

          
            <div className="flex flex-col gap-2">
              <label className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7a1e2d]/50">
                Password <span className="text-[#7a1e2d]">*</span>
              </label>
              <div className="relative">
                <input
                  required
                  name="password"
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  minLength={8}
                  className="h-11 w-full px-4 pr-11 bg-white border border-[#7a1e2d]/15 text-[13px] text-[#2a0e17] placeholder:text-[#7a1e2d]/25 focus:outline-none focus:border-[#7a1e2d]/40 focus:ring-1 focus:ring-[#7a1e2d]/10 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={toggleVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a1e2d]/30 hover:text-[#7a1e2d]/60 transition-colors p-1"
                  aria-label="toggle password visibility"
                >
                  {isVisible
                    ? <HiOutlineEye className="w-4.5 h-4.5" />
                    : <HiOutlineEyeOff className="w-4.5 h-4.5" />
                  }
                </button>
              </div>
              <span className="text-[11px] font-light tracking-[0.04em] text-[#7a1e2d]/30">
                Must be at least 8 characters with 1 uppercase and 1 number
              </span>
            </div>

            
            <div className="flex gap-3 mt-1">
              <button
                type="submit"
                className="group relative flex-1 h-11 text-[10.5px] font-semibold tracking-[0.22em] uppercase overflow-hidden border border-[#7a1e2d] text-[#7a1e2d] bg-transparent hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-[#7a1e2d] -translate-x-full group-hover:translate-x-0 transition-transform duration-[350ms] ease-out" />
                <HiCheck className="relative z-10 w-3.5 h-3.5" />
                <span className="relative z-10">Submit</span>
              </button>

              <button
                type="reset"
                className="flex-1 h-11 text-[10.5px] font-semibold tracking-[0.22em] uppercase border border-[#7a1e2d]/15 text-[#7a1e2d]/40 bg-transparent hover:border-[#7a1e2d]/30 hover:text-[#7a1e2d]/60 transition-all duration-200"
              >
                Reset
              </button>
            </div>

          </form>

         
          <p className="text-center text-[12px] font-light tracking-[0.04em] text-[#7a1e2d]/40 mt-7">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#7a1e2d] font-semibold hover:text-[#D5B471] transition-colors duration-200"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}