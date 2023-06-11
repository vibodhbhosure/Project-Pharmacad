import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="fixed left-0 w-full z-10 mt-10">
      <div className="flex p-4 text-black justify-center space-x-52">
        <Link className="p-4" href='/'><h1>logo</h1></Link>
        <ul className="ml-10 hidden sm:flex">
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>Home</Link>
            </li>
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>Courses</Link>
            </li>
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>Certificate Courses</Link>
            </li>
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>Abroad Studies</Link>
            </li>
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>Youtube</Link>
            </li>
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>Testimonials</Link>
            </li>
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>Gallery</Link>
            </li>
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>About Us</Link>
            </li>
            <li className="p-4 hover:font-semibold hover:underline">
                <Link href='/'>Contact</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
