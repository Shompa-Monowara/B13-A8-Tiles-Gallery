"use client";
import { UpdateUserModal } from "@/components/UpdateCardModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Email/Password Login
  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error: signInError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/profile", // লগইন করার পর প্রোফাইল পেজেই রিডাইরেক্ট হবে
    });

    if (signInError) {
      setError(
        signInError.message ||
          "Invalid email or password. Please check your credentials."
      );
    } else {
      window.location.reload(); // পেজটি রিলোড করে সেশন আপডেট করবে
    }
  };

  // Google Social Login
  const handleSignInWithGoogle = async () => {
    setError(null);

    const { data, error: googleError } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/profile",
    });

    if (googleError) {
      setError(googleError.message || "Failed to sign in with Google.");
    }
  };

  // ১. লোডিং স্টেট
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-950 text-white">
        <p>Loading your profile...</p>
      </div>
    );
  }

  // ২. যদি ব্যবহারকারী লগইন করা না থাকেন, তবে লগইন ফর্মটি শো করবে
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-slate-950 px-4 py-12 sm:py-16 font-[var(--font-poppins, 'inherit')]">
        <div className="w-full max-w-md p-8 md:p-10 bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-[#38BDF8]/20 rounded-3xl text-white">
          <div className="flex flex-col gap-2 items-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Sign In
            </h1>
            <p className="text-sm text-slate-400 font-light">
              Welcome back! Please enter your details to view your profile.
            </p>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/40 rounded-lg text-red-300 text-sm text-center">
              {error}
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-200 text-sm font-medium pb-1">
                Email <span className="text-[#38BDF8] text-xs">*</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="john@example.com"
                className="h-11 w-full px-4 rounded-xl bg-slate-950 hover:bg-slate-950/80 focus:bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#38BDF8]/40 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5 relative">
              <label className="text-slate-200 text-sm font-medium pb-1">
                Password <span className="text-[#38BDF8] text-xs">*</span>
              </label>
              <input
                required
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                minLength={8}
                className="h-11 w-full px-4 pr-12 rounded-xl bg-slate-950 hover:bg-slate-950/80 focus:bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#38BDF8]/40 transition-all"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-3 top-[38px] transform -translate-y-1/2 text-slate-500 hover:text-white transition-colors p-1"
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
              <span className="text-xs text-slate-500 mt-1">
                Must be at least 8 characters with 1 uppercase and 1 number
              </span>
            </div>

            <div className="flex gap-3 mt-3">
              <button
                type="submit"
                className="flex-1 font-semibold rounded-xl h-11 bg-[#38BDF8] text-slate-950 shadow-[0_4px_14px_0_rgba(56,189,248,0.4)] hover:bg-[#38BDF8]/90 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Login
              </button>
              <button
                type="reset"
                className="flex-1 font-semibold rounded-xl h-11 bg-slate-950/40 border border-slate-800 text-slate-300 hover:bg-slate-950/60 transition-all duration-200"
              >
                Reset
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-slate-400 my-6">
            Or continue with
          </p>

          <button
            onClick={handleSignInWithGoogle}
            type="button"
            className="w-full bg-slate-950/40 border border-slate-800 text-slate-300 hover:bg-slate-950/60 h-11 rounded-xl flex items-center justify-center gap-3 transition-all text-sm font-semibold shadow-sm"
          >
            <GrGoogle className="w-4 h-4 text-[#38BDF8]" /> Sign In With Google
          </button>

          <p className="text-center text-sm text-slate-400 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#38BDF8] font-bold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // ৩. যদি লগইন করা থাকে তবে প্রোফাইল পেজ শো করবে
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <Card className="w-full max-w-md p-8 bg-slate-900/60 backdrop-blur-xl border border-[#38BDF8]/20 shadow-xl rounded-3xl text-white flex flex-col items-center">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name || "User"}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold mt-4 tracking-wider">{user?.name}</h2>
        <p className="text-sm text-white/60 mt-1">{user?.email}</p>

        <div className="mt-6 w-full">
          <UpdateUserModal />
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;