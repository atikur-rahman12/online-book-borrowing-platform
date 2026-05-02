"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiEdit, FiLogOut, FiMail, FiUser } from "react-icons/fi";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user);

  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/login");
  };

  useEffect(() => {
    if (isPending) return;

    if (!user) {
      router.push("/login");
    }
  }, [user, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-2xl">
        <div className="bg-linear-to-r from-primary to-secondary p-6 rounded-t-2xl text-white text-center">
          <h2 className="text-3xl font-bold">My Profile</h2>
          <p className="text-sm opacity-80 mt-3">{user?.name} </p>
        </div>

        <div className="p-6 flex flex-col items-center gap-4">
          <div className="avatar">
            <div className="w-20 rounded-full bg-linear-to-r from-primary to-secondary flex items-center justify-center text-white font-bold overflow-hidden">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt="user"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-6xl">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
          </div>

          <div className="w-full space-y-3 mt-4">
            <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
              <FiUser className="text-primary text-xl" />
              <div>
                <p className="text-xs opacity-70">Name</p>
                <p className="font-semibold">{user?.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
              <FiMail className="text-primary text-xl" />
              <div>
                <p className="text-xs opacity-70">Email</p>
                <p className="font-semibold">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <button
              className="btn btn-primary btn-sm mt-4 w-32"
              onClick={() => router.push("/my-profile/update-profile")}
            >
              <FiEdit />
              Update
            </button>

            <button
              className="btn btn-error btn-sm mt-4 w-32"
              onClick={handleLogout}
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
