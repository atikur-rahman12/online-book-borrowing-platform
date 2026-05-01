"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `relative px-2 py-1 transition-all duration-300 hover:text-blue-400 
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-gradient-to-r 
     after:from-blue-400 after:to-cyan-400 
     after:transition-all after:duration-300 hover:after:w-full ${
       pathname === path ? "text-blue-400 after:w-full" : "text-gray-600"
     }`;

  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="navbar container mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start flex-1">
          {/* Mobile Menu */}
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>

            <ul className="menu menu-sm dropdown-content absolute bg-base-100 rounded-box z-[100] mt-3 w-52 p-3 shadow-lg">
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

          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost text-xl flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Book Store
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal px-1 gap-6">
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

        {/* RIGHT */}
        <div className="navbar-end flex-1 justify-end flex items-center gap-3">
          {/* Logout */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-medium shadow-md hover:scale-105 transition-all">
            <FiLogOut />
            Logout
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
