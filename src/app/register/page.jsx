"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

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
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] w-full bg-white px-4 py-8 sm:py-12 font-[var(--font-poppins, 'inherit')]">
      
      <div className="w-full max-w-md p-8 md:p-10 bg-white border border-gray-200 shadow-sm rounded-3xl">
        <div className="flex flex-col gap-2 items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 font-light">
            Welcome! Please enter your details.
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 text-sm font-medium pb-1">
              Name <span className="text-red-900 text-xs">*</span>
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Enter your name"
              className="h-11 w-full px-4 rounded-xl bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-300 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-900/40 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 text-sm font-medium pb-1">
              Image URL <span className="text-red-900 text-xs">*</span>
            </label>
            <input
              required
              name="image"
              type="text"
              placeholder="Image URL"
              className="h-11 w-full px-4 rounded-xl bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-300 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-900/40 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-gray-700 text-sm font-medium pb-1">
              Email <span className="text-red-900 text-xs">*</span>
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="john@example.com"
              className="h-11 w-full px-4 rounded-xl bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-300 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-900/40 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label className="text-gray-700 text-sm font-medium pb-1">
              Password <span className="text-red-900 text-xs">*</span>
            </label>
            <input
              required
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
              minLength={8}
              className="h-11 w-full px-4 pr-12 rounded-xl bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-300 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-900/40 transition-all"
            />
            <button
              type="button"
              onClick={toggleVisibility}
              className="absolute right-3 top-[50px] transform -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors p-1"
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.224 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.223 6.223A10.477 10.477 0 0112 4.5c4.776 0 8.774 3.162 10.066 7.5a10.477 10.477 0 01-1.077 2.472M12 9a3 3 0 100 6 3 3 0 000-6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.644 10.518 10.518 0 0118.928 0 1.012 1.012 0 010 .644 10.518 10.518 0 01-18.928 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
            <span className="text-xs text-gray-400 mt-1">
              Must be at least 8 characters with 1 uppercase and 1 number
            </span>
          </div>

          <div className="flex gap-3 mt-3">
            <button
              type="submit"
              className="flex-1 font-semibold rounded-xl h-11 bg-red-900 text-white shadow-sm hover:bg-red-950 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Submit
            </button>
            <button
              type="reset"
              className="flex-1 font-semibold rounded-xl h-11 bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 transition-all duration-200"
            >
              Reset
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-red-900 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}