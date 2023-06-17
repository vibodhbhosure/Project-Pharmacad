"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import NavItem from "./NavItem";
import svg1 from '../../public/Mask group.svg'
import svg2 from '../../public/Rectangle 408.svg'
import { FaBars, FaWindowClose} from "react-icons/fa";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Courses", href: "/" },
  { text: "Certificate Courses", href: "/" },
  { text: "Abroad Studies", href: "/" },
  { text: "Youtube", href: "/" },
  { text: "Testimonials", href: "/" },
  { text: "Gallery", href: "/" },
  { text: "About Us", href: "/" },
  { text: "Contact", href: "/" },
];
const Navbars = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav flex`}>
        {/* <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo">CodeWithMarish</h1>
          </a>
        </Link> */}
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
            <div className="hidden lg:flex lg:p-4 lg:text-black lg:justify-end lg:mr-1 lg:shadow-2xl xl:w-full xl:flex xl:p-4 xl:text-black xl:justify-end xl:shadow-2xl ">
                <div className={`${navActive ? "active" : ""} nav__menu-list lg:ml-10 lg:flex xl:ml-10 xl:flex xl:mr-24`}>
                {MENU_LIST.map((menu, idx) => (
                  <div
                    className = "lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline"
                    onClick={() => {
                      setActiveIdx(idx);
                      setNavActive(false);
                    }}
                    key={menu.text}
                  >
                    <NavItem active={activeIdx === idx} {...menu} />
                  </div>
                ))}
              </div>
            </div>
            <div
            onClick={() => setNavActive(!navActive)}
            className={`absolute right-0 float-right mr-6 mt-5 text-3xl lg:hidden`}
          >
              <button className={'w-10 h-10 cursor-pointer'}>{navActive ? <FaWindowClose/> : <FaBars />}</button>
          </div>
      </div>













        {/* <div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> */}
        
      </nav>
    </header>
  );
};

export default Navbars;