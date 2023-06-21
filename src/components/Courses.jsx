import React from 'react'
import { FaAngleLeft} from "react-icons/fa";
import coursesdata from './coursesdata';
import CourseCard from './CourseCard'
const Courses = () => {
    const courseDataArray = Object.values(coursesdata);
  return (
    <div className='w-full border-2 border-red-500 mb-[109px]'>
        <div className='h-[38px] w-[42px] ml-[131px] mt-[57px] border-2 border-gray-300 bg-white items-center justify-center absolute rounded-sm p-2 cursor-pointer -z-50'>
            <FaAngleLeft className='ml-1'/>
        </div>
        <div className='flex ml-[135px] mt-[156px] space-x-[80px]'>
            <div className='h-[200px] w-[552px] border-2 border-blue-500 flex flex-col'>
                <span className=' text-5xl font-bold'>Courses</span>
                <span className=' mt-12 font-normal text-sm'>Check out the various courses <span className=' font-semibold'>(ONLINE and OFFLINE)</span> offered by Pharmacad</span>
                <spanv className='font-normal text-sm'>and make your pharmaceutical career a reality.</spanv>
                <span className=' mt-4 font-normal text-sm'>Hurry up, enrollment process for <span className=' font-semibold'>’24</span> and <span className=' font-semibold'>’25</span> batches for GPAT has started.</span>
            </div>
            <div className='h-[204px] w-[536px] border-2 border-purple-500'>

            </div>
        </div>
        <div className='mt-[91px] ml-[131px] border-2 border-green-500 '>
            <span className=' font-bold text-3xl '>
                Upcoming Batches
            </span>
            <div className='grid grid-cols-2 grid-flow-row gap-9 '>
            {courseDataArray.slice(0, 4).map((cardData) => (
            <div key={cardData.id} className="lg:w-full ">
              <CourseCard cardData={cardData} />
            </div>
          ))}
                
                
            </div>
        </div>
    </div>
  )
}

export default Courses
