"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";
import { HiOutlineEye, HiOutlineEyeOff, HiCheck } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

export default function LogInPage() {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error: signInError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (signInError) {
      const errorMessage = signInError.message ? signInError.message.toLowerCase() : "";
      if (
        errorMessage.includes("not found") ||
        errorMessage.includes("user") ||
        errorMessage.includes("invalid")
      ) {
        setError("You do not have an account yet, or the credentials are invalid. Please register first.");
      } else {
        setError(signInError.message || "Invalid email or password. Please check your credentials.");
      }
    } else {
      toast.success("Login Successful!");
      router.push("/");
    }
  };

  const handleSignInWithGoogle = async () => {
    setError(null);
    const { data, error: googleError } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    if (googleError) {
      setError(googleError.message || "Failed to login with Google.");
    } else {
      toast.success("Successful to Google login...");
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
              Welcome Back
            </p>
          </div>
          <h1
            className="text-[40px] font-light tracking-[0.03em] leading-[1.1] text-[#2a0e17] font-serif"
          >
            Sign <em className="not-italic text-[#7a1e2d]">In</em>
          </h1>
          <div className="w-full h-px bg-gradient-to-r from-[#D5B471]/50 via-[#7a1e2d]/10 to-transparent mt-5" />
        </div>

     
        <div className="bg-white border border-[#7a1e2d]/10 shadow-[0_4px_32px_rgba(122,30,45,0.06)] p-8">

         
          {error && (
            <div className="mb-6 px-4 py-3 bg-[#7a1e2d]/5 border border-[#7a1e2d]/20 text-[#7a1e2d] text-[12px] tracking-[0.02em] leading-relaxed">
              {error}
            </div>
          )}

          <form className="flex flex-col gap-6" onSubmit={onSubmit}>

           
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
                <span className="relative z-10">Login</span>
              </button>

              <button
                type="reset"
                className="flex-1 h-11 text-[10.5px] font-semibold tracking-[0.22em] uppercase border border-[#7a1e2d]/15 text-[#7a1e2d]/40 bg-transparent hover:border-[#7a1e2d]/30 hover:text-[#7a1e2d]/60 transition-all duration-200"
              >
                Reset
              </button>
            </div>
          </form>

        
          <div className="flex items-center gap-3 my-7">
            <div className="flex-1 h-px bg-[#7a1e2d]/8" />
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#7a1e2d]/30">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-[#7a1e2d]/8" />
          </div>

         
          <button
            onClick={handleSignInWithGoogle}
            type="button"
            className="w-full h-11 bg-white border border-[#7a1e2d]/15 text-[#2a0e17] hover:border-[#7a1e2d]/30 hover:bg-[#7a1e2d]/2 flex items-center justify-center gap-3 transition-all duration-200 text-[10.5px] font-semibold tracking-[0.15em] uppercase"
          >
            <FcGoogle className="w-4 h-4" />
            Login with Google
          </button>

         
          <p className="text-center text-[12px] font-light tracking-[0.04em] text-[#7a1e2d]/40 mt-7">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#7a1e2d] font-semibold hover:text-[#D5B471] transition-colors duration-200"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}