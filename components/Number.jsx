import React from "react";

const Number = () => {
  return (
    <div
      className="lg:h-72 lg:px-10 lg:py-8 sm:h-240 sm:px-10 sm:py-8 sm:w-auto"
      style={{
        background:
          "linear-gradient(113.02deg, #0477FD 22.78%, #0500FD 108.12%)",

        borderRadius: "4.42587px",
      }}
    >
      <div className="nums-heading lg:font-inter lg:font-bold lg:text-3xl lg:w-64 lg:mb-4 sm:font-inter sm:font-bold sm:w-2/3 sm:text-6xl sm:mb-10  lg:mt-0 lg:ml-0 sm:mt-10 sm:ml-16 lg:text-white sm:text-white">
        Numbers we are proud of-
      </div>

      <div className="nums-con lg:flex lg:flex-row sm:flex sm:flex-col lg:ml-0 sm:ml-10 ">
        <div className="nums-con1 lg:mb-10 lg:flex lg:flex-row sm:flex sm:flex-row sm:mb-10 sm:content-around">
          <div className="lg:flex lg:flex-col lg:mr-10 sm:flex sm:flex-col   sm:justify-items-center sm:content-center ">
            <div className="lg:flex lg:flex-row sm:flex sm:flex-row lg:ml-0 sm:ml-10 ">
              <div className="lg:text-6xl lg:font-bold lg:font-poppins sm:text-8xl sm:font-bold sm:font-poppins sm:text-white lg:text-white">
                10
              </div>

              <div className="lg:text-6xl lg:font-bold lg:font-poppins sm:text-8xl sm:font-bold sm:font-poppins lg:ml-0 sm:ml-3 text-bluishgreen">
                +
              </div>
            </div>

            <div className="lg:leading-5 lg:text-0.96 lg:text-lg lg:font-poppins lg:ml-2 lg:w-1/2 sm:leading-9 sm:text-3xl sm:font-poppins sm:w-1/2 sm:ml-14 lg:text-white sm:text-white ">
              courses offered
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:mr-10 sm:flex sm:flex-col sm:content-around ">
            <div className="lg:flex lg:flex-row sm:flex sm:flex-row lg:ml-0 sm:ml-28">
              <div className="lg:text-6xl lg:font-bold lg:font-poppins sm:text-8xl sm:font-bold sm:font-poppins  sm:text-white lg:text-white">
                25
              </div>

              <div className="lg:text-6xl lg:font-bold lg:font-poppins sm:text-8xl sm:font-bold sm:font-poppins lg:ml-0 sm:ml-3 text-bluishgreen">
                +
              </div>
            </div>

            <div className="lg:leading-5 lg:text-0.96 lg:text-lg lg:font-poppins lg:ml-2 lg:w-1/2 sm:leading-9 sm:text-3xl sm:font-poppins sm:w-1/2 sm:ml-32 lg:text-white sm:text-white">
              industry affiliates
            </div>
          </div>
        </div>

        <div className="nums-con2 lg:mb-10 lg:flex lg:flex-row sm:flex sm:flex-row sm:content-around">
          <div className="lg:flex lg:flex-col lg:mr-6 sm:flex sm:flex-col ">
            <div className="lg:flex lg:flex-row sm:flex sm:flex-row lg:ml-0 sm:ml-10">
              <div className="lg:text-6xl lg:font-bold lg:font-poppins sm:text-8xl sm:font-bold sm:font-poppins  sm:text-white lg:text-white">
                35
              </div>

              <div className="lg:text-6xl lg:font-bold lg:font-poppins sm:text-8xl sm:font-bold sm:font-poppins lg:ml-0 sm:ml-3 text-bluishgreen">
                +
              </div>
            </div>

            <div className="lg:leading-5 lg:text-0.96 lg:text-lg lg:font-poppins lg:ml-2 lg:w-1/2 sm:leading-9 sm:text-3xl sm:font-poppins sm:w-1/2 sm:ml-14 lg:text-white sm:text-white">
              scholarships provided
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:mr-10 lg:content-normal sm:flex sm:flex-col sm:content-around">
            <div className="lg:flex lg:flex-row sm:flex sm:flex-row lg:ml-0 sm:ml-28 ">
              <div className="lg:text-6xl lg:font-bold lg:font-poppins sm:text-8xl sm:font-bold sm:font-poppins  sm:text-white lg:text-white">
                45
              </div>

              <div className="lg:text-6xl lg:font-bold lg:font-poppins sm:text-8xl sm:font-bold sm:font-poppins lg:ml-0 sm:ml-3 text-bluishgreen">
                +
              </div>
            </div>

            <div className="lg:leading-5 lg:text-0.96 lg:text-base lg:font-poppins lg:ml-2 lg:w-full sm:leading-9 sm:text-3xl sm:font-poppins sm:w-1/2 sm:ml-32 lg:text-white sm:text-white">
              webinars & seminars organized
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
