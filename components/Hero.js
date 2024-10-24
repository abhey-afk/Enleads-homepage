import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="font-bold text-4xl lg:text-6xl">
          Learn Business by Doing Business
        </h1>
        <h1 className="font-bold text-4xl lg:text-6xl bg-[#1c291b] text-[#fff] inline-block">
          Across the World
        </h1>

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Global{" "}
          <span className="font-bold text-lg">
            Bachelors & Masters Programs
          </span>{" "}
          in Management & Technology
        </p>

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Early Scholarship Deadline -{" "}
          <span className="font-bold text-lg">November 15, 2024</span>
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row my-4">
          <button className="bg-[#1c291b] text-white font-bold py-4 px-4 rounded inline-flex items-center">
            <span className="text-[#b8ef43] text-sm">EXPLORE PROGRAMS</span>
            <span className="ml-2 text-[#b8ef43] text-sm">↘</span>
          </button>
        </div>

        <div className="flex items-center my-4 sm">
          <img
            src="https://cdn.prod.website-files.com/657707dae0e9e774accbaa50/6577f4f0e44086645cb51d0f_star-lines.svg"
            alt="Description"
            className="w-6 h-6 rounded-full object-cover mr-4"
          />
          <div className="text-gray-800">
            <p className="text-sm">Banjour</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <Image
          src="/meet-tetr.webp"
          alt="menu"
          width={1000}
          height={1000}
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Hero;
