import React from "react";
import Marquee from "react-fast-marquee";

const NewArrivals = () => {
  const books = [
    "The Shadow of Tomorrow",
    "Beyond the Horizon",
    "Echoes of the Past",
    "The Silent Alchemist",
    "Mastering Next.js 2026",
    "Chronicles of Web Dev",
    "The Cyber Fortress",
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-950 border-y border-slate-800/60 py-4 flex items-center">
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-slate-950 font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-r-lg shadow-lg shadow-blue-500/10 z-10 shrink-0 select-none">
        New Arrivals
      </div>

      <Marquee
        pauseOnHover={true}
        speed={60}
        gradient={true}
        gradientColor="#020617"
      >
        <div className="flex items-center gap-12 pr-12 select-none">
          {books.map((title, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-300 tracking-wide hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                {title}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default NewArrivals;
