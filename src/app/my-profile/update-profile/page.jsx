"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSave, FiUser, FiImage } from "react-icons/fi";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdate = async () => {
    try {
      await authClient.updateUser({
        name,
        image: imageUrl,
      });

      router.push("/my-profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-[#0F172A] to-[#1E293B] flex items-center justify-center p-6">
      <div className="card w-full max-w-md bg-[#0F172A] shadow-xl border border-base-300 rounded-2xl">
        <div className="p-6 text-center border-b border-base-300">
          <h2 className="text-3xl font-bold tracking-tight">Update Profile</h2>
          <p className="text-sm opacity-70 mt-1">
            Keep your profile information updated
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2 font-medium">
                <FiUser /> Name
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text flex items-center gap-2 font-medium">
                <FiImage /> Upload Image
              </span>
            </label>

            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              onChange={handleImageChange}
            />
          </div>

          <button
            onClick={handleUpdate}
            className="btn btn-primary w-full mt-2 gap-2 rounded-xl"
          >
            <FiSave />
            Update Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
