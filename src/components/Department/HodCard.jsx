import React from 'react'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FaBook } from 'react-icons/fa'
import { GiAchievement } from 'react-icons/gi'
import { IoPersonSharp } from 'react-icons/io5'
import { MdAttachEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import dummyImg from "@/assets/faculties/dummyImg.png"


const HodCard = ({ facultyData }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        // navigate('/faculty-details/abc')
        console.log("click")
    }


    return (
        <div className="w-full h-auto p-4" data-aos='fade-up'>
            <div className="w-full h-auto flex flex-col sm:flex-row bg-[#dbe2ff] rounded-xl overflow-hidden border border-1 border-[#6366f1]">
                <div className="w-full sm:w-[30%] flex justify-center items-center bg-gradient-to-b from-[#6366f1] to-indigo-600 p-4 sm:p-0">
                    <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img
                            src={facultyData.HOD.imgurl || "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716163200&semt=ais_user"}
                            alt="hod pic"
                            className="object-cover rounded-full w-full h-full overflow-hidden"
                        />
                    </div>
                </div>
                <div className="w-full sm:w-[70%] p-6 flex flex-col justify-between bg-gray-50">
                    <div className="w-full h-auto">
                        <div className="flex items-center mb-4">
                            <span className="mr-3 text-3xl text-[#6366f1]"><IoPersonSharp /></span>
                            <div className="flex flex-col">
                                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-indigo-400">
                                    {facultyData.HOD.name}
                                </p>
                                <span className="block w-10 h-1 bg-[#6366f1] mt-1"></span>
                            </div>
                        </div>
                        <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                            <span className="mr-3 text-lg text-[#6366f1]"><GiAchievement /></span>
                            {facultyData.HOD.designation}
                        </p>
                        <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                            <span className="mr-3 text-lg text-[#6366f1]"><FaBook /></span>
                            {facultyData.HOD.qualification}
                        </p>
                        <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                            <span className="mr-3 text-lg text-[#6366f1]"><MdAttachEmail /></span>
                            Email: {facultyData.HOD.email}
                        </p>
                        <p className="text-md font-medium flex items-center mt-3 text-gray-500">
                            <span className="mr-3 text-lg text-[#6366f1]"><BsFillTelephoneForwardFill /></span>
                            Phone: {facultyData.HOD.phone}
                        </p>
                    </div>
                    <div className="sticky right-5 bottom-5 w-full flex justify-end items-center">
                        <button onClick={handleClick} className="w-32 rounded-md p-2 bg-[#6366f1] text-center leading-none text-white font-medium cursor-pointer hover:bg-indigo-700 transition duration-300">
                            View Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HodCard