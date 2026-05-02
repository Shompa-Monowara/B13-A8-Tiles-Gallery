"use client";
import { UpdateUserModal } from "@/components/UpdateCardModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  
  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending, router]);

 
  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-950 text-white">
        <p>Loading your profile...</p>
      </div>
    );
  }

 
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-950 text-white">
        <p>Redirecting to login...</p>
      </div>
    );
  }

 
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