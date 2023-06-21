import React from "react";
import Link from "next/link";
import "../styles/globals.css";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlay,
} from "react-icons/fa";

function Contactbar() {
  return (
    <div className="contact sticky md:left-0 md:top-0 md:w-full md:z-40 lg:left-0 lg:top-0 lg:w-full lg:z-40">
      <div className="hidden md:flex md:p-4 md:text-black md:space-x-7 md:justify-center lg:flex lg:px-4 lg:py-2 lg:text-black lg:space-x-7 lg:justify-end lg:mr-24">
        <ul className="md:flex md:space-x-2 lg:flex lg:space-x-7">
          <li>
            <div className="flex space-x-3">
              <span className="mt-1">
                <FaMapMarkerAlt />
              </span>
              <span>Dadar, Mumbai-14</span>
            </div>
          </li>
          <li>
            <div className="flex space-x-3">
              <span className="mt-1">
                <FaRegEnvelope />
              </span>
              <span>pharmacad.india@gmail.com</span>
            </div>
          </li>
          <li>
            <div className="flex space-x-3">
              <span className="mt-1">
                <FaPhoneAlt />
              </span>
              <span>(+91) 9967 163 961</span>
            </div>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li className="mt-1">
            <Link target="_blank" href="https://m.facebook.com/pharmacad/">
              <FaFacebookF />
            </Link>
          </li>
          <li className="mt-1">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/pharmacad"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li className="mt-1">
            <Link target="_blank" href="">
              <FaYoutube />
            </Link>
          </li>
          <li className="mt-1">
            <Link
              target="_blank"
              href="https://instagram.com/pharmacad_india?utm_medium=copy_link"
            >
              <FaInstagram />
            </Link>
          </li>
          <li className="mt-1">
            <Link target="_blank" href="">
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=co.loki.pharmac"
              >
                <FaGooglePlay />
              </Link>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contactbar;
