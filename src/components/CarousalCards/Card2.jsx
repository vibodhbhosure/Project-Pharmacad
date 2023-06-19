import React from 'react'
import Image from 'next/image'
import "../../styles/globals.css"
import svg1 from '../../../public/bg2.svg'
import svg2 from '../../../public/arrow2.svg'
const Card2 = () => {
  return (
    <div className='gradient max-w-[1321px] h-[145px] flex border-2'>
        <div className='w-[715px] h-[63px] mt-[41px] ml-[113px] z-10 flex'>
            <div className='flex flex-col'>
                <span className='text-white font-bold text-3xl'>Make yourself stand out in the job market</span>
                <span className='text-white font-bold text-3xl'>with our certification courses</span>
            </div>
            <div className='absolute w-40 ml-[494px] mt-14'>
                <Image src={svg2}/>
            </div>
            <button className='absolute ml-[680px] mt-14 text-xs font-semibold text-blue-700 bg-white py-1 px-2'>Certificate Courses</button>
        </div>
        <div className="bg absolute w-[517px] h-[143px] ml-[804px]">
        </div>
    </div>
  )
}

export default Card2
