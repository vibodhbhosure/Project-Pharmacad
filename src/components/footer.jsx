import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#030303] body-font">
      <div className="container mx-auto max-w-screen-xl px-2 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Side */}
          <div className="w-full md:w-80 flex-wrap md:mr-20 text-center md:text-left mb-8 md:mb-0">
            <Image
              src={Logo} // Update the image path and file extension
              alt="Pharmacad"
              width={150}
              height={100}
            />
            <div>
              <p className="mt-2 text-md text-justify font-inter text-white">
                Dedicated to providing Link transformative learning experience
                and shaping the next generation of pharmaceutical leaders with
                cutting-edge curriculum, innovative research, and hands-on
                training.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-grow flex flex-wrap md:pl-40">
            <div className="w-1/2 md:w-1/2 md:pr-8">
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3 font-inter">
                Navigate
              </h2>
              <div className="list-none text-left mb-10">
                <ul className="list-none text-left mb-10">
                  <li className="mb-2">
                    <Link
                      href="/"
                      className="text-white hover:text-gray-600 font-inter pr-4"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#CoursesOffered"
                      className="text-white hover:text-gray-600 font-inter pr-4"
                    >
                      Courses
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-white hover:text-gray-600 font-inter pr-4"
                    >
                      Resources
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-white hover:text-gray-600 font-inter pr-4"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#"
                      className="text-white hover:text-gray-600 font-inter pr-4"
                    >
                      Events
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#about"
                      className="text-white hover:text-gray-600 font-inter pr-4"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#faq"
                      className="text-white hover:text-gray-600 font-inter pr-4"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="#contact"
                      className="text-white hover:text-gray-600 font-inter pr-4"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-1/2 md:w-1/2 ">
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3 font-inter">
                Contact
              </h2>
              <div className="list-none text-left mb-10">
                <ul className="list-none text-left mb-10">
                  <li>
                    <Link
                      href="https://goo.gl/maps/d4p6P2kJyqkqA6V79"
                      target="_blank"
                      className="text-white hover:text-gray-600font-inter"
                    >
                      Dadar, Mumbai-14
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:pharmacad.india@gmail.com"
                      target="_blank"
                      className="text-white break-all hover:text-gray-600 font-inter"
                    >
                      pharmacad.india@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+919967163961"
                      className="text-white hover:text-gray-600 font-inter"
                    >
                      (+91) 9967163961
                    </Link>
                  </li>
                </ul>
              </div>
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3 font-inter">
                Socials
              </h2>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <Link
                  href="https://m.facebook.com/pharmacad/"
                  className=" text-gray-500"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@Pharmacad"
                  className="ml-5 text-gray-500"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/pharmacad_gpat_niper_mba/"
                  className="ml-5 text-gray-500"
                  target="_blank"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>

                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/pharmacad"
                  className="ml-5 text-gray-500"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>

                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </Link>
              </span>
              <div className="w-full mt-6 text-left">
                <Link href="https://play.google.com/store/apps/details?id=co.loki.pharmac">
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-sm text-gray-600 mb font-inter">
                        GET IT ON
                      </span>
                      <span className="title-font font-bold text-md text-left font-inter">
                        Google Play
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0C0C0C]">
        <div className="xl:container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white font-inter text-sm text-center sm:text-left font-sans-bold">
            © 2023
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <p className="text-white font-inter text-sm text-left sm:text-left font-sans-bold">
              Developed by VIT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
