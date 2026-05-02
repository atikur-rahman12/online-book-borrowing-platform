import Image from "next/image";
import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const BooksCard = ({ book }) => {
  return (
    <div className="group w-full bg-white/90 backdrop-blur-md border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2">
      <figure className="flex justify-center items-center px-10 pt-10">
        <Image
          src={book.image_url}
          alt={book.title}
          width={200}
          height={300}
          className="w-50 h-50 object-contain rounded-md"
        />
      </figure>

      <div className="p-5 flex flex-col grow">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 line-clamp-1">
          {book.title}
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium text-gray-800">Author:</span>{" "}
          {book.author}
        </p>

        <p className="text-sm text-gray-500 line-clamp-2 mt-2">
          {book.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-4 py-1 text-xs md:text-sm font-medium rounded-full bg-linear-to-r from-pink-500 to-rose-500 text-white">
            {book.category}
          </span>

          <span className="px-4 py-1 text-xs md:text-sm font-semibold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            {book.available_quantity} Available
          </span>
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={`/all-books/${book.id}`}
            className="w-full btn btn-primary btn-sm py-4 rounded-full hover:scale-105 transition-transform"
          >
            View Details <LuSquareArrowOutUpRight className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
