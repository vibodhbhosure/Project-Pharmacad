import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="md:mt-14 lg:fixed lg:left-0 lg:w-full lg:z-10 lg:mt-10 lg:shadow-2xl xl:fixed xl:left-0 xl:w-full xl:z-10 xl:mt-10 xl:shadow-2xl">
      <div className="lg:flex lg:p-4 lg:text-black lg:justify-end lg:mr-1 xl:flex xl:p-4 xl:text-black xl:justify-end xl:mr-24">
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
        
        
      </div>
  )
}

export default Navbar
