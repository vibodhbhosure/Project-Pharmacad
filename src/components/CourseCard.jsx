import React from "react";
import { FaAngleLeft, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
const CourseCard = ({ cardData }) => {
  if (!cardData) {
    return null; // Return null or handle the case when cardData is undefined
  }

  const { id, title, year, mode, status, desc, price } = cardData;

  return (
    <div className=" mt-7 h-full w-[310px] sm:w-[400px] md:[600px] lg:[310px] xl:w-[572px] mx-auto lg:mx-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md border-[#E5E5E5]">
      <div className="flex flex-col xl:flex-row mt-10 ml-10 pt-7">
        <span className=" font-medium text-2xl md:text-3xl ">
          {title}{" "}
          <span className=" font-bold text-2xl md:text-3xl">{year}</span>
        </span>
        <div className="flex flex-row">
          <span
            className={`box-border uppercase ${
              mode === "OFFLINE" ? "bg-[#F5752D] " : "bg-[#5BAD09]"
            } text-white m-auto p-1 ml-[0px] xl:ml-[72px] mt-3 xl:mt-[0px] font-semibold text-xs rounded-sm`}
          >
            {mode}
          </span>
          <span
            className={`${
              status === null ? "hidden" : "block"
            } uppercase m-auto p-1 px-2 font-medium text-xs bg-[#E8F0FC] ml-0.5 xl:ml-[50px] mt-3 xl:mt-[0px] rounded-sm`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className=" w-[272px] xl:w-[490px] bg-[#F5F5F5] mt-5 mx-auto xl:ml-10">
        <ul className="list-disc ml-5 p-5">
          {desc.map((item) => (
            <li
              key={id}
              className="font-medium font-montserrat text-xs mt-[6px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-5 sm:ml-16 xl:ml-10 mt-7">
        <button className=" box-border bg-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm text-white rounded-lg">
          Book a demo
        </button>
        <button className=" box-border border-2 border-[#3A47FB] text-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm rounded-lg ml-5">
          <div className="flex flex-row">
            <span>Enquire now</span>
            <span>
              {" "}
              <FaWhatsapp className="ml-1.5 text-lg" />
            </span>
          </div>
        </button>
        <button
          className={`${
            price === null ? "hidden" : ""
          } box-border bg-[#3A47FB] text-[white] shadow-xl m-auto p-3 font-semibold text-sm rounded-lg ml-12 mt-3 xl:mt-[0px]`}
        >
          Buy now <span className="text-[#f1f1f2] ml-1">|</span>
          <span className=" font-bold italic text-[15px] ml-1.5">{price}</span>
        </button>
      </div>
    </div>
  );
};
export default CourseCard;
