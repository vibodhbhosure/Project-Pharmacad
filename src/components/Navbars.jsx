"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import svg1 from "../../public/logo.svg";
import svg2 from "../../public/Rectangle408.svg";
import { FaBars, FaWindowClose } from "react-icons/fa";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Courses", href: "/" },
  { text: "Certificate Courses", href: "/" },
  { text: "Abroad Studies", href: "/" },
  { text: "Youtube", href: "/" },
  { text: "Testimonials", href: "/" },
  { text: "Gallery", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/" },
];
const Navbars = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="mb-20">
      <nav className={`nav flex sticky bg-white top-0 shadow-2xl`}>
        {/* <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo">CodeWithMarish</h1>
          </a>
        </Link> */}
        <div className="top-0 mt-3 mb-16 justify-start ml-4 z-40 w-40 md:mt-10 mb:10 md:justify-start md:ml-4 md:z-40 md:h-40 md:w-40 lg:mt-10 lg:justify-start lg:fixed lg:ml-4 lg:z-40 lg:h-40 lg:w-40 xl:mt-10 xl:justify-start xl:ml-24 xl:z-40 xl:h-40 xl:w-40 xl:fixed">
          <Image
            className="z-30 absolute ml-6 mt-4 md:absolute md:z-40 md:ml-6 md:mt-8 lg:absolute lg:z-40 lg:ml-6 lg:mt-8 xl:z-40 xl:ml-6 xl:mt-8"
            src={svg1}
            width={80}
            height={80}
          />
          <Image
            className="hidden lg:block lg:absolute lg:z-20 xl:block xl:absolute xl:z-30"
            src={svg2}
            width={130}
            height={130}
          />
        </div>
        <div className="top-0 bg-white md:mt-14 lg:fixed lg:left-0 lg:bg-white lg:w-full lg:z-10 lg:mt-10 xl:bg-white xl:fixed xl:left-0 xl:w-full xl:z-10">
          <div className="hidden lg:flex lg:px-2 lg:bg-white lg:text-black lg:justify-end lg:mr-1 lg:shadow-2xl xl:w-full xl:flex xl:px-4 xl:p-2 xl:text-black xl:justify-end xl:shadow-2xl xl:bg-white">
            <div
              className={`${
                navActive ? "active" : ""
              } nav__menu-list lg:flex lg:p-2 xl:ml-10 xl:flex xl:mr-16`}
            >
              {MENU_LIST.map((menu, idx) => (
                <div
                  className="lg:p-4 lg:px-3 xl:p-4 hover:font-semibold hover:underline"
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
            <button className={"w-10 h-10 cursor-pointer"}>
              {navActive ? <FaWindowClose /> : <FaBars />}
            </button>
          </div>

          {/* mobile view */}
          <div
            className={`bg-white z-50 flex flex-col absolute top-28 gap-y-2 cursor-pointer w-72 px-6 transition-all lg:hidden ${
              navActive ? "right-0" : "-right-[100%] md:-right[100%]"
            }`}
          >
            <div className={`${navActive ? "active" : ""} nav__menu-list `}>
              {MENU_LIST.map((menu, idx) => (
                <div
                  className="py-4 hover:font-semibold hover:underline"
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
