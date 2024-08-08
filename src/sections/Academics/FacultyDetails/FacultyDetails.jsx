import React from 'react';
import facultyImage from "../../../assets/faculties/director.jpg"

const FacultyDetails = () => {

    const faculty = {
        name: "Dr. John Doe",
        designation: "Senior Professor",
        department: "Computer Science Department",
        photo: facultyImage,
        biography: "Dr. John Doe has been a professor of Computer Science at XYZ University for over 20 years. His research interests include artificial intelligence, machine learning, and data science.",
        researchInterests: ["Artificial Intelligence", "Machine Learning", "Data Science"],
        researchPapers: [
            { title: "AI in Healthcare", journal: "Journal of AI Research", year: 2020, link: "https://example.com/paper1" },
            { title: "Machine Learning Techniques", journal: "ML Journal", year: 2019, link: "https://example.com/paper2" },
        ],
        journalPublications: [
            { title: "Advancements in AI", journal: "International Journal of AI", year: 2021, link: "https://example.com/publication1" },
            { title: "Data Science in Practice", journal: "Data Science Journal", year: 2018, link: "https://example.com/publication2" },
        ],
        email: "johndoe@example.com",
        phone: "(123) 456-7890",
        office: "Room 123, Computer Science Building"
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-8">
                <img
                    className="h-40 w-40 object-cover rounded-full shadow-lg"
                    src={faculty.photo}
                    alt={faculty.name}
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="text-3xl font-semibold text-gray-900">{faculty.name}</h2>
                    <p className="text-xl text-gray-700">{faculty.designation}</p>
                    <p className="text-lg text-gray-700">{faculty.department}</p>
                    <div className="flex mt-4">
                        <a href={`mailto:${faculty.email}`} className="mr-4 text-blue-500 hover:underline">{faculty.email}</a>
                        <a href={`tel:${faculty.phone}`} className="text-blue-500 hover:underline">{faculty.phone}</a>
                    </div>
                    <p className="text-gray-700 mt-2">{faculty.office}</p>
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Biography</h3>
                <p className="text-gray-700">{faculty.biography}</p>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Research Interests</h3>
                <ul className="list-disc list-inside text-gray-700">
                    {faculty.researchInterests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Research Papers</h3>
                <ul className="list-disc list-inside text-gray-700">
                    {faculty.researchPapers.map((paper, index) => (
                        <li key={index}>
                            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                {paper.title}
                            </a> - {paper.journal} ({paper.year})
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Journal Publications</h3>
                <ul className="list-disc list-inside text-gray-700">
                    {faculty.journalPublications.map((publication, index) => (
                        <li key={index}>
                            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                {publication.title}
                            </a> - {publication.journal} ({publication.year})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FacultyDetails;
