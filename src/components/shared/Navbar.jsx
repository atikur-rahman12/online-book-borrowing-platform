"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const pathname = usePathname();

  const linkStyle = (path) =>
    `relative px-2 py-1 transition-all duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full ${
      pathname === path
        ? "text-blue-400 after:w-full"
        : "text-gray-600 dark:text-gray-300"
    }`;

  return (
    <div className=" bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-3 shadow-lg">
              <li>
                <Link className={linkStyle("/")} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={linkStyle("/all-books")} href="/all-books">
                  All Books
                </Link>
              </li>
              <li>
                <Link className={linkStyle("/my-profile")} href="/my-profile">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="btn btn-ghost p-7 text-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-blue-500 via-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">B</span>
            </div>

            <span className="text-xl font-bold tracking-wide bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Book Store
            </span>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <Link className={linkStyle("/")} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={linkStyle("/all-books")} href="/all-books">
                All Books
              </Link>
            </li>
            <li>
              <Link className={linkStyle("/my-profile")} href="/my-profile">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {isPending ? (
          <div className="navbar-end">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        ) : user ? (
          <div className="navbar-end flex items-center gap-3">
            <h2>{user.name}</h2>
            <div className="avatar">
              <div className="w-9 rounded-full bg-linear-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold overflow-hidden">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt="user"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-lg">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              onClick={async () => await authClient.signOut()}
            >
              <FiLogOut className="text-lg" />
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
