import BooksCard from "../BooksCard";

const Books = () => {
  return (
    <div className="bg-[#0F172A]">
      <div className="container mx-auto py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
          Discover Your Next Read -{" "}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <BooksCard />
        </div>
      </div>
    </div>
  );
};

export default Books;
