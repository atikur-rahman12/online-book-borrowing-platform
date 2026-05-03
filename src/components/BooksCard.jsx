"use client";

import Image from "next/image";
import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const BooksCard = ({ book }) => {
  return (
    <div className="group w-full bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
      {/* Image */}
      <figure className="flex justify-center items-center pt-6">
        <Image
          src={book.image_url}
          alt={book.title}
          width={200}
          height={300}
          className="object-cover rounded-xl shadow-lg"
        />
      </figure>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 line-clamp-1">
          {book.title}
        </h2>

        {/* Button */}
        <div className="mt-auto pt-4">
          <Link
            href={`/all-books/${book.id}`}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-sm py-3 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105"
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
