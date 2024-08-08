import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselItems as slides } from "./carouslItems";
import { FaMinus } from 'react-icons/fa';

const Carousel = () => {
  const [labelAnimationKey, setLabelAnimationKey] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className='custom-dash'
        style={{
          width: "30px",
          color: "gray"
        }}
      >
        <FaMinus />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setLabelAnimationKey(prevKey => prevKey + 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {slides?.map((slide, index) => (
          <div key={index} className="relative w-full h-64 md:h-[450px] overflow-hidden">
            <img
              src={slide.src}
              alt="Rangoli Competition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-28 md:pt-60 text-white bg-black bg-opacity-60 px-6 md:px-64">
              <h1 className="absolute top-3 right-3 text-xs md:text-sm font-semibold capitalize text-center flex items-center gap-2">
                <span key={labelAnimationKey} className="animate-slide-in-right">
                  {slide.label}
                </span>
                <span className="w-1 h-4 bg-white relative overflow-hidden">
                  <span className="absolute top-0 left-0 h-full w-full bg-white animate-slide-in-right"></span>
                </span>
              </h1>
              <p
                className="text-lg md:text-4xl uppercase font-semibold text-center mt-2 leading-normal md:!leading-10 animate-fade-in"
                style={{ fontFamily: "Roboto Slab" }}
              >
                {slide.content}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
