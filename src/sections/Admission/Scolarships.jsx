import React from 'react'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import ScolarshipImage from "../../assets/img/scolarship2.jpg"
const Scolarships = () => {
    return (
        <div className="w-[95%] sm:w-[95%] md:w-[85%] relative bg-cover bg-center h-96 text-justify" style={{ backgroundImage: `url(${ScolarshipImage})` }} data-aos='fade-up'>
            <div className="absolute inset-0 bg-white opacity-85"></div>
            <div className="relative flex flex-col  w-full mx-auto mt-4 z-10" data-aos='fade-up'>
                <p className='leading-normal md:leading-loose mb-3' data-aos='fade-up'>
                    Students at the Institute may qualify for various scholarships and stipends based on their merit. Below are brief descriptions of these opportunities:
                </p>
                <ol>

                    <li className='flex items-start mb-3' data-aos='fade-up'>
                        <span className='flex items-center  py-[7px]'>
                            <MdOutlineDoubleArrow className='mr-3' />
                        </span>
                        <span className='leading-normal md:leading-loose'>
                            <strong>National Scholarship</strong>: Sponsored by the Government of India and administered by the Government of Orissa, this scholarship is available throughout the student's tenure at the Institute.
                        </span>

                    </li>
                    <li className='flex items-start mb-3' data-aos='fade-up'>
                        <span className='flex items-center  py-[7px]'>
                            <MdOutlineDoubleArrow className='mr-3' />
                        </span>
                        <span className='leading-normal md:leading-loose'>

                            <strong>Post-Matric Scholarship</strong>: Offered by the Harijan Tribal Welfare Department of the Government of Orissa, this scholarship is for S.C. and S.T. students during their study period.
                        </span>
                    </li>
                    <li className='flex items-start mb-3' data-aos='fade-up'>
                        <span className='flex items-center  py-[7px]'>
                            <MdOutlineDoubleArrow className='mr-3' />
                        </span>
                        <span className='leading-normal md:leading-loose'>

                            <strong>Medhabruti Scholarship</strong>: Provided by the Government of Odisha.
                        </span>
                    </li>
                    <li className='flex items-start mb-3' data-aos='fade-up'>
                        <span className='flex items-center  py-[7px]'>
                            <MdOutlineDoubleArrow className='mr-3' />
                        </span>
                        <span className='leading-normal md:leading-loose'>

                            <strong>PRAGATI & SHAKHAM Scholarships</strong>: These are granted by the Government of India.
                        </span>
                    </li>
                </ol>
            </div>

        </div>
    )
}

export default Scolarships