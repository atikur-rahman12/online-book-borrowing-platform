import React from "react";
import Marquee from "react-fast-marquee";

const NewArrivals =  () => {



  return (
    <div className="w-full overflow-hidden bg-[#0B0F1A] text-white py-4 border-gray-800">
      <Marquee pauseOnHover={true} speed={100}>
        <div className="flex whitespace-nowrap animate-scroll">
          <span>Number One Book</span>
        </div>
      </Marquee>
    </div>
  );
};

export default NewArrivals;
