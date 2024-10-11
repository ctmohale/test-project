import React from "react";

function Contributor() {
  return (
    <section className="contributor_section">
      {/* Wrapper for the contributor section with custom styling */}
      <div className="contributor_section_sub">
        {/* Card container with border and rounded corners for visual appeal */}
        <div className="card border-1 border-[#EEEDED33] m-10 sm:m-20 mt-0 mb-0 rounded-3xl">
          {/* Grid layout for content distribution; two columns for desktop, single column for mobile and tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-1 p-5 md:p-20">
            {/* Left Column: Text and Button Section */}
            <div className="relative flex flex-col justify-center">
              {/* Main heading with a highlighted section for emphasis */}
              <h1 className="text-4xl md:text-5xl mb-4 text-[#B4CAD5]">
                Turn <span className="text-[#F4BF31]">Your Work</span> <br />
                into
                <span className="text-[#F4BF31]"> Revenue</span>
              </h1>
              {/* Description paragraph providing context about the contribution opportunity */}
              <p className="text-base md:text-lg text-[#FFFFFF]">
                Sign up as an editor to gain access to our library of stock
                footage which you can use to create edits and resell on the Hive
                platform.
              </p>
              {/* Call-to-action button for signing up as a contributor */}
              <button className="btn w-[200px] rounded-lg  mt-4 mb-4 bg-[#F4BF31] text-[#542D00]">
                Become a Contributor
              </button>
            </div>
            {/* Right Column: Image Section */}
            <div className="relative flex items-center justify-center">
              <div className="image-card m-5 md:m-10">
                {/* Image showcasing the concept of turning work into revenue */}
                <img
                  src="../assets/Turn You Work Into Revenue Image.png"
                  alt="Turn Your Work Into Revenue"
                  className="inset-0 shadow-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contributor;
