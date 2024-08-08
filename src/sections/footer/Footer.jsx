import {
  aboutLinks,
  contactInfo,
  HelpfulLinks,
  quickLinks,
  socialLinks,
} from "@/data/FooterData";
import { Link, useNavigate } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsPersonFillLock } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Footer = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <footer className="bg-gray-900" data-aos='fade-up'>
      <div className="mx-auto max-w-screen-xl pb-6 pt-16 max-sm:px-6 lg:pt-24">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
          <div>
            <div className="flex justify-center sm:justify-start text-teal-300">
              <h1 className="text-[#5eead4] text-2xl uppercase max-sm:text-xl" style={{ fontFamily: "Roboto Slab" }}>
                Center For UG & PG Studies
              </h1>
            </div>
            <p className="mt-6 max-sm:mt-4 max-w-md text-center leading-relaxed  sm:max-w-xs sm:text-left text-gray-300">
              Biju Patnaik University Of Technology, Odisha, Rourkela, 769015
            </p>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks &&
                socialLinks.map((data, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={data.link}
                        rel="noreferrer"
                        target="_blank"
                        className="transition hover:text-teal-700/75 text-teal-500"
                      >
                        {data.icon}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 max-sm:mt-4">
            <div className="text-start sm:text-left">
              <p className="text-lg font-medium  text-gray-300">About Us</p>
              <ul className="mt-6 space-y-4 text-sm">
                {aboutLinks &&
                  aboutLinks.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className="transition hover:text-gray-400 text-white cursor-pointer capitalize flex items-center"
                        onClick={() =>
                          handleNavigation(`/${data.navlink}/?tab=${data.tab}`)
                        }
                      >
                        <span className="inline mr-2 text-teal-600"><MdOutlineKeyboardDoubleArrowRight /></span>
                        <span className="inline transition-all duration-200 hover:translate-x-1">
                          {data.title}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="text-start sm:text-left">
              <p className="text-lg font-medium  text-gray-300">Important Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {quickLinks &&
                  quickLinks.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className=" transition hover:text-gray-400 text-white capitalize cursor-pointer flex items-center"
                        onClick={() =>
                          handleNavigation(`/${data.navlink}/?tab=${data.tab}`)
                        }
                      >
                        <span className="inline mr-2 text-teal-600"><MdOutlineKeyboardDoubleArrowRight /></span>
                        <span className="inline transition-all duration-200 hover:translate-x-1">
                          {data.title}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="text-start sm:text-left">
              <p className="text-lg font-medium  text-gray-300">
                Helpful Links
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {HelpfulLinks &&
                  HelpfulLinks.map((data, index) => {
                    return (
                      <li key={index}>
                        <a
                          className=" transition hover:text-gray-400 text-white cursor-pointer capitalize flex items-center"
                          rel="noreferrer"
                          target="_blank"
                          href={data.url}
                        >
                          <span className="inline mr-2 text-teal-600"><MdOutlineKeyboardDoubleArrowRight /></span>
                          <span className="inline transition-all duration-200 hover:translate-x-1">
                            {data.title}
                          </span>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="text-start sm:text-left">
              <p className="text-lg font-medium  text-gray-300">Contact Us</p>
              <ul className="mt-6 space-y-4 text-sm">
                {contactInfo &&
                  contactInfo.map((data, index) =>
                    <li key={index}>
                      <a className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end text-white">
                        {data.icon}
                        <span className="flex-1 text-gray-300 font-semibold">
                          {" "}
                          {data.value}
                        </span>
                      </a>
                    </li>
                  )}
                {!sessionStorage.getItem('token') &&
                  <li>
                    <Link to={'/auth/login'} className="mt-8 md:mt-12 flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end text-white">
                      <BsPersonFillLock className="w-4 h-4 text-teal-500 mr-2 text-sm" />
                      <span className="flex-1 text-gray-300 font-semibold">
                        {" "}
                        Authorized Login
                      </span>
                    </Link>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t  pt-6 border-gray-800">
          <div className="text-center flex flex-col-reverse gap-4 md:flex-row  sm:justify-between sm:text-left">
            <p className="text-sm  text-gray-400">
              <span className="block sm:inline">
                Designed &amp; Developed By &nbsp;
              </span>
              <a
                className="inline-block transition  text-teal-500 hover:text-teal-500/75 cursor-pointer"
                onClick={() =>
                  handleNavigation("/campus/?tab=clubs&sub-tab=coding-club")
                }
              >
                Coding Club, CUPGS
              </a>
            </p>
            <p className="mt-4 text-md  sm:order-first sm:mt-0 text-white flex items-center justify-center gap-2">
              <FaRegCopyright />
              <span className="leading-none">
                {new Date().getFullYear()} Center for UG & PG Studies
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
