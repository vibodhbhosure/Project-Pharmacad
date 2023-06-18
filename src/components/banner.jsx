import React from "react";
import Image from "next/image";
import a1 from "../../public/a1.svg";
import googleplay from "../../public/googleplay.svg";
const Banner = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="bg-[#ffff] px-6 lg:px-16 rounded-xl ">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
            <div className="flex flex-col gap-5 lg:gap-10">
              <p className=" text-xs sm:text-1xl md:text-1xl lg:text-2xl font-medium">
                #1 COACHING CLASSES FOR PHARMACY IN MUMBAI
              </p>

              <p className=" text-4xl font-extrabold sm:text-7xl md:text-4xl lg:text-6xl">
                YOUR Dreams.
              </p>
              <p className=" text-4xl font-extrabold sm:text-7xl md:text-4xl lg:text-6xl -mt-4">
                OUR Mission.
              </p>
              <div className="flex flex-row space-x-4">
                <button className="flex flex-row justify-center items-center py-3 px-3 gap-2 w-25 h-10 border-solid border-2 border-indigo-600 bg-blue-700 shadow-md rounded-md text-white">
                  Book free demo
                </button>

                <button className="flex flex-row justify-center items-center py-3 px-3 gap-2 w-25 h-10 border-solid border-2 border-indigo-600 bg-white text-blue-600 shadow-md rounded-md ">
                  View all courses
                </button>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-[#393939]">
                Pharmacad is also available on the Playstore!
              </p>

              <Image
                className="px-3 py-1.5 flex gap-2 items-center rounded-xl"
                src={googleplay}
                width={200}
                height={90}
              />
            </div>
            <div>
              <Image className="left-align" src={a1} width={750} height={370} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
