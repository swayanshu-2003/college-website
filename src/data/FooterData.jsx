import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

export const socialLinks = [
  {
    link: "",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    link: "",
    icon: <FaSquareXTwitter className="w-5 h-5" />,
  },
  {
    link: "",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    link: "",
    icon: <FaInstagram className="w-5 h-5" />,
  },
];

export const aboutLinks = [
  {
    title: "Cupgs",
    navlink: "about",
    tab: "cupgs",
  },
  {
    title: "Our Mission",
    navlink: "about",
    tab: "mission",
  },
  {
    title: "All departments",
    navlink: "departments",
    tab: "null",
  },
  {
    title: "campus life",
    navlink: "campus",
    tab: "null",
  },
  {
    title: "placement cell",
    navlink: "placement",
    tab: "null",
  },
  {
    title: "alumni",
    navlink: "about",
    tab: "alumni",
  },
];

export const quickLinks = [
  {
    title: "Notices",
    navlink: "academics",
    tab: "notices",
  },
  {
    title: "time table",
    navlink: "academics",
    tab: "time-table",
  },
  {
    title: "syllabus",
    navlink: "academics",
    tab: "syllabus",
  },
  {
    title: "lecture  notes",
    navlink: "academics",
    tab: "lecture-notes",
  },
  {
    title: "holiday list",
    navlink: "academics",
    tab: "holiday-list",
  },
  {
    title: "downloads",
    navlink: "downloads",
    tab: "null",
  },
];

export const HelpfulLinks = [
  {
    title: "results",
    url: "https://results.bput.ac.in/",
  },
  {
    title: "bput",
    url: "https://www.bput.ac.in/",
  },
  {
    title: "Academic Calenders",
    url: "https://www.bput.ac.in/academic-calendar.html",
  },
  {
    title: "ojee",
    url: "https://ojee.nic.in/",
  },
  {
    title: "swayam",
    url: "https://swayam.gov.in/",
  },
  {
    title: "schlorship",
    url: "https://scholarship.odisha.gov.in/website/home",
  },
];

export const contactInfo = [
  {
    icon: <MdEmail className="w-4 h-4 text-teal-500 mr-2 text-sm" />,
    value: "will be updated soon",
  },
  {
    icon: <FaPhoneAlt className="w-4 h-4 text-teal-500 mr-2 text-sm" />,
    value: "(0661) 2482556 / (0661) 2482562",
  },
  {
    icon: <ImLocation2 className="w-4 h-4 text-teal-500 mr-2 text-sm" />,
    value: "Chhend Colony, Rourkela, Odisha-769015",
  },
];
