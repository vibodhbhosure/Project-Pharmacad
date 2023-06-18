import React from "react";
import TestimonialsCard from "./TestimonialsCard"
import data from "../testimonials_data.js";
import "../src/app/globals.css";

const TestimonialsContainer= () => {
  const testimonialDataArray = Object.values(data);

  console.log(testimonialDataArray);
  return(
    <div className="xl:w-full   bg-white ">
    <div className="mx-32 pt-20">
        <div className="text-black font-inter font-bold text-3xl">Testimonials</div>
        <div className="text-black font-inter text-lg">━━ Here’s what our students say about us </div>
        <div className="flex flex-col">
        {testimonialDataArray.slice(0, 3).map((cardData) => (
          <div key={cardData.id} className="lg:w-full ">
            <TestimonialsCard cardData={cardData} />
          </div>
        ))}

          </div>
        </div>
    </div>

    
  )
}

export default TestimonialsContainer;