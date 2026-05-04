"use client";

import { UpdateUserModal } from "@/components/UpdateCardModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

const ProfilePage = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 mt-10 font-sans">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-[#D5B471]" />
            <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#D5B471]">
              Account
            </p>
          </div>
          <h1 className="text-[40px] font-light tracking-[0.03em] leading-[1.1] text-[#2a0e17] font-serif">
            User <em className="not-italic text-[#7a1e2d]">Profile</em>
          </h1>
          <div className="w-full h-px bg-gradient-to-r from-[#D5B471]/50 via-[#7a1e2d]/10 to-transparent mt-5" />
        </div>

        
        <div className="bg-white border border-[#7a1e2d]/10 shadow-[0_4px_32px_rgba(122,30,45,0.06)]">

          
          <div className="h-28 bg-[#7a1e2d] relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, #D5B471 1px, transparent 1px)`,
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#D5B471]/15 to-transparent" />
          </div>

          
          <div className="flex flex-col items-center -mt-16 px-8 pb-10">

         
            <div className="ring-4 ring-white shadow-[0_4px_20px_rgba(122,30,45,0.2)] rounded-full">
              <Avatar className="h-32 w-32 text-4xl">
                {user?.image ? (
                  <Avatar.Image
                    alt={user?.name || "User"}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                ) : null}
                <Avatar.Fallback className="bg-[#7a1e2d] text-white text-4xl font-bold">
                  {user?.name?.charAt(0) || "U"}
                </Avatar.Fallback>
              </Avatar>
            </div>

            <h2 className="text-[28px] font-light mt-5 text-[#2a0e17] tracking-[0.04em] font-serif">
              {userData.data === undefined ? "\u00A0" : user?.name || "Unknown User"}
            </h2>

           
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7a1e2d]/40 mt-1">
              {userData.data === undefined ? "\u00A0" : user?.email || ""}
            </p>

           
            <div className="w-full flex items-center gap-3 my-7">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D5B471]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D5B471]" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D5B471]/30" />
            </div>

         
            <div className="w-full flex flex-col gap-3">
              <UpdateUserModal />

              <button
                onClick={handleLogout}
                className="group relative w-full h-11 text-[10.5px] font-semibold tracking-[0.22em] uppercase overflow-hidden border border-[#7a1e2d] flex items-center justify-center gap-2 transition-colors duration-300 text-[#7a1e2d] hover:text-white"
              >
                <span className="absolute inset-0 bg-[#7a1e2d] -translate-x-full group-hover:translate-x-0 transition-transform duration-[350ms] ease-out" />
                <HiArrowRightOnRectangle className="relative z-10 w-3.5 h-3.5" />
                <span className="relative z-10">Logout</span>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] font-light tracking-[0.12em] uppercase text-[#7a1e2d]/30 mt-6">
          Manage your profile details
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;