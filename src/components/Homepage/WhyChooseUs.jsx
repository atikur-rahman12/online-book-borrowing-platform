import React from "react";

const Features = async () => {
  let features = [];

  try {
    const res = await fetch(
      "https://online-book-borrowing-platform-tawny.vercel.app/features.json",
      { cache: "no-store" },
    );
    if (res.ok) {
      features = await res.json();
    }
  } catch (error) {
    console.error("Error fetching features:", error);
  }

  return (
    <section className="w-full bg-[#020617] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-400 mt-4 tracking-tight">
            Key Features of Our Platform
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Explore the powerful tools and vast resources designed to elevate
            your reading and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/60 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500" />

              <div className="w-14 h-14 flex items-center justify-center text-3xl rounded-2xl bg-slate-800/50 border border-slate-700/30 shadow-inner group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500 select-none">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mt-6 tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400 mt-3 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
