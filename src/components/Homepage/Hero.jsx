import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6 overflow-hidden bg-linear-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="bg-purple-600/20 blur-3xl rounded-full " />
      <div className="bg-blue-500/20 blur-3xl rounded-full" />

      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Your Digital Library for{" "}
          <span className="text-blue-400">Diploma Excellence</span>
        </h1>

        <p className="mt-5 text-gray-300 text-lg">
          Explore a complete collection of polytechnic books from all semesters
          and departments. Study anytime, anywhere with ease.
        </p>

        <div className="mt-8">
          <Link
            href="/all-books"
            className="inline-block px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-blue-500/30"
          >
            Browse Now →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
