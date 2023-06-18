import React from "react";
import TestimonialsCard from "./TestimonialsCard"
import data from "../testimonials_data.js";
import "../src/app/globals.css";

const TestimonialsPage = () => {
    const testimonialDataArray = Object.values(data);

    console.log(testimonialDataArray);
    return (
        <div className="w-full  bg-white  lg:w-full pb-20 lg:bg-white  ">
            <div className="mx-10 pt-20 lg:mx-56 lg:pt-20">
                <div className="text-black font-inter font-bold text-3xl">Testimonials</div>
                <div className="text-black font-inter text-sm my-2 lg:text-black lg:font-inter lg:text-lg sm:text-[##4F4F4F]"> ━━ Here’s what our students say about us </div>
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

export default TestimonialsPage ;