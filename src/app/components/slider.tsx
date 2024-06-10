"use client";
const slides = [
  {
    id: 1,
    title: "Best Furniture",
    description:
      " lorem ipsum dolor sit amet, cr incididunt ut labore et dolore magna aliqua",
    img: "https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Best Furniture",
    description:
      " lorem ipsum dolor sit amet, cr incididunt ut labore et dolore magna aliqua",
    img: "https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Best Furniture",
    description:
      " lorem ipsum dolor sit amet, cr incididunt ut labore et dolore magna aliqua",
    img: "https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient to-r from-blue-50 to-yellow-50",
  },
];
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition ease-in-out duration-1000">
        {slides.map((slide) => (
          <div
            className={`bg-gradient-to-r from-blue-50 to-yellow-50 w-screen h-full flex flex-col gap-16 xl:flex-row `}
            key={slide.id}
          >
            {/* tex */}
            <div className=" h-1/2 xl:w-1/2">
              <h2>{slide.description}</h2>
              <h1>{slide.title} </h1>
              <Link href={slide.url}>
                <button>SHOP NOW</button>
              </Link>
            </div>
            {/* image */}
            <div className="relative h-1/2 xl:w-1/2">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default slider;
