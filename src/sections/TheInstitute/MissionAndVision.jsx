import React, { useEffect } from "react";
import { missionAndVision } from "@/data/AboutInstituteData";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import 'aos/dist/aos.css';
import AOS from 'aos';

const MissionAndVision = () => {

  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000 });
  }, []);

  return (
    <div className=" flex flex-col gap-6 leading-relaxed text-justify w-[95%] md:w-[85%] mx-auto mt-3 ">
      <p className='text-sm mt-0 text-gray-600 leading-relaxed' data-aos='fade-up'>
        The Center for Undergraduate and Postgraduate Studies at BPUT, Rourkela, is dedicated to providing a high-quality education that prepares students for the challenges of the future. Its mission and vision reflect a commitment to excellence, innovation, and community impact, aiming to create leaders and innovators who can make a significant difference in the world.
      </p>
      {missionAndVision.map((el, index) =>
        <p key={index} className='text-sm text-gray-600 leading-relaxed flex items-start' data-aos='fade-up'>
          <span className="mr-3 mt-1"><MdKeyboardDoubleArrowRight /></span>

          <span><span className='font-semibold mr-1 w-fit inline-block'>{el.title}: </span>{el.description}</span>
        </p>
      )}

    </div>
  );
};

export default MissionAndVision;
