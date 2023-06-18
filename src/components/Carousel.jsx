"use client";

import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useClient } from "next/client";
import Image from "next/image";
// import image1 from "../../public/image1c.svg";
// import image2 from "../../public/image2c.svg";
// import image3 from "../../public/image3c.svg";

const Carousel = () => {
  // useClient();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const slides = [
    {
      path: "/image1c.svg",
      alt: "Slide 1",
      width: 1280,
      height: 720,
    },
    {
      path: "/image2c.svg",
      alt: "Slide 2",
      width: 3508,
      height: 2480,
    },
    {
      path: "/image3c.svg",
      alt: "Slide 3",
      width: 1334,
      height: 720,
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[800px] w-full m-auto  relative group">
      <div className="relative w-full h-[0] pb-[56.25%] rounded-2xl overflow-hidden">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              slideIndex === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.path}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
