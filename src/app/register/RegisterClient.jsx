"use client";

import google from "@/assets/google1.jpg";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterClient = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegister = async (data) => {
    const { name, email, photoURL, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photoURL,
    });

    if (error) {
      toast.error(error.message || "Please Enter a Valid Email Address.", {
        style: {
          background: "rgba(239, 68, 68, 0.15)",
          border: "1px solid rgba(239, 68, 68, 0.4)",
          backdropFilter: "blur(12px)",
        },
      });
      return;
    }

    if (res) {
      toast.success("Registration Successful ", {
        style: {
          background: "rgba(34, 197, 94, 0.15)",
          border: "1px solid rgba(34, 197, 94, 0.4)",
          backdropFilter: "blur(12px)",
        },
      });

      await authClient.signOut();

      router.push("/login");
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Create Account </h2>
          <p className="text-sm text-gray-300 mt-2">Register to get started</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          <div>
            <label className="label text-gray-200">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="input input-bordered w-full bg-white/10 text-white placeholder-gray-400 border-white/20 focus:ring-2 focus:ring-blue-500"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="label text-gray-200">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input input-bordered w-full bg-white/10 text-white placeholder-gray-400 border-white/20 focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="label text-gray-200">Photo URL</label>
            <input
              type="text"
              placeholder="Enter Photo URL"
              name="photoURL"
              className="input input-bordered w-full bg-white/10 text-white placeholder-gray-400 border-white/20 focus:ring-2 focus:ring-blue-500"
              {...register("photoURL")}
            />
          </div>

          <div className="relative">
            <label className="label text-gray-200">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              name="password"
              className="input input-bordered w-full bg-white/10 text-white placeholder-gray-400 border-white/20 focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {" "}
              {isShowPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="btn btn-primary w-full mt-2 text-white">
            Register
          </button>
        </form>

        <div className="divider text-gray-400">OR</div>

        <div>
          <button
            className="btn btn-outline w-full border-white/20 text-white hover:bg-white hover:text-black"
            onClick={handleGoogleSignIn}
          >
            <Image
              src={google}
              alt="google"
              height={25}
              width={25}
              className="rounded-full mr-2"
            />
            Register With Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href={"/login"} className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterClient;
