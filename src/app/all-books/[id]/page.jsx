import Image from "next/image";
import BorrowButton from "../BorrowButton";

const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://online-book-borrowing-platform-theta.vercel.app/data.json",
    { cache: "no-store" },
  );
  const books = await res.json();

  const book = books.find((b) => String(b.id) === String(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-gray-300 text-2xl font-semibold">
        Book not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#020617] via-[#0F172A] to-[#020617] py-12 px-4 mb-[-200]">
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)]">
        <div className="grid md:grid-cols-2 gap-10 p-6 md:p-12">
          <div className="flex justify-center items-center">
            <div className="relative group">
              <Image
                src={book.image_url}
                alt={book.title}
                width={320}
                height={420}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center text-white space-y-5">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {book.title}
            </h1>

            <p className="text-lg text-gray-300">
              By{" "}
              <span className="text-blue-400 font-semibold tracking-wide">
                {book.author}
              </span>
            </p>

            <p className="text-gray-400 leading-relaxed text-[15px] md:text-base">
              {book.description}
            </p>

            <div className="flex items-center gap-4 mt-4">
              <span className="px-5 py-2 bg-green-500/10 border border-green-400/30 text-green-400 rounded-full text-sm backdrop-blur-md">
                {book.available_quantity} Copies Available
              </span>
            </div>

            <div className="flex gap-4 mt-6">
              <BorrowButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;
