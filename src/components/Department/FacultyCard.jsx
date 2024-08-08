import React from 'react';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import { IoPersonSharp } from 'react-icons/io5';
import { MdAttachEmail } from 'react-icons/md';
import { ImOffice } from "react-icons/im";

import { useNavigate } from 'react-router-dom';
import dummyImg from "@/assets/faculties/dummyImg.png"

const FacultyCard = ({ data, showAdditionals = false }) => {

    const navigate = useNavigate()
    const handleClick = () => {
        // navigate('/faculty-details/abc')
        console.log("click")
    }

    return (
        <div className="w-full h-auto p-4" data-aos='fade-up'>
            <div className="w-full flex flex-col md:flex-row bg-[#e6fff5] rounded-xl overflow-hidden">
                <div className="w-full md:w-[25%] py-5 md:py-0 flex justify-center items-center bg-gradient-to-b from-teal-400 to-teal-600">
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img
                            src={data.imgurl || 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716163200&semt=ais_user'}
                            alt="hod pic"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="w-full md:w-[70%] py-4 pl-6 flex flex-col justify-between bg-transparent">
                    <div className="w-full h-auto">
                        <div className="flex flex-row items-center mb-4">
                            <span className="mr-3 text-3xl text-teal-500"><IoPersonSharp /></span>
                            <div className="flex flex-col">
                                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                                    {data.name}
                                </p>
                                <span className="block w-10 h-1 bg-teal-400 mt-1"></span>
                            </div>
                        </div>
                        {showAdditionals &&
                            <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                                <span className="mr-3 text-lg text-teal-500"><ImOffice /></span>
                                {`${data.is_hod ? "HOD" : "Faculty"}, ${data.department}`}
                            </p>
                        }
                        <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                            <span className="mr-3 text-lg text-teal-500"><GiAchievement /></span>
                            {data.designation}
                        </p>
                        <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                            <span className="mr-3 text-lg text-teal-500"><FaBook /></span>
                            {data.qualification}
                        </p>
                        <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                            <span className="mr-3 text-lg text-teal-500"><MdAttachEmail /></span>
                            {data.email}
                        </p>
                        <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                            <span className="mr-3 text-lg text-teal-500"><BsFillTelephoneForwardFill /></span>
                            {data.phone}
                        </p>

                    </div>
                    <div className="mt-4 md:mt-0 w-full  flex justify-end items-center">
                        <button onClick={handleClick} className="w-32 rounded-md mr-6 md:mr-0 p-2 bg-teal-500 text-center leading-none text-white font-medium cursor-pointer hover:bg-teal-600 transition duration-300">
                            View Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FacultyCard;
