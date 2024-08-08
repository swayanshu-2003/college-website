import React from 'react'
import Heading from '../../components/Typography/Heading'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const CampusLife = () => {
    return (
        <div className="container min-h-screen flex flex-col gap-6 leading-relaxed text-justify w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <Heading text={"Local Culture"} />
                <p className='text-sm mt-4 text-gray-600' data-aos='fade-up'>
                    The rich cultural tapestry of Sundergarh is characterized by a unique blend of dance, music, handicrafts, beliefs, social values, and traditional practices.
                </p>
                <p className='mt-4' data-aos='fade-up'><span className="font-bold">Language Spoken: </span> Hindi, Odia, English</p>
            </div>

            <div className="w-full text-sm my-2" data-aos='fade-up' >
                <Heading text={"Total Area"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up' >
                    The campus spans a total area of 502 acres, with a built-up area consisting of 45,885 sqm allocated for academic buildings and 87,465 sqm dedicated to hostels for both boys and girls, amounting to a total built-up area of 133,325 sqm.
                </p>
            </div>
            <div className="w-full text-sm my-2" data-aos='fade-up' >
                <Heading text={"IT Infrastructure"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up' >
                    The Center for UG and PG Studies, BPUT, Rourkela, is a growing institution equipped with an optimized network infrastructure. The campus-wide connectivity supports academic and administrative functions, and a dedicated team continually enhances the IT facilities. The university has 920 NOC computers available, providing seamless internet access and centralized communication facilities for both students and faculty.
                </p>
            </div>

            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <Heading text={"Academic Infrastructure"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center flex-wrap' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Auditorium:</span>
                    <span> 1,200-seat capacity</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center flex-wrap' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>E-learning Centre:</span>
                    <span>  Biju Patnaik E-learning Centre with 300 seats</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center flex-wrap' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Classrooms:</span>
                    <span>  70 large rooms, 15 tutorial rooms, 10 smart classrooms</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center flex-wrap' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Department Buildings:</span>
                    <span> Individual buildings for each department</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center flex-wrap' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Laboratories:</span>
                    <span> State-of-the-art labs</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center flex-wrap' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Library:</span>
                    <span> Central library</span>
                </p>
            </div>

            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <Heading text={"Research Facility & Labs"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    Faculty and students at our center engage in cutting-edge research that addresses societal and industrial needs. Our curriculum is project-driven, emphasizing design and practical application. We foster industry relationships and support faculty and students in pursuing sponsored research and consultancy projects. Collaborative programs and industry projects are highly encouraged, providing practical experience and problem-solving skills.
                </p>
            </div>
            <div className="w-full text-sm my-2">
                <Heading text={"Places To Visit Nearby"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure vero perferendis nisi, fugit, exercitationem odit iusto repellat voluptates quaerat soluta optio magnam necessitatibus a modi neque ratione placeat vel illum quisquam sunt explicabo deserunt. Exercitationem at itaque illo optio aspernatur. Quis nam quas quos cum laborum incidunt magni, sequi corrupti, dolor dolorum enim hic eveniet numquam?
                </p>
            </div>
        </div>
    )
}

export default CampusLife