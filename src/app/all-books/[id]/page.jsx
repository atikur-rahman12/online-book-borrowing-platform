import Image from "next/image";
import Link from "next/link";
import BorrowButton from "../BorrowButton";
import { FaStar, FaGlobe, FaCalendarAlt, FaLock } from "react-icons/fa";

const Department = async ({ params, searchParams }) => {
  const { id } = await params;
  const { unauthorized } = await searchParams;
  const isUnauthorized = unauthorized === "true";

  let books = [];

  try {
    const res = await fetch(
      "https://online-book-borrowing-platform-tawny.vercel.app/books.json",
      { cache: "no-store" },
    );
    const contentType = res.headers.get("content-type");
    if (res.ok && contentType && contentType.includes("application/json")) {
      books = await res.json();
    }
  } catch (error) {
    console.error("Error fetching book details during build/runtime:", error);
  }

  const book = books.find((b) => String(b.id) === String(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-gray-300 text-2xl font-semibold">
        Book not found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-linear-to-br from-[#020617] via-[#0F172A] to-[#020617] py-16 px-4 flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full rounded-3xl overflow-hidden border border-slate-700/40 bg-[#1E293B]/20 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.7)] hover:border-slate-700/80 transition-all duration-500">
        <div className="grid md:grid-cols-12 gap-8 p-6 md:p-12">
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative group p-4 bg-[#1E293B]/40 rounded-3xl border border-slate-700/30 shadow-2xl max-w-75 w-full aspect-3/4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-600/30">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(max-w-768px) 100vw, 300px"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#020617]/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                {book.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black leading-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mt-3">
                {book.title}
              </h1>
              <p className="text-base md:text-lg text-slate-400 mt-2">
                By{" "}
                <span className="text-blue-400 font-semibold tracking-wide hover:underline cursor-pointer">
                  {book.author}
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
                <FaStar className="text-[11px]" />
                <span>{book.rating?.toFixed(1)} Rating</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {book.stock > 0
                    ? `${book.stock} Copies Left`
                    : "Out of Stock"}
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base border-l-2 border-blue-500/30 pl-4 py-1 bg-blue-500/1">
              {book.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs md:text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <FaGlobe className="text-slate-500 text-base" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Language
                  </p>
                  <p className="font-semibold text-slate-200 capitalize">
                    {book.language}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <FaCalendarAlt className="text-slate-500 text-base" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Published
                  </p>
                  <p className="font-semibold text-slate-200">
                    {book.publishedYear}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <div>
                <p className="text-xs text-slate-500 font-medium">
                  Purchase Value
                </p>
                <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400">
                  ${book.price?.toFixed(2)}
                </p>
              </div>
              <div className="flex gap-4">
                <BorrowButton disabled={book.stock === 0} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isUnauthorized && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-md p-8 rounded-3xl bg-slate-900/90 border border-slate-700/60 shadow-[0_0_50px_rgba(59,130,246,0.2)] text-center transform scale-100 transition-all duration-300">
            <div className="flex justify-center mb-5">
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full shadow-xl">
                <FaLock className="text-3xl animate-bounce" />
              </div>
            </div>

            <h3 className="text-2xl font-black text-white mb-2 tracking-wide">
              Access Denied
            </h3>

            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              This is a private page. Please sign in to your account to unlock
              full access to this book's details.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="w-full sm:w-1/2">
                <button className="w-full px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-600 bg-slate-800/40 text-slate-300 font-semibold text-sm transition-all duration-300">
                  Go Back
                </button>
              </Link>
              <Link href="/login" className="w-full sm:w-1/2">
                <button className="w-full px-5 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-300">
                  Login Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Department;
