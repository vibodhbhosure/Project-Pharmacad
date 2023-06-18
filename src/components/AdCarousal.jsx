"use client";
import React, {useState} from 'react'
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import Card1 from "./CarousalCards/Card1"
import Card2 from "./CarousalCards/Card2"

const AdCarousal = () => {

    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
        // {
        //   card:<Card1/>
        // },
        // {
        //   card:<Card2/>
        // },
      ];

const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
    const isFirstSlide = currentIndex ==0;
    const newIndex  =isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}
const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
}
    
  return (
    // style={{ backgroundImage: `url(${slides[currentIndex].url})` }} 
    <div style={{ backgroundImage: `url(${slides[currentIndex]}).url` }} className='max-w-[1321px] h-[145px] m-auto mt-28 relative group'>
        <div className='w-full h-full bg-center bg-cover duration-500'>
        </div>
        <div className='hidden group-hover:flex h-9 w-9 border-2 border-gray-300 bg-white items-center justify-center absolute top-[38%] -translate-x-0 transalate-y-[-50%] left-[20px] rounded-sm p-2 cursor-pointer'><FaAngleLeft onClick={prevSlide}/></div>
        <div className="hidden group-hover:flex h-9 w-9 border-2 border-gray-300 bg-white items-center justify-center absolute top-[38%] -translate-x-0 transalate-y-[-50%] right-[20px] rounded-sm p-2 cursor-pointer"><FaAngleRight onClick={nextSlide}/></div>
    </div>



  )
}

export default AdCarousal
