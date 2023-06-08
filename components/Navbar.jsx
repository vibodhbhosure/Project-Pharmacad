import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full z-10">
      <div className="flex p-4 text-black justify-center space-x-52">
        <Link className="p-4" href='/'><h1>logo</h1></Link>
        <ul className="ml-10 hidden sm:flex">
            <li className="p-4">
                <Link href='/'>Home</Link>
            </li>
            <li className="p-4">
                <Link href='/'>Courses</Link>
            </li>
            <li className="p-4">
                <Link href='/'>Certificate Courses</Link>
            </li>
            <li className="p-4">
                <Link href='/'>Abroad Studies</Link>
            </li>
            <li className="p-4">
                <Link href='/'>Youtube</Link>
            </li>
            <li className="p-4">
                <Link href='/'>Testimonials</Link>
            </li>
            <li className="p-4">
                <Link href='/'>Gallery</Link>
            </li>
            <li className="p-4">
                <Link href='/'>About Us</Link>
            </li>
            <li className="p-4">
                <Link href='/'>Contact</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
