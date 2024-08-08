import React, { useEffect } from "react";
import { directorsMessage } from "@/data/AboutInstituteData";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';

const FromDirector = () => {
  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000 });
  }, []);
  return (
    <div className=" flex flex-col gap-6 leading-relaxed text-justify w-[85%] max-sm:w-full mt-4" data-aos='fade-up'>
      <div className="w-full flex flex-col md:flex-row gap-0 md:gap-5" >
        <div className="w-full md:w-2/5  overflow-hidden" data-aos='fade-up'>
          <img src={directorsMessage.image} alt="Director" className="w-full h-64 object-cover object-top scale-150" />
        </div>
        <div className="w-full md:w-3/5">
          <div className="p-4 pt-0">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800" style={{ fontFamily: "Roboto Slab" }}>{directorsMessage.name}</h2>
            <p className="text-sm italic text-gray-400 -mt-2" >{directorsMessage.text}</p>

            <p className='text-sm mt-7 text-gray-600 leading-relaxed' data-aos='fade-up'>
              <FaQuoteLeft className="inline-block mb-1 text-xl text-blue-800" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {directorsMessage.message}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FaQuoteRight className="inline-block mb-1 text-xl text-blue-800" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromDirector;
