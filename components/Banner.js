import React from "react";

const Banner = () => {
  return (
    <div className="announcement-banner z-10 pt-[6px] pb-[6px] relative is-dark text-[#f3f7e1] bg-[#1c291b] text-center">
      UG Program Early Scholarship Deadline - 15 November, 2024
      <button className="bg-[#1c291b] text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <span className="text-[#b8ef43] text-sm">APPLY NOW</span>
        <span className="ml-2 text-[#b8ef43] text-sm">↗</span>
      </button>
    </div>
  );
};

export default Banner;
