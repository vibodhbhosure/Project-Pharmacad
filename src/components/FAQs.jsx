"use client";
import React, { useState } from "react";

const Faq = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    return (
        <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="md:mb-0 mb-8 md:text-center text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-bold">Your FAQ's - answered by us</h1>


            <div className="lg:w-8/12 w-full mx-auto">
                {/* <!-- Question 1 --> */}
                <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                <div className="w-full md:px-6  ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className=" ">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> When is the right time to start my prep for GPAT/NIPER?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen(!open)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Usually, students who have aspirations to gain a Master’s degree from India itself, start their preparations for GPAT/NIPER from the second year or third year. The sooner you join, the better it is because practicing concepts over and over helps you gain a competitive advantage.</p>
                    </div>
                </div>

                {/* <!-- Question 2 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q2.</span>If I am a second-year B.Pharm Student, would I be able to cope up with the advanced syllabus of GPAT?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen2(!open2)}>
                            <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">We will teach the second-year students to study smart. Our teachers work sincerely on simplifying the learnings, they’ll also motivate you to aspire big. In fact, after the first year of the struggle, the second-year students score better in the later semesters.</p>
                    </div>
                </div>

                {/* <!-- Question 3 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q3.</span>
                                Do you conduct career counseling sessions? If yes, is there an additional charge?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen3(!open3)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open3 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Yes, we take pride in guiding and molding our students in the right direction because that’s how a learning institute should operate. Always thinking about the student’s betterment. Besides, we do this voluntarily and do not charge for it.</p>
                    </div>
                </div>

                {/* <!-- Question 4 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6  ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q4.</span>
                                Do you have online platforms for continuous learning?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen4(!open4)}>
                            <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open4 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">RYes, we do have a mobile application where a student can revisit the concepts. Those are pre-recorded videos recorded by our faculty. Online test series for GPAT, NIPER, and all entrance exams covering over 10,000 MCQs are included in the application. So, head on to the play store and check it out. <a href="#" className="text-sky-500">Download our App now!</a></p>
                    </div>
                </div>

                {/* <!-- Question 5 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q5.</span>
                                Do you provide coaching for semesters?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen5(!open5)}>
                            <svg className={"transform " + (open5 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open5 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Yes, we have a dedicated faculty for semester coaching for B.Pharmacy, D.Pharmacy as per the PCI syllabus. <a href="#" className="text-sky-500">Download our App now!</a></p>
                    </div>
                </div>

                <hr className=" w-full lg:mt-10 my-8" />
            </div>
        </div>
    );
};

export default Faq;
