import React from "react";
import Image from "next/image";
import svg1 from "../public/cardimages/card1.svg";
import svg2 from "../public/cardimages/card2.svg";
import svg3 from "../public/cardimages/card3.svg";
import svg4 from "../public/cardimages/card4.svg";
import svg5 from "../public/cardimages/card5.svg";

const svgMap = {
  1: svg1,
  2: svg2,
  3: svg3,
  4: svg4,
  5: svg5,
};

const Card = ({ cardData }) => {
  if (!cardData) {
    return null; // Return null or handle the case when cardData is undefined
  }

  const { id, title, description } = cardData;
  const svg = svgMap[id];

  return (
    <div
      className="lg:w-241 xl:w-241 sm:m-6  sm:bg-white sm:rounded-xl xs:m-0  xs:bg-white xs:rounded-lg lg:bg-white lg:rounded lg:p-1 lg:pb-3 lg:m-1 lg:h-72 xl:bg-white xl:rounded xl:p-1 xl:pb-3 xl:m-1 xl:h-72 sm:max-h-full xs:max-h-full lg:max-h-full"
      style={{
        background: "#ffffff",
        filter: "drop-shadow(0px 8px 17.6079px #C2F0CC)",
      }}
    >
      <div className="lg:flex-col xl:flex-col">
        <div className="lg:pt-3 lg:pl-3 xl:pt-3 xl:pl-3">
          <Image
            className="lg:mx-5 lg:mt-5 lg:w-16 xl:mx-5 xl:mt-5 xl:w-16 sm:mt-5  sm:pt-10  lg:pt-0 xl:pt-0 sm:ml-6 sm:w-28 xs:mt-5 xs:pt-4 xs:ml-6 xs:w-16"
            src={svg}
            alt={title}
          />
        </div>
        <div
          className=" xl:px-4 xl:my-0 xl:py-2 xl:w-30 xl:text-xl xl:font-semibold xl:font-inter xl:mx-3 lg:px-4 lg:my-0 lg:py-2 lg:w-30 lg:text-base lg:font-semibold lg:font-inter lg:mx-3 sm:px-4 sm:py-2 sm:w-30 sm:my-2 sm:text-3xl sm:font-bold sm:font-inter sm:mx-3 xs:px-4 xs:py-2 xs:w-30 xs:my-0.5 xs:text-base xs:font-bold xs:font-inter xs:mx-3"
          style={{ color: "#000000" }}
        >
          {title}
        </div>
      </div>
      <div
        className=" xl:mx-7 xl:py-0 xl:text-black xl:font-montserrat xl:text-xs xl:font-thin xl:pb-0 xl:leading-5 xl:w-48 lg:mx-7 lg:py-0 lg:text-black lg:font-montserrat lg:text-[10px] lg:font-thin lg:pb-0 lg:leading-2 lg:w-32 sm:mx-7 sm:pb-4 xs:mx-7 xs:pb-4 sm:text-black sm:font-montserrat sm:text-2xl sm:font-thin sm:leading-relaxed sm:w-auto xs:w-auto xs:leading-relaxed xs:text-xs xs:font-thin xs:font-montserrat xs:text-black"
        style={{ color: "#000000" }}
      >
        {description}
      </div>
    </div>
  );
};

export default Card;
