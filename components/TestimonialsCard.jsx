import React from "react";
import Image from "next/image";
import svg1 from "../public/cardimages/Burhanuddin_Kagalwala.svg";
import svg2 from "../public/cardimages/Nichiket_Dandekar.svg";
import svg3 from "../public/cardimages/Archana_Rajadhyax.svg";
 
const svgMap = {
  1: svg1,
  2: svg2,
  3: svg3,
};

const TestimonialsCard = ({ cardData }) => {
  if (!cardData) {
    return null; // Return null or handle the case when cardData is undefined
  }

  const {id,testimonial, name, rank } = cardData;
  const svg = svgMap[id];

  return(
<div className="bg-white border border-gray-300 border-opacity-60 shadow-md rounded-lg h-max-45 text-black flex flex-row">
            <div className="flex flex-col">
            <div>{testimonial}</div>
            <div>{name}</div>
            <div>{rank}</div>
            </div>
            <div className="flex flex-col">
            <Image
            className="lg:mx-5 lg:mt-5 lg:w-16 xl:mx-5 xl:mt-5 xl:w-16 sm:mt-5  sm:pt-10  lg:pt-0 xl:pt-0 sm:ml-6 sm:w-28 xs:mt-5 xs:pt-4 xs:ml-6 xs:w-16"
            src={svg}
            alt={name}
          />
            </div>
        </div>

  );
}
  export default TestimonialsCard;