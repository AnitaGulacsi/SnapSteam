// Carousel.js
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export const Carousel = ({ items }: any) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: 0,
  };

  console.log(items);

  return (
    <Slider {...settings}>
      {items.map((item: any, index: any) => (
        <div key={index}>
          <Image
            src={item.imageUrl}
            alt={`Slide ${index + 1}`}
            // style={{ width: "auto", height: "auto" }}
            width={400}
            height={400}
          />
        </div>
      ))}
    </Slider>
  );
};
