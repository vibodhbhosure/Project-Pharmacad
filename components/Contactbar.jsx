import React from 'react'
import Link from 'next/link'
import { FaMapMarkerAlt,FaRegEnvelope,FaPhoneAlt,FaFacebookF,FaLinkedinIn,FaYoutube,FaInstagram,FaGooglePlay } from "react-icons/fa";

function Contactbar() {
  return (
    <div className="fixed left-0 top-0 w-full z-10 mt-2 bg-lime-100">
      <div className="flex p-4 text-black space-x-7 justify-end mr-24">
        <ul className='flex space-x-7'>
            <li className='flex space-x-3'>
                <Link  href="" >
                    <span >
                      <Link className='mt-1' href="/"><FaMapMarkerAlt/></Link>
                    </span>
                    <span>Dadar, Mumbai-14</span>
                </Link>
            </li>
            <li className='flex space-x-3'>
            <Link href="">
                    <span><Link className='mt-1' href="/"><FaRegEnvelope/></Link></span>
                    <span>pharmacad.india@gmail.com</span>
                </Link>
            </li>
            <li className='flex space-x-3'>
            <Link href="">
                    <span><Link className='mt-1' href="/"><FaPhoneAlt/></Link></span>
                    <span>(+91)9967 163 961</span>
                </Link>
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
