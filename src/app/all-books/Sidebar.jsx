const categories = ["All", "Story", "Tech", "Science"];

const Sidebar = ({ setCategory, activeCategory }) => {
  return (
    <div className="w-full md:w-64 bg-white/5 p-5 rounded-2xl h-fit">
      <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>

      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCategory(category)}
            className={`text-left px-4 py-2 rounded-lg transition-all 
              ${
                activeCategory === category
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
