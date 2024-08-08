import React, { useEffect } from "react";
import { cupgsLocationData } from "@/data/AboutInstituteData"
import Heading from "@/components/Typography/Heading";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import 'aos/dist/aos.css';
import AOS from 'aos';

const DiscoverCupgs = () => {

  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-6 leading-relaxed text-justify w-[85%] max-sm:w-full mt-4" data-aos='fade-up'>
      <p className='text-sm mt-7 text-gray-600 leading-relaxed' data-aos='fade-up'>
        {cupgsLocationData.intro}
      </p>
      {/* <Heading text="Location" />
      <p className='text-sm mt-0 text-gray-600 leading-relaxed'>
        {cupgsLocationData.location}
      </p> */}
      <Heading text="Proximity to Transportation Hubs" data-aos='fade-up' />
      {cupgsLocationData.transportationHubs.map((el, index) =>
        <p key={index} className='text-sm text-gray-600 leading-relaxed flex items-start -mt-3' data-aos='fade-up'>
          <span className="mr-3 mt-1"><MdKeyboardDoubleArrowRight /></span>

          <span><span className='font-semibold mr-1 w-fit inline-block'>{el.title}: </span>{el.description}</span>
        </p>
      )}


      <Heading text="Google Maps" data-aos='fade-up' />
      <div className="w-full" data-aos='fade-up'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.8119183758267!2d84.81479157474786!3d22.24721384481863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20190d9ca4d081%3A0x413ea00ed3708d23!2sCUPGS%20%2C%20ROURKELA!5e0!3m2!1sen!2sin!4v1719067946332!5m2!1sen!2sin" className="w-full shadow" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default DiscoverCupgs;
