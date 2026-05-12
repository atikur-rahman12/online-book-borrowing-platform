"use client";

import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import "animate.css";
import Image from "next/image";

const BooksCard = ({ book }) => {
  return (
    <div className="animate__animated animate__fadeInUp group w-full rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden">
      <figure className="relative w-full h-56 flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute w-52 h-52 bg-indigo-400/20 rounded-full blur-3xl top-6 right-6 group-hover:scale-110 transition"></div>

        <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-white/20"></div>

        {/* Book image wrapper (premium floating effect) */}
        <div className="relative z-10 p-3 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-white/40 transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
          <Image
            src={book.image}
            alt={book.title}
            width={160}
            height={240}
            className="object-cover h-30 w-auto"
          />
        </div>

        <span className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full bg-white/70 backdrop-blur-md text-blue-700 shadow-md border border-white/40">
          {book.status_badge}
        </span>
      </figure>

      <div className="p-6 flex flex-col grow">
        <h2 className="text-xl font-bold text-gray-900 text-center tracking-tight">
          {book.title}
        </h2>

        <p className="text-sm text-gray-500 mt-3 text-center line-clamp-3">
          {book.description}
        </p>

        <div className="mt-4 flex justify-center">
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
            📚 Total Departments: {book.total_departments}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={`/all-books/${book.id}`}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Explore Now
            <LuSquareArrowOutUpRight className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
