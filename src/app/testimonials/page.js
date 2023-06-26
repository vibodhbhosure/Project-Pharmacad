import React from "react";
import TestimonialsCard from "../../components/TestimonialsCard"
import data from "../../components/testimonials_data"
import "../../styles/globals.css";
import Footer from "@/components/footer";

export default function TestimonialsPage() {
    const testimonialDataArray = Object.values(data);

    // console.log(testimonialDataArray);
    return (
        <>
        <div className="w-full  bg-white  lg:w-full pb-10 lg:bg-white  ">
            <div className="mx-10 pt-10 lg:mx-56 lg:pt-20">
                <div className="text-black font-inter font-bold text-3xl">Testimonials</div>
                <div className="text-black font-inter text-xl my-2 lg:text-black lg:font-inter lg:text-lg sm:text-[##4F4F4F] flex flex-row"> <span className="px-2">━━  </span> <span> Here’s what our students say about us </span></div>
                <div className="flex flex-col">
                    {testimonialDataArray.slice(0, 3).map((cardData) => (
                        <div key={cardData.id} className="lg:w-full ">
                            <TestimonialsCard cardData={cardData} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
};