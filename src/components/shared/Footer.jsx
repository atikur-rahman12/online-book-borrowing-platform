import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-14 pb-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h1 className="text-2xl font-bold tracking-wide bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            BookStore
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your modern online book borrowing platform. Explore, read, and enjoy
            thousands of books anytime.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Books</li>
            <li className="hover:text-white transition">Membership</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">Help Center</li>
            <li className="hover:text-white transition">Terms & Conditions</li>
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">FAQ</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-700 transition hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-linear-to-tr from-pink-500 via-red-500 to-yellow-500 transition hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BookStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
