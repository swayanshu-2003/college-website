import React from 'react'
import FacultyCard from '../../components/Department/FacultyCard'
import FacultyDetails from '@/data/facultyData'

const Faculty = () => {


    const getAllFacultyDetails = (facultyDetails) => {
        const allFaculty = [];

        Object.keys(facultyDetails).forEach(departmentKey => {
            const department = facultyDetails[departmentKey];

            // Add HOD with is_hod flag
            if (department.HOD) {
                allFaculty.push({
                    ...department.HOD,
                    is_hod: true,
                });
            }

            // Add regular faculty with is_hod flag
            if (department.regularFaculty && department.regularFaculty.length > 0) {
                department.regularFaculty.forEach(faculty => {
                    allFaculty.push({
                        ...faculty,
                        is_hod: false,
                    });
                });
            }
        });

        return allFaculty;
    };

    // Usage
    const allFacultyDetails = getAllFacultyDetails(FacultyDetails);





    return (
        <div className="px-2 min-h-screen flex flex-col gap-6 justify-between w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            <p className="text-justify mt-7 mb-10 text-sm leading-normal md:leading-loose text-gray-600" data-aos='fade-up'>
                The faculties at the Center for Undergraduate and Postgraduate Studies, Biju Patnaik University of Technology (BPUT), Odisha, are dedicated to providing a comprehensive and enriching academic experience to their students. Comprising a diverse group of highly qualified and experienced educators, the faculty members bring expertise from various fields, including engineering, management, computer applications, and applied sciences. They are committed to fostering an environment that encourages critical thinking, innovation, and research. The faculty members engage in continuous professional development to stay abreast of the latest advancements in their respective domains, ensuring that they deliver up-to-date knowledge and skills to their students. Additionally, they are actively involved in research projects and industry collaborations, providing students with opportunities to engage in practical, hands-on learning experiences. Their dedication to teaching and research excellence helps in shaping competent professionals ready to meet the demands of the global job market.
            </p>

            {allFacultyDetails?.map((item, index) =>
                <FacultyCard key={index} data={item} showAdditionals={true} />
            )}
        </div>
    )
}

export default Faculty