"use client";

import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import "animate.css";
import Image from "next/image";

const BooksCard = ({ book }) => {
  return (
    <div className="animate__animated animate__fadeInUp group w-full rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden">
      {/* Top Image / Visual Area */}
      <figure className="relative w-full h-52 flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Floating Glow Effect */}
        <div className="absolute w-40 h-40 bg-blue-400/20 rounded-full blur-3xl top-5 right-5 group-hover:scale-110 transition"></div>

        {/* <Image
          src={book.image}
          alt={book.title}
          width={180}
          height={260}
          className="object-cover h-full w-auto rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
        /> */}

        {/* Badge */}
        <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white shadow-md">
          {book.status_badge}
        </span>
      </figure>

      {/* Content */}
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

        {/* Button */}
        <div className="mt-auto pt-6">
          <Link
            href={`/all-books/${book.id}`}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            View Details
            <LuSquareArrowOutUpRight className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
