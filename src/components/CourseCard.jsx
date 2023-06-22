import React from "react";
import { FaAngleLeft, FaWhatsapp} from "react-icons/fa";
import Image from "next/image";
const CourseCard = ({ cardData }) => {
    if (!cardData) {
      return null; // Return null or handle the case when cardData is undefined
    }
  
    const { id, title, year,mode, status,desc,price } = cardData;

    return (
        <div className=' mt-7 h-full w-[572px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md border-[#E5E5E5]'>
        <div className='flex flex-row mt-10 ml-10 pt-7'>
            <span className=' font-medium text-3xl '>{title} <span className=' font-bold text-3xl'>{year}</span></span>
            <span className={`box-border uppercase ${mode === 'OFFLINE' ? 'bg-[#F5752D] ' : 'bg-[#5BAD09]'} text-white m-auto p-1 ml-[72px] font-semibold text-xs rounded-sm`}>{mode}</span>
            <span className={`${status === null ? 'hidden' : 'block'} uppercase m-auto p-1 px-2 font-medium text-xs bg-[#E8F0FC] ml-[10px] rounded-sm`}>{status}</span>
        </div>
        <div className="w-[490px] bg-[#F5F5F5] mt-5 ml-10">
        <ul className="list-disc ml-5 p-5">
          {desc.map((item) => (
            <li key={id} className="font-medium font-montserrat text-xs mt-[6px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
        <div className='ml-10 mt-7'>
            <button className=' box-border bg-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm text-white rounded-lg'>Book a demo</button>
            <button className=' box-border border-2 border-[#3A47FB] text-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm rounded-lg ml-5'><div className="flex flex-row"><span>Enquire now</span><span> <FaWhatsapp className='mx-1.5 text-lg'/></span></div></button>
        </div>
    </div>


    );
};
export default CourseCard;