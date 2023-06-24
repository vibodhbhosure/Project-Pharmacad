import React from "react";
import { FaAngleLeft, FaWhatsapp } from "react-icons/fa";
import coursesdata from "./coursesdata";
import CourseCard from "./CourseCard";
const Courses = () => {
  const courseDataArray = Object.values(coursesdata);
  return (
    <div className="w-full border-2 border-white mb-[109px] mt-6">
      <div className="h-[38px] w-[42px] ml-7 md:ml-[131px] mt-14 md:mt-[57px] border-2 border-gray-300 bg-white items-center justify-center absolute rounded-sm p-2 cursor-pointer -z-50">
        <FaAngleLeft className="ml-1" />
      </div>
      <div className="flex flex-col md:flex-row ml-6 md:ml-[135px] mt-36 md:mt-[156px] space-x-[80px]">
        <div className="h-[200px] w-[552px] flex flex-col">
          <span className=" text-3xl md:text-5xl font-bold">Courses</span>
          <span className=" mt-6 md:mt-12 font-normal text-sm w-[291px] md:w-[552px]">
            Check out the various courses{" "}
            <span className=" font-semibold">(ONLINE and OFFLINE)</span> offered
            by Pharmacad and make your pharmaceutical career a reality.
          </span>
          <span className=" mt-4 font-normal text-sm w-[291px] md:w-[552px]">
            Hurry up, enrollment process for{" "}
            <span className=" font-semibold">’24</span> and{" "}
            <span className=" font-semibold">’25</span> batches for GPAT has
            started.
          </span>
        </div>
        <div className="h-[204px] w-[536px]"></div>
      </div>
      <div className=" mt-11 md:mt-[91px] mx-6 md:ml-[131px]">
        <span className="hidden md:block font-bold text-3xl ">
          Upcoming Batches
        </span>
        <div className="border-2 border-[#DBDBDB] w-[310px] md:w-[1278px] h-[271px] mt-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto md:mx-0">
          <div className="mt-6 md:mt-12 ml-7 md:ml-[52px]">
            <div className="flex flex-col md:flex-row md:w-max">
              <span className="uppercase text-2xl md:text-3xl flex  flex-col md:flex-row">
                <span className="font-medium ">PHARMACAD&apos;S</span>
                <span className="font-bold italic ml-0 md:ml-2">
                  STEPS2SUCCESS
                </span>
              </span>
              <span className="box-border uppercase font-bold text-sm md:text-base bg-[#CD00A0] text-[#F5F5F5] ml-0 md:ml-12 mt-3 md:mt-0 m-auto px-2 py-1 rounded-md">
                mcq booklets
              </span>
            </div>
            <div className="hidden mt-4 md:flex flex-row">
              <div className="h-[27px] flex flex-col max-w-fit">
                <div className="w-1/8 flex">
                  <span className=" box-border h-[39px] w-[39px] rounded-full shadow-md z-10 flex justify-center align-middle p-2 mt-[6px] bg-white font-semibold text-base">
                    01.
                  </span>
                  <div className=" absolute bg-black text-white rounded-3xl p-2 flex flex-col max-w-fit font-semibold text-xs pl-[60px] pr-[30px] justify-center align-middle z-0 ml-3">
                    <div>Pharmacology +</div>
                    <div>Medicinal Chemistry</div>
                  </div>
                </div>
              </div>
              <div className="h-[27px] flex flex-col ml-48 max-w-fit">
                <div className="w-1/8 flex">
                  <span className=" box-border h-[39px] w-[39px] rounded-full shadow-md z-10 flex justify-center align-middle p-2 mt-[6px] bg-white font-semibold text-base">
                    02.
                  </span>
                  <div className=" absolute bg-black text-white rounded-3xl p-2 flex flex-col max-w-fit font-semibold text-xs pl-[60px] pr-[30px] justify-center align-middle z-0 ml-3">
                    <div>Pharmaceutics +</div>
                    <div>Allied Subjects</div>
                  </div>
                </div>
              </div>
              <div className="h-[27px] flex flex-col ml-44 max-w-fit">
                <div className="w-1/8 flex">
                  <span className=" box-border h-[39px] w-[39px] rounded-full shadow-md z-10 flex justify-center align-middle p-2 mt-[6px] bg-white font-semibold text-base">
                    03.
                  </span>
                  <div className=" absolute bg-black text-white rounded-3xl p-2 flex flex-col max-w-fit font-semibold text-xs pl-[60px] pr-[30px] justify-center align-middle z-0 ml-3">
                    <div>Pharmacognosy</div>
                    <div>Pharm Analysis</div>
                  </div>
                </div>
              </div>
              <div className="h-[27px] flex flex-col ml-44 max-w-fit">
                <div className="w-1/8 flex">
                  <span className=" box-border h-[39px] w-[39px] rounded-full shadow-md z-10 flex justify-center align-middle p-2 mt-[6px] bg-white font-semibold text-base">
                    04.
                  </span>
                  <div className=" absolute bg-black text-white rounded-3xl p-2 flex flex-col max-w-fit font-semibold text-xs pl-[60px] pr-[30px] justify-center align-middle z-0 ml-3">
                    <div>HUMAN Anatomy</div>
                    <div>Organic Chemistry</div>
                  </div>
                </div>
              </div>
              <div className="h-[27px] flex flex-col ml-44 max-w-fit">
                <div className="w-1/8 flex">
                  <span className=" box-border h-[39px] w-[39px] rounded-full shadow-md z-10 flex justify-center align-middle p-2 mt-[6px] bg-white font-semibold text-base">
                    05.
                  </span>
                  <div className=" absolute bg-black text-white rounded-3xl p-2 flex flex-col max-w-fit font-semibold text-xs pl-[60px] pr-[30px] justify-center align-middle z-0 ml-3">
                    <div>Biotechnology, Biochemistry</div>
                    <div>Microbiology, Jurisprudence</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button className=" box-border bg-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm text-white rounded-lg">
                Book now
              </button>
              <button className=" box-border border-2 border-[#3A47FB] text-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm rounded-lg ml-5">
                <div className="flex flex-row">
                  <span>Enquire now</span>
                  <span>
                    {" "}
                    <FaWhatsapp className="mx-1.5 text-lg" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 grid md:grid-cols-2 grid-flow-row gap-9 ">
          {courseDataArray.slice(0, 4).map((cardData) => (
            <div key={cardData.id} className="lg:w-full ">
              <CourseCard cardData={cardData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
