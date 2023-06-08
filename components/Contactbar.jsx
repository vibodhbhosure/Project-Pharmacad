import React from 'react'
import Link from 'next/link'

function Contactbar() {
  return (
    <div className="fixed left-0 top-0 w-full z-10 mt-2 bg-lime-100">
      <div className="flex p-4 text-black space-x-7 justify-end mr-24">
        <ul className='flex space-x-7'>
            <li>
                <Link href="">
                    <span>i</span>
                    <span>Dadar, Mumbai-14</span>
                </Link>
            </li>
            <li>
            <Link href="">
                    <span>i</span>
                    <span>pharmacad.india@gmail.com</span>
                </Link>
            </li>
            <li>
            <Link href="">
                    <span>i</span>
                    <span>(+91)9967 163 961</span>
                </Link>
            </li>
                
        </ul>
        <ul className='flex space-x-4'>
            <li>i</li>
            <li>i</li>
            <li>i</li>
            <li>i</li>
            <li>i</li>
        </ul>
      </div>
    </div>
  )
}

export default Contactbar
