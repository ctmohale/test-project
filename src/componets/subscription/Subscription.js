import React from "react";

function Subscription() {
  return (
    <section className="subscription">
      <div className="subscription_sub">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-1 p-5 md:p-20">
          {/* Image Section */}
          <div className="relative flex items-center justify-center">
            <img
              src="../assets/Footer Image.png"
              alt="Turn Your Work Into Revenue"
              className="w-full h-auto" // Ensure the image scales correctly
            />
          </div>

          {/* Text Section */}
          <div className="relative p-9 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl mb-4 text-[#B4CAD5]">
              Get only the
              <span className="text-[#F4BF31]"> Best </span>
            </h1>
            <p className="text-base md:text-lg text-[#FFFFFF]">
              Subscribe to HIVE and gain access to a library of unique and
              beautiful fully edited videos contributed by video editors from
              all around the world!!
            </p>
            <button className="btn rounded-lg w-[150px] mt-4 bg-[#F4BF31] text-[#542D00]">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
