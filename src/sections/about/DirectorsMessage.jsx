import React, { useEffect, useState } from 'react'
import DirectorImg from "../../assets/img/director.webp"
import MacBtns from "@/assets/misc/macbook.png"
import { FaQuoteLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const DirectorsMessage = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const [hovered, setHovered] = useState(false);
    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="h-[488px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden" >
            <div className="w-full flex items-center justify-between bg-gray-800 rounded-t-lg px-4">
                <h1 className="w-auto text-white text-xl font-medium px-1 py-2">Director&apos;s Message</h1>
                <img src={MacBtns} alt="" className="w-10 h-[0.7rem]" />
            </div>
            <a className="block overflow-hidden w-full" href="#">
                <div className="h-56 w-full overflow-hidden">
                    <img className={`w-full h-full object-cover transition-transform duration-200 transform ${hovered && 'scale-105'} `} src={DirectorImg} alt="Director Image" />
                </div>
            </a>
            <div className="flex flex-wrap gap-6 -mt-4">
                <p className="relative">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-blue-700"></span>
                    <span className="relative inline-block h-full w-full rounded border-2 border-blue-700 bg-white px-3 py-1 text-base font-bold text-blue-700 transition duration-100">Prof. (Dr.) Shiv Kumar Mishra</span>
                </p>
            </div>
            <div className="p-5 pb-0">
                <p className="relative overflow-hidden mb-0 font-normal text-sm text-justify text-gray-700 dark:text-gray-400" style={{ display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    <FaQuoteLeft className="inline-block mb-1 text-xl text-blue-900" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to the Center for Undergraduate and Postgraduate Studies at BPUT Rourkela. Our mission is to foster a learning environment that nurtures intellectual growth, innovation, and leadership. We provide a robust academic framework and practical experience, preparing our students to meet global challenges. Join us in our journey of discovery and excellence, making a positive impact through education and research.
                </p>
            </div>
            <div className="w-full flex justify-end mt-2">
                <Link to={"/about/?tab=directors-message"} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-900">
                    Read more
                    {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg> */}
                </Link>
            </div>

        </div>




    )
}

export default DirectorsMessage