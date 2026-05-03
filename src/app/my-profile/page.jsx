"use client";

import { UpdateUserModal } from "@/components/UpdateCardModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfilePage = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await authClient.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 mt-30 font-[var(--font-poppins, 'inherit')]">
      {/* Page Header */}
      <div className="mb-10 text-center ">
        <h1 className="text-4xl font-bold text-gray-900">User Profile</h1>
        <p className="text-gray-500 mt-2">
          Manage your account settings and profile details.
        </p>
      </div>

      {/* Main Container */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-lg">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.10)] border border-[#7a1e2d]/10 overflow-hidden">
            {/* Banner */}
            <div className="h-40 bg-gradient-to-br from-[#7a1e2d] to-[#631421] relative">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center -mt-20 px-10 pb-12">
              {/* Avatar */}
              <div className="ring-4 ring-white rounded-full shadow-md">
                <Avatar className="h-40 w-40 text-4xl">
                  <Avatar.Image
                    alt={user?.name || "User"}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <Avatar.Fallback className="bg-[#7a1e2d] text-white text-5xl font-bold">
                    {user?.name?.charAt(0) || "U"}
                  </Avatar.Fallback>
                </Avatar>
              </div>

              {/* Name & Email */}
              <h2 className="text-3xl font-bold mt-5 text-gray-900 tracking-wide">
                {user?.name || "Unknown User"}
              </h2>
              <p className="text-lg text-gray-400 mt-2">{user?.email}</p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 my-7" />

              {/* Update & Logout Buttons */}
              <div className="w-full flex flex-col gap-3">
                <UpdateUserModal />

                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className={`w-full font-semibold rounded-xl h-11 bg-[#6D1731] text-white shadow-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    isLoggingOut
                      ? "opacity-75 cursor-not-allowed bg-[#571023]"
                      : "hover:bg-red-950"
                  }`}
                >
                  {isLoggingOut ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing out...
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                      </svg>
                      Logout
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6 tracking-wide">
            Manage your profile details
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;