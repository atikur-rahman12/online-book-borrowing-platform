"use client";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import google from "@/assets/google1.jpg";
import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

const LoginClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Invalid Email or Password", {
        style: {
          background: "rgba(255, 0, 0, 0.12)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 0, 0, 0.3)",
          color: "#fff",
          borderRadius: "16px",
        },
      });
      return;
    }

    if (res) {
      toast.success("Login Successful", {
        style: {
          background: "rgba(34, 197, 94, 0.12)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(34, 197, 94, 0.3)",
          color: "#fff",
          borderRadius: "16px",
        },
      });
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
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-sm text-gray-300 mt-2">
            Login to your account to continue
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label className="label text-gray-200">
              Email <span className="text-red-500 text-sm">*</span>{" "}
            </label>
            <input
              type="email"
              placeholder="Enter Your E-mail"
              name="email"
              className="input input-bordered w-full bg-white/10 text-white placeholder-gray-400 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Email Field Is Required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="label text-gray-200">
              Password <span className="text-red-500 text-sm">*</span>{" "}
            </label>
            <input
              type={isShowPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              name="password"
              className="input input-bordered w-full bg-white/10 text-white placeholder-gray-400 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password Field Is Required",
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

          <div className="flex justify-end">
            <a className="text-sm text-blue-400 hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          <button className="btn btn-primary w-full mt-2 text-white">
            Login
          </button>
        </form>

        <div className="divider text-gray-400">OR</div>

        <div className="flex gap-3">
          <button
            className="btn btn-outline flex-1 border-white/20 text-white hover:bg-white hover:text-black"
            onClick={handleGoogleSignIn}
          >
            <Image
              src={google}
              alt="google"
              height={25}
              width={25}
              className="rounded-full mr-2"
            />
            Continue With Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link
            href={"/register"}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginClient;
