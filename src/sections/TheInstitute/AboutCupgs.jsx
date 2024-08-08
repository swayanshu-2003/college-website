import React, { useEffect } from "react";
import { AboutCupgsData } from "@/data/AboutInstituteData"
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutCupgs = () => {
  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000 });
  }, []);


  return (
    <div className=" flex flex-col gap-6 leading-relaxed text-justify w-[95%] md:w-[85%] mx-auto mt-3 ">
      {AboutCupgsData.map((el, index) =>
        <p key={index} className='text-sm mt-0 text-gray-600 leading-relaxed' data-aos='fade-up'>
          {el}
        </p>
      )}


    </div>
  );
};

export default AboutCupgs;
