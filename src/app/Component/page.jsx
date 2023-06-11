import React from 'react'
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <div className="container mx-auto my-10 ">
        <div className="bg-[#ffff] px-6 lg:px-16 py-10 rounded-xl">
          <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <div className="flex flex-col gap-5 lg:gap-10">
              <p className=" text-2xl sm:text-1xl md:text-1xl lg:text-1xl font-medium">
                #1 COACHING CLASSES FOR PHARMACY IN MUMBAI
              </p>

              <p className=" text-6xl sm:text-4xl md:text-8xl lg:text-6xl font-medium">
                YOUR Dreams. <br className="lg:flex hidden" />
                OUR Mission. <br className="lg:flex hidden" />
              </p>
              <div className='flex flex-row space-x-4'>

                <button class="flex flex-row justify-center items-center py-3 px-3 gap-2 w-25 h-10  bg-blue-400 shadow-md rounded-md">Book free demo</button>

                <button class="flex flex-row justify-center items-center py-3 px-3 gap-2 w-25 h-10  bg-white text-blue-600 shadow-md rounded-md">View all courses</button>
              </div>              
              <p className="text-sm sm:text-base lg:text-lg text-[#393939]">
                Pharmacad is also available on the Playstore!
              </p>
              
                <Image className="px-3 py-1.5 flex gap-2 items-center rounded-xl" src="/googleplay.svg" width={240} height={120} />
                
            </div>
            <div>      
                 
                    <Image className="left-align" src="/a.png" width={750} height={370} />
                                  
            </div>

            
          </div>
        </div>
      </div>
    </>




  )
}

export default Banner
