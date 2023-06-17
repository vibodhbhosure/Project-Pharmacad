
import React from 'react'
import Link from 'next/link'
import "../styles/globals.css"
import { FaMapMarkerAlt,FaRegEnvelope,FaPhoneAlt,FaFacebookF,FaLinkedinIn,FaYoutube,FaInstagram,FaGooglePlay } from "react-icons/fa";

function Contactbar() {
  return (
    <div className="contact sticky md:left-0 md:top-0 md:w-full md:z-20 lg:left-0 lg:top-0 lg:w-full lg:z-20">
      <div className="hidden md:flex md:p-4 md:text-black md:space-x-7 md:justify-center lg:flex lg:p-4 lg:text-black lg:space-x-7 lg:justify-end lg:mr-24">
        <ul className='md:flex md:space-x-2 lg:flex lg:space-x-7'>
            <li>
                <div className='flex space-x-3'>
                    <span className='mt-1'>
                      <Link  href="/"><FaMapMarkerAlt/></Link>
                    </span>
                    <span>Dadar, Mumbai-14</span>
                </div>
            </li>
            <li>
            <div className='flex space-x-3'>
                    <span className='mt-1'><Link href="/"><FaRegEnvelope/></Link></span>
                    <span>pharmacad.india@gmail.com</span>
                </div>
            </li>
            <li>
            <div className='flex space-x-3'>
                    <span className='mt-1'><Link href="/"><FaPhoneAlt/></Link></span>
                    <span>(+91)9967 163 961</span>
                </div>
            </li>
                
        </ul>
        <ul className='flex space-x-4'>
            <li className='mt-1'><FaFacebookF/></li>
            <li className='mt-1'><FaLinkedinIn/></li>
            <li className='mt-1'><FaYoutube/></li>
            <li className='mt-1'><FaInstagram/></li>
            <li className='mt-1'><FaGooglePlay/></li>
        </ul>
      </div>
    </div>
  )
}

export default Contactbar