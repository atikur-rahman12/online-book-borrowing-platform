import React from "react";
import Marquee from "react-fast-marquee";

const NewArrivals = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-theta.vercel.app/data.json",
  );
  const newArrivals = await res.json();

  return (
    <div className="w-full overflow-hidden bg-[#0B0F1A] text-white py-4 border-gray-800">
      <Marquee pauseOnHover={true} speed={100}>
        <div className="flex whitespace-nowrap animate-scroll">
          {newArrivals.map((newArrival) => (
            <span className="mx-8" key={newArrival.id}>
              New Arrivals: {newArrival.title} | Special Discount on Memberships
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default NewArrivals;
