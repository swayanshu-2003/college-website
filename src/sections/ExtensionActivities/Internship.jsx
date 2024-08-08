import React from 'react'
import InternshipBanner from "@/assets/img/internships.jpg"

const Internship = () => {
    return (
        <div className="min-h-screen flex flex-col gap-6 leading-relaxed text-justify w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    At the Center for UG and PG Studies, BPUT Rourkela, students are encouraged to actively participate in 30-day internship training programs during their summer breaks after their 2nd and 3rd years. These internships provide invaluable hands-on experience in various industries, allowing students to apply their theoretical knowledge in real-world settings and gain insights into the professional environment.
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    In addition to internships, our students engage in a variety of interdisciplinary projects, collaborating with renowned institutions. These projects foster innovation and critical thinking, as students work under the guidance of experienced mentors to solve complex problems and develop cutting-edge solutions. Such initiatives not only enhance their technical skills but also prepare them for diverse career opportunities.
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    The Center also organizes frequent study tours and training sessions, offering students exposure to the latest advancements in their respective fields. These activities are designed to complement the academic curriculum, providing practical knowledge and insights into industry trends and practices. Students from all branches benefit from these programs, which aim to broaden their horizons and deepen their understanding of their chosen disciplines.
                </p>
                <img src={InternshipBanner} alt="internship" className='w-full mt-5' data-aos='fade-up' />
            </div>
        </div>
    )
}

export default Internship