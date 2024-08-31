import React from "react";
import heroSectionImage from "../assets/heroSectionImage.png";

export const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0F2261] to-[#3E5EA9] py-20 h-[520px] px-4 md:flex items-center justify-between rounded-[24px] mt-8">
        {/* Left Section */}
        <div className="text-[#F7F8FF] md:w-1/2 pl-20">
          <h1 className="text-7xl font-bold mb-4 font-inter">
            Elevate your audio journey
          </h1>
          <p className="mb-6 text-lg font-inter">
            Experience Sound in Its Purest Form
          </p>
          <div className="flex space-x-4">
            <button className=" hover:bg-[#6385ee] hidden lg:block bg-[#406bd0] py-3 px-3 rounded-lg text-[#f7f8ff] text-lg font-semibold font-inter w-30 h-11 leading-3 hover:scale-95 transition-transform">
              Shop Now
            </button>
            <button className=" font-inter font-semibold text-white px-3 py-2  hover:text-[#4768d4] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src={heroSectionImage} // Replace with your image URL
            alt="Audio Equipment"
            className="w-[379px] h-[485px] mt-[34px] ml-[190px]"
          />
        </div>
      </div>
    </>
  );
};
