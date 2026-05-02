const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://online-book-borrowing-platform-theta.vercel.app/data.json",
  );
  const books = await res.json();

  const book = books.find((b) => b.id == id);
  console.log(book);

  return (
    <div>
      <h1>Photo Details</h1>
    </div>
  );
};

export default BooksDetailsPage;
