"use client";

import { FaStar, FaGlobe, FaShoppingCart, FaCalendarAlt } from "react-icons/fa";

const BooksCard = ({ book }) => {
  const {
    title,
    author,
    category,
    publishedYear,
    price,
    stock,
    rating,
    image,
    description,
    language,
  } = book;

  return (
    <div className="group relative bg-[#1E293B]/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] flex flex-col h-full">
      {/* --- Image Container (Modified for Padding and Gorgeous Look) --- */}
      {/* p-4 বা p-5 ব্যবহার করে চারপাশ থেকে প্যাডিং দেওয়া হয়েছে */}
      <div className="p-4 pb-0">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Gradient Overlay (Slightly adjusted for padded look) */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-80" />

          {/* Category & Stock Badges (Position adjusted for padding) */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
            <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-blue-500 text-white rounded-full shadow-lg backdrop-blur-md bg-opacity-90">
              {category}
            </span>
            <span
              className={`px-2.5 py-0.5 text-[10px] font-medium rounded-full shadow-lg backdrop-blur-md bg-opacity-90 w-fit ${
                stock > 0
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
              }`}
            >
              {stock > 0 ? `${stock} In Stock` : "Out of Stock"}
            </span>
          </div>

          {/* Rating Badge (Position adjusted) */}
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg shadow-lg">
            <FaStar className="text-[11px]" />
            {rating.toFixed(1)}
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}

      {/* Content Section (Same as before) */}
      <div className="p-5 flex flex-col grow text-slate-200">
        <span className="text-xs text-blue-400 font-medium mb-1">{author}</span>
        <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 mt-2 line-clamp-2 grow">
          {description}
        </p>

        {/* Meta Info (Language & Year) */}
        <div className="flex items-center gap-4 my-4 pt-3 border-t border-slate-700/50 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <FaGlobe className="text-slate-500" />
            <span>{language}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-slate-500" />
            <span>{publishedYear}</span>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div>
            <p className="text-xs text-slate-500 font-medium">Price</p>
            <p className="text-xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400">
              ${price.toFixed(2)}
            </p>
          </div>

          <button
            disabled={stock === 0}
            className="p-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-300 shadow-md hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed group-hover:-translate-y-0.5"
          >
            <FaShoppingCart className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
