import BooksCard from "@/components/BooksCard";

const AllBooksPage = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-theta.vercel.app/data.json",
  );
  const books = await res.json();

  return (
    <div className="bg-[#0F172A]">
      <div className="container mx-auto py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          All Books Are Here{" "}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-10">
          {books.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
