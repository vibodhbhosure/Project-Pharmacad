import React from 'react'
import { FaAngleLeft, FaWhatsapp} from "react-icons/fa";

const Courses = () => {
  return (
    <div className='w-full border-2 border-red-500 mb-[109px]'>
        <div className='h-[38px] w-[42px] ml-[131px] mt-[57px] border-2 border-gray-300 bg-white items-center justify-center absolute rounded-sm p-2 cursor-pointer -z-50'>
            <FaAngleLeft className='ml-1'/>
        </div>
        <div className='flex ml-[135px] mt-[156px] space-x-[80px]'>
            <div className='h-[200px] w-[552px] flex flex-col'>
                <span className=' text-5xl font-bold'>Courses</span>
                <span className=' mt-12 font-normal text-sm'>Check out the various courses <span className=' font-semibold'>(ONLINE and OFFLINE)</span> offered by Pharmacad</span>
                <spanv className='font-normal text-sm'>and make your pharmaceutical career a reality.</spanv>
                <span className=' mt-4 font-normal text-sm'>Hurry up, enrollment process for <span className=' font-semibold'>’24</span> and <span className=' font-semibold'>’25</span> batches for GPAT has started.</span>
            </div>
            <div className='h-[204px] w-[536px]'>

            </div>
        </div>
        <div className='mt-[91px] ml-[131px]'>
            <span className=' font-bold text-3xl'>
                Upcoming Batches
            </span>
            <div className='grid grid-cols-2 grid-flow-row gap-9'>
                <div className=' mt-7 border-2 border-cyan-500 h-[478px] w-[572px] shadow-xl'>
                    <div className='flex flex-row mt-7 ml-10'>
                        <span className=' font-medium text-3xl'>GPAT <span className=' font-bold text-3xl'>2025</span></span>
                        <span className=' box-border uppercase bg-[#F5752D] text-white m-auto p-1 ml-[72px] font-semibold text-xs rounded-sm '>Offline</span>
                        <span className='uppercase m-auto p-1 px-2 font-medium text-xs bg-[#E8F0FC] ml-[10px] rounded-sm'>Admissions started</span>
                    </div>
                    <div className='w-[490px] bg-[#F5F5F5] mt-5 ml-10'>
                        <ul className=' list-disc ml-5 p-5'>
                            <li className=' font-medium text-xs mt-[6px]'>250+ hours of Live Lectures (only weekends)</li>
                            <li className=' font-medium text-xs mt-[6px]'>800+ Pre recorded videos for revision & self study</li>
                            <li className=' font-medium text-xs mt-[6px]'>Expert teachers from Industry for different subjects</li>
                            <li className=' font-medium text-xs mt-[6px]'>Regular Test Series (150+ Tests)</li>
                            <li className=' font-medium text-xs mt-[6px]'>E Books & Notes available on the Android App</li>
                            <li className=' font-medium text-xs mt-[6px]'>Classwork MCQs + Practice MCQs Books More than 10,000 MCQs to practice</li>
                            <li className=' font-medium text-xs mt-[6px]'>Complementary Certificate Course - Advanced Diploma in Pharmacovigilance @50% off</li>
                            <li className=' font-medium text-xs mt-[6px]'>Regular Interactive & Motivational sessions for performance analysis, college & course selection</li>
                        </ul>
                    </div>
                    <div className='ml-10 mt-7'>
                        <button className=' box-border bg-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm text-white rounded-lg'>Book a demo</button>
                        <button className=' box-border border-2 border-[#3A47FB] text-[#3A47FB] shadow-xl m-auto p-3 font-semibold text-sm rounded-lg ml-5'>Enquire now <FaWhatsapp className=' text-lg'/></button>
                    </div>
                </div>
                <div className=' mt-7 border-2 border-cyan-500 h-[478px] w-[572px] shadow-xl'>

                </div>
                <div className=' mt-7 border-2 border-cyan-500 h-[478px] w-[572px] shadow-xl'>

                </div>
                <div className=' mt-7 border-2 border-cyan-500 h-[478px] w-[572px] shadow-xl'>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Courses
