"use client";

import { useEffect, useState } from "react";
import BooksCard from "@/components/BooksCard";
import { FaBookOpen } from "react-icons/fa";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(
        "https://online-book-borrowing-platform-theta.vercel.app/data.json",
      );
      const data = await res.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-[#0F172A] min-h-screen">
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          All Books Collection
        </h1>

        <div className="mb-10">
          <input
            type="text"
            placeholder="Search books by title..."
            className="w-full p-4 rounded-xl outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => <BooksCard key={book.id} book={book} />)
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-20 px-6">
              <div className="bg-white/10 p-6 rounded-full mb-6 shadow-lg">
                <FaBookOpen className="text-5xl text-gray-300" />
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                No Books Found
              </h2>

              <p className="text-gray-400 max-w-md mb-6">
                We couldn’t find any books matching{" "}
                <span className="text-white font-medium">{search}</span>. Try
                searching with a different title.
              </p>

              <button
                onClick={() => setSearch("")}
                className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
