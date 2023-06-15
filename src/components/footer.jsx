import React from "react";
import Image from 'next/image';


function Component() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  // write rest of your code
}
const Footer = () => {
  return (
    <footer className="bg-black body-font">
      <div className="container mx-auto max-w-screen-lg px-2 py-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Side */}
          <div className="w-full md:w-80 flex-wrap md:mr-20 text-center md:text-left mb-8 md:mb-0">
            <Image
              src="/Pharmacad_Logo-removebg-preview..png" // Update the image path and file extension
              alt="Pharmacad"
              width={150}
              height={100}
            />
            <div>
              <p className="mt-2 text-md text-justify text-white">
                Dedicated to providing a transformative learning experience and shaping the next generation of pharmaceutical leaders with cutting-edge curriculum, innovative research, and hands-on training.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-grow flex flex-wrap md:pl-40">
            <div className="w-1/2 md:w-1/2 md:pr-8">
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">Navigate</h2>
              <nav className="list-none text-left mb-10">
                <li>
                  <a href="#" className="text-white hover:text-gray-600">Home</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-600">Courses</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-600">Resources</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-600">Blogs</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-600">Events</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-600">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-600">FAQs</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-600">Contact</a>
                </li>
              </nav>
            </div>
            
            <div className="w-1/2 md:w-1/2">
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-3">Contact</h2>
              <nav className="list-none text-left mb-10">
                <li>
                  <a href="#" className="text-white hover:text-gray-600">Dadar, Mumbai-14</a>
                </li>
                <li>
                  <a href="#" className="text-white break-words hover:text-gray-600">pharmacad.india@gmail.com</a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-600">(+91) 9967163961</a>
                </li>
              </nav>
              <div className="w-full mt-6 text-left">
                <a href="#">
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-sm text-gray-600 mb">GET IT ON</span>
                      <span className="title-font font-bold text-lg">Google Play</span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left font-sans-bold">
            © 2023
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <p className="text-white text-sm text-left sm:text-left font-sans-bold">
              Developed by VIT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
