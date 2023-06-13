import React from "react";
import Link from "next/link";
import Image from "next/image";
import svg1 from '../src/logo/Mask group.svg'
import svg2 from '../src/logo/Rectangle 408.svg'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex">
        <div className="mt-5 justify-start ml-4 z-20 w-40 md:mt-10 md:justify-start md:ml-4 md:z-20 md:h-40 md:w-40 lg:mt-10 lg:justify-start lg:ml-4 lg:z-20 lg:h-40 lg:w-40 xl:mt-10 xl:justify-start xl:ml-24 xl:z-20 xl:h-40 xl:w-40">
            <Image className="absolute z-30 ml-6 mt-4 md:absolute md:z-30 md:ml-6 md:mt-4 lg:absolute lg:z-30 lg:ml-6 lg:mt-4 xl:absolute xl:z-30 xl:ml-6 xl:mt-4"
                src={svg1}
                width={80}
                height={80}    
            />
            <Image className="absolute z-20 md:absolute md:z-20 lg:absolute lg:z-20 xl:absolute xl:z-20"
                src={svg2}
                width={130}
                height={130}
            />
        </div>
        <div className="md:mt-14 lg:fixed lg:left-0 lg:w-full lg:z-10 lg:mt-10 xl:fixed xl:left-0 xl:w-full xl:z-10 xl:mt-10 ">
            <div className="absolute right-0 float-right mr-6 mt-5 text-3xl lg:hidden">
                <Link className='w-10 h-10' href="/" onClick={onToggleMenu(this)}><FaBars/></Link>
            </div>
            <div className="hidden lg:flex lg:p-4 lg:text-black lg:justify-end lg:mr-1 lg:shadow-2xl xl:w-full xl:flex xl:p-4 xl:text-black xl:justify-end xl:mr-24 xl:right-3 xl:shadow-2xl">
                <ul className="lg:ml-10 lg:flex xl:ml-10 xl:flex">
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>Courses</Link>
                    </li>
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>Certificate Courses</Link>
                    </li>
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>Abroad Studies</Link>
                    </li>
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>Youtube</Link>
                    </li>
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>Testimonials</Link>
                    </li>
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>Gallery</Link>
                    </li>
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>About Us</Link>
                    </li>
                    <li className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline">
                        <Link href='/'>Contact</Link>
                    </li>
                </ul>
            </div>
            {/* mobile responsive */}
            <div className="absolute flex mt-40 right-0 mr-1 lg:hidden">
                <ul className="">
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>Courses</Link>
                    </li>
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>Certificate Courses</Link>
                    </li>
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>Abroad Studies</Link>
                    </li>
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>Youtube</Link>
                    </li>
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>Testimonials</Link>
                    </li>
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>Gallery</Link>
                    </li>
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>About Us</Link>
                    </li>
                    <li className="p-4 text-2xl hover:font-semibold hover:underline">
                        <Link href='/'>Contact</Link>
                    </li>
                </ul>
            </div>
      </div>
    </div>
    
  )
}
export default Navbar
