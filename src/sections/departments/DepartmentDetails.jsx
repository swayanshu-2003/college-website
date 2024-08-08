import PropTypes from "prop-types";
import Heading from "../../components/Typography/Heading";
import { IoIosPeople } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import FacultyCard from "../../components/Department/FacultyCard";
import HodCard from "../../components/Department/HodCard";
import DepartmentGallery from "../../components/Department/DepartmentGallery";
import Gallery from "@/components/Gallery/Gallery";




function DepartmentDetails({ basicData, facultyData }) {
  return (
    <div className="min-h-screen flex flex-col gap-6 justify-between w-[95%] md:w-[85%] mx-auto mt-4" data-aos='fade-up'>
      <div className="w-full h-auto flex flex-col" data-aos='fade-up'>
        <div className="w-full h-full flex flex-col justify-center p-4 text-gray-600" data-aos='fade-up'>
          <div className="w-full h-72 overflow-hidden rounded-xl mb-7" data-aos='fade-up'>
            <img
              src={basicData?.banner}
              alt="Department picture"
              className="object-cover w-full h-full"
              data-aos='fade-up'
            />
          </div>
          <p className="font-bold text-2xl mb-3 text-[#053a7b]"><span className="w-[3px] h-5 inline-block bg-[#053a7b] mr-2" data-aos='fade-up'></span> About the Department</p>
          <p className="mb-3 leading-relaxed text-sm text-justify" data-aos='fade-up'>{basicData.about}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full mb-10 gap-10 px-4 sm:flex-row" data-aos='fade-up'>
        <div className="w-full mb-10 sm:mb-0 sm:w-1/2" data-aos='fade-up'>
          <div className="relative h-full ml-0 mr-0" data-aos='fade-up'>
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
              <div className="flex items-center -mt-1">
                <h3 className="mt-2 text-xl font-bold text-indigo-500 uppercase">Vision</h3>
              </div>
              <p className="mt-1 mb-1 w-full h-[2px] text-xs font-medium bg-indigo-500 uppercase"></p>
              <p className="mb-2 text-gray-600 text-justify leading-relaxed mt-6 text-sm">{basicData?.vision}</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2" data-aos='fade-up'>
          <div className="relative h-full ml-0" data-aos='fade-up'>
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
              <div className="flex items-center -mt-1">
                <h3 className="mt-2 text-xl font-bold text-purple-500 uppercase">Mission</h3>
              </div>
              <p className="mt-1 mb-1 w-full h-[2px] text-xs font-medium bg-purple-500 uppercase"></p>
              <p className="mb-2 text-gray-600 text-justify leading-relaxed mt-6 text-sm">{basicData?.mission}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto mt-8 p-2" data-aos='fade-up'>
        <Heading text="Academic Programmes" />
        <div className="w-full h-auto p-2 grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" data-aos='fade-up'>
          {basicData?.stats?.map((stat, index) => (
            <div key={index} className="w-full" data-aos='fade-up'>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
                <div className="bg-blue-50 flex items-center justify-center text-center w-[40px]">
                  <p className="text-blue-600 font-medium transform -rotate-90 whitespace-nowrap">
                    {stat?.type}
                  </p>
                </div>
                <div className="p-4">
                  <h5 className="text-md font-semibold text-gray-800 mb-4 flex items-center truncate"><span className="mr-3 text-2xl text-blue-900"><GiGraduateCap /></span>{stat?.course}</h5>
                  <p className="text-gray-600 flex items-center text-sm"><span className="mr-3 text-xl text-blue-900"><IoIosPeople /></span>Seats: {stat?.intake}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>



      <div className="w-full h-auto p-2 mt-8" data-aos='fade-up'>
        <Heading text={"Head of the Department"} />
        <HodCard facultyData={facultyData} />

      </div>
      <div className="w-full h-auto p-2 mt-8" data-aos='fade-up'>
        <Heading text={"Faculties"} />
        {facultyData.regularFaculty.map((data, index) => {
          return (
            <FacultyCard key={index} data={data} />

          );
        })}

      </div>
      <div className="w-full h-auto p-2 mt-8" data-aos='fade-up'>
        <Heading text={"Gallery"} />
        <div className="w-full h-auto p-2 text-center text-2xl">
          <Gallery />
        </div>
      </div>


      <div className="w-full px-7 py-4 mt-10 bg-gray-800 text-white rounded-xl shadow-lg" data-aos='fade-up'>
        <div className="flex flex-col justify-between h-full">
          <div className="mb-4">
            <p className="text-xl font-bold leading-snug">
              {basicData?.quote}
            </p>
          </div>
          <div className="text-right mt-[-30px]">
            <p className="text-md font-normal italic opacity-75">{basicData?.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

DepartmentDetails.propTypes = {
  basicData: PropTypes.shape({
    about: PropTypes.string.isRequired,
    vision: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  facultyData: PropTypes.shape({
    HOD: PropTypes.shape({
      imgurl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    regularFaculty: PropTypes.arrayOf(
      PropTypes.shape({
        imgurl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default DepartmentDetails;
