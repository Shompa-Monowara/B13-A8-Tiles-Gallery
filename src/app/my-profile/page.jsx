"use client";

import { UpdateUserModal } from "@/components/UpdateCardModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 mt-30">
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
            <div className="flex flex-col items-center -mt-16 px-10 pb-12">
              {/* Avatar */}
              <div className="ring-4 ring-white rounded-full shadow-md">
                <Avatar className="h-32 w-32">
                  <Avatar.Image
                    alt={user?.name || "User"}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback className="bg-[#7a1e2d] text-white text-4xl font-bold">
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

              {/* Update Button */}
              <div className="w-full">
                <UpdateUserModal />
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