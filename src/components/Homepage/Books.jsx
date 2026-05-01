import BooksCard from "../BooksCard";

const Books = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-theta.vercel.app/data.json",
  );
  const books = await res.json();

  const topBooks = books.slice(0, 4);

  return (
    <div className="bg-[#0F172A]">
      <div className="container mx-auto py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Discover Your Next Read -{" "}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {topBooks.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
