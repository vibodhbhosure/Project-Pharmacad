import React from "react";
import Image from "next/image";
import Rectangle364 from "../../public/Rectangle364.svg";
import Rectangle323 from "../../public/Rectangle323.svg";

const About = () => {
  return (
    <div className="2xl:container  bg-lime-50 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            India’s Best Coaching Class for M. Pharmacy, MBA entrance exams &
            Abroad Studies for Pharmacy students. Experts in GPAT, NIPER, BITS,
            Manipal, ICT & other entrance exams, also MBA entrance  (CAT / NMAT
            / CET / SNAP / XAT / CMAT, etc.) exams. More than 30 tutors &
            content creators from India’s top ranked institutes like NIPER,
            BITS, ICT, BCP, Punjab University etc., working together to provide
            you the best & quality education via offline & online platform.
          </p>
          <p className="text-base leading-6 text-gray-600 mt-8">We offer</p>
          <ul className="list-disc list-inside">
            <li className="font-semibold text-base leading-6 text-gray-600 ">
              15,000+ plus MCQs with explanations
            </li>
            <li className="font-semibold text-base leading-6 text-gray-600 ">
              More than 700+ videos
            </li>
            <li className="font-semibold text-base leading-6 text-gray-600 ">
              Detailed & conscised notes & synopsis
            </li>
            <li className="font-semibold text-base leading-6 text-gray-600 ">
              E-books
            </li>
          </ul>
          <p className="font-normal text-base leading-6 text-gray-600 mt-11">
            Pharmacad also provides Industrial training, career counseling, B.
            Pharmacy & D. Pharmacy coaching, industrial affiliated certificate
            courses like Pharmacovigilance, Intellectual Property Rights,
            Regulatory Affairs, Clinical Research Management etc.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="w-full lg:w-8/12">
            <Image
              className="w-auto h-auto"
              src={Rectangle364}
              alt="SVG image"
            />
            <Image
              className="w-auto h-auto my-5 "
              src={Rectangle323}
              alt="SVG image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
