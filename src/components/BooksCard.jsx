"use client";

import Image from "next/image";
import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import "animate.css";

const BooksCard = ({ book }) => {
  return (
    <div className="animate__animated animate__fadeInUp p-10 group w-full bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col">
      <figure className="relative w-full h-70 flex items-center justify-center bg-gray-50 p-10 rounded-xl overflow-hidden">
        <Image
          src={book.image_url}
          alt={book.title}
          width={180}
          height={260}
          className="object-cover h-full w-auto rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-2 right-3 px-3 py-1 text-xs font-medium badge badge-outline badge-info">
          {book.category}
        </span>
      </figure>

      <div className="p-5 flex flex-col grow">
        <h2 className="text-lg md:text-xs font-semibold text-gray-900">
          {book.title}
        </h2>

        <div className="mt-auto pt-5">
          <Link
            href={`/all-books/${book.id}`}
            className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm py-3 rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg active:scale-95"
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
