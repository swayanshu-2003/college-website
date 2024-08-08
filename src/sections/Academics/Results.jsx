import Heading from '@/components/Typography/Heading'
import React from 'react'
import { LiaNewspaperSolid } from "react-icons/lia";


const Results = () => {
    return (
        <div className="min-h-screen flex flex-col gap-6 justify-between  w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            <div className="w-full text-sm my-2 text-justify" data-aos='fade-up'>
                <Heading text={"Examinations"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    The Center for Undergraduate and Postgraduate Studies (CUPGS) at Biju Patnaik University of Technology (BPUT) in Rourkela has established a rigorous and transparent examination system designed to ensure fair and comprehensive evaluation of students' academic performance. This system includes multiple layers of assessment, aiming to provide a holistic measure of students' knowledge and skills across various subjects and practical disciplines.                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    Every semester, CUPGS conducts two internal exams for each subject, with each exam carrying a total of 30 marks. These internal exams are a critical component of the overall assessment strategy. They are designed to encourage continuous learning and regular academic engagement from the students.
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    In addition to the internal exams, the assessment framework includes practical exams, which are conducted with stringent adherence to procedural rigor. These practical exams comprise laboratory work, viva voce, and project evaluations. The practical assessments are crucial in evaluating the application of theoretical knowledge in real-world scenarios, thereby bridging the gap between classroom learning and practical implementation. The viva voce, in particular, tests the students' understanding of the subject matter and their ability to articulate their knowledge clearly and confidently. Project evaluations further add to the comprehensive assessment by encouraging innovation, research skills, and practical problem-solving abilities among students.
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    Before the semester exams, students also undergo an internship evaluation, reflecting CUPGS's commitment to integrating practical industry experience with academic learning. Internships provide students with valuable exposure to professional environments, enabling them to apply their academic knowledge in practical settings. The evaluation of internships involves a thorough review of the students' performance during their internships, including the quality of their work, their professional conduct, and their ability to meet the objectives of their internship programs.
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    CUPGS&apos;s strict and transparent conduct of exams underscores the institution's dedication to upholding high academic standards and integrity. By combining rigorous internal assessments, practical evaluations, and transparent result dissemination, CUPGS ensures that students receive a well-rounded and fair assessment of their academic and practical capabilities. This comprehensive evaluation system not only enhances the learning experience but also prepares students for professional success, ensuring that they are well-equipped with the necessary knowledge, skills, and experience to excel in their future careers.
                </p>
            </div>
            <div className="w-full text-sm my-2 text-justify" data-aos='fade-up'>
                <Heading text={"Internal Results"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    The results of these internal assessments are promptly displayed to the students by the concerned faculties within 15 days. This swift turnaround ensures that students receive timely feedback, allowing them to understand their performance and address any academic deficiencies before the next round of exams. Faculty members prioritize the evaluation process, meticulously marking each answer script and providing constructive feedback. This approach helps students grasp their strengths and areas for improvement, fostering an environment of continuous learning and academic development.
                </p>
            </div>
            <div className="w-full text-sm my-2 text-justify" data-aos='fade-up'>
                <Heading text={"Semester Results"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    The semester results are published on the BPUT website, ensuring transparency and easy access for all students. This centralized online platform allows students to view their academic performance from anywhere, providing a convenient and reliable way to obtain their results. By using the official university website, BPUT maintains the integrity and authenticity of the results, minimizing the risk of errors or misinformation. Additionally, the online publication of results supports a streamlined and efficient process, enabling students to quickly verify their grades and plan their academic progression accordingly. This digital approach also enhances communication between the university and its students, reinforcing BPUT's commitment to providing a modern, student-centric educational experience.
                </p>

                <a href="https://results.bput.ac.in" className='flex items-center my-6 text-blue-700 italic underline text-lg' data-aos='fade-up'>
                    <span className='text-blue-700 text-2xl mr-4'><LiaNewspaperSolid /></span>Click Here to Check Semester results</a>
            </div>




        </div>
    )
}

export default Results