import React from "react";

import Card from "./Card";

import data from "./data.js";

import Number from "./Number";

import "../styles/globals.css";

import "../../public/cardimages/card1.svg";

const BestChoiceContainer = () => {
  const cardDataArray = Object.values(data);

  return (
    <div className="lg:w-full lg:mx-auto lg:bg-[#F2FFF0] lg:text-black lg:m-5 lg:pt-16 lg:pb-16 lg:leading-0 sm:w-full sm:bg-[#F2FFF0] sm:m-0 sm:pt-10 sm:pb-5 xs:text-black xs:w-full xs:bg-[#F2FFF0] xs:m-1 xs:pt-12 xs:pb-5  ">
      <h3
        className="lg:mx-32 lg:my-5 lg:w-1/2 lg:text-3xl lg:font-inter lg:leading-0 lg:font-bold sm:mx-3 sm:text-4xl sm:font-inter sm:leading-normal sm:font-bold sm:w-3/4 sm:mb-0 sm:ml-16 xs:mx-3 xs:text-xl xs:font-inter xs:leading-normal xs:font-bold xs:w-2/3 xs:mb-2 xs:ml-8"
        style={{ color: "#000000" }}
      >
        What makes us the best choice for a career in Pharma?
      </h3>

      <div className="lg:grid-cols-4 lg:grid lg:gap-2 lg:mx-32 sm:flex sm:gap-1 sm:flex-col sm:mx-8 xs:flex xs:gap-2 xs:flex-col xs:mx-8">
        {/* First row */}

        {cardDataArray.slice(0, 4).map((cardData) => (
          <div key={cardData.id} className="lg:w-full ">
            <Card cardData={cardData} />
          </div>
        ))}

        {/* Second row */}

        <div className="lg:col-span-1 ">
          <Card cardData={cardDataArray[4]} />
        </div>

        <div className="lg:col-span-3 lg:mx-1 lg:my-1 lg:h-64 ">
          <Number />
        </div>
      </div>
    </div>
  );
};

export default BestChoiceContainer;
