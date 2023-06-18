import React from "react";

import Card from "./Card";

import data from "./data.js";

import Number from "./Number";

import "../styles/globals.css";

// import "../../public/cardimages";

const BestChoiceContainer = () => {
  const cardDataArray = Object.values(data);

  return (
    <div className="lg:w-full lg:mx-auto lg:bg-bestchoice lg:text-black lg:m-5 lg:pt-16 lg:pb-16 lg:leading-0 sm:w-full sm:bg-bestchoice sm:m-0 sm:pt-16 sm:pb-8 ">
      <h3
        className="lg:mx-32 lg:my-5 lg:w-1/2 lg:text-3xl lg:font-inter lg:leading-0 lg:font-bold sm:mx-10 sm:text-7xl sm:font-inter sm:leading-normal sm:font-bold sm:w-3/4 sm:mb-10 sm:ml-24"
        style={{ color: "#000000" }}
      >
        What makes us the best choice for a career in Pharma?
      </h3>

      <div className="lg:grid-cols-4 lg:grid lg:gap-2 lg:mx-32 sm:flex sm:gap-1 sm:flex-col sm:mx-20">
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
