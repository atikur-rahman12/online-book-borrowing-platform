const WhyChooseUs = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-theta.vercel.app/features.json",
  );
  const features = await res.json();

  return (
    <section className="bg-[#0F172A] text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose Us</h2>
        <p className="text-gray-400 mb-10 text-sm md:text-base">
          We provide the best book borrowing experience with modern features.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
