import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdCheck } from "react-icons/md";

function Hero() {
  return (
    <section className="hero-section mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full m-0 p-0">
        {/* Left Section */}
        <div className="p-10 sm:p-20 pb-0 pt-[50px] sm:pt-[100px]">
          <h1 className="hero-title text-6xl sm:text-6xl text-[#B4CAD5] w-full">
            <span>
              Your Ultimate <br /> Destination for
            </span>
            <br />
            <span className="text-[#F4BF31]">
            <b>High-Quality Edits</b>
            </span>
          </h1>

          {/* List */}
          <ul className="flex flex-col sm:flex-row gap-2 pt-10">
            <div className="flex items-center gap-1">
              <MdCheck size={20} className="text-white" />
              <li className="text-[#ffffff] border-b-[1px]">Royal-free</li>
            </div>
            <div className="flex items-center gap-1">
              <MdCheck size={20} className="text-white" />
              <li className="text-[#ffffff] border-b-[1px]">High Quality</li>
            </div>
          </ul>

          {/* Search Input */}
          <div className="relative mt-5">
            <input
              className="input_search text-white w-full shadow-lg p-[12px] rounded-md"
              placeholder="Search"
            />
            <IoSearchOutline
              size={20}
              className="absolute right-4 top-3 text-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="w-full grid grid-cols-2 sm:flex justify-between gap-1 mt-4">
            <button className="btn text-[70%] bg-[#B4CAD580] rounded-md text-[#F0FFFF] flex-1">
              Lifestyle
            </button>
            <button className="btn text-[70%] bg-[#B4CAD580] rounded-md text-[#F0FFFF] flex-1">
              Urban landscape
            </button>
            <button className="btn text-[70%] bg-[#B4CAD580] rounded-md text-[#F0FFFF] flex-1">
              Business
            </button>
            <button className="btn text-[70%] bg-[#B4CAD580] rounded-md text-[#F0FFFF] flex-1">
              People
            </button>
            <button className="btn text-[70%] bg-[#B4CAD580] rounded-md text-[#F0FFFF] flex-1">
              Technology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
