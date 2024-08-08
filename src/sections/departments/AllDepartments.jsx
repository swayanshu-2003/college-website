import Img from "../../assets/img/cupgs4.jpg";
import { MdOutlineEngineering } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { HiMiniCpuChip } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import Heading from "../../components/Typography/Heading";
import { useNavigate } from "react-router-dom";

const stats = [
  { name: "Branches", value: "5" },
  { name: "Ug Students", value: "350 +" },
  { name: "Pg Students", value: "100 +" },
  { name: "Faculties", value: "30 +" },
  { name: "Library Resources", value: "100,000 +" },
];

const departments = [
  {
    title: "Civil engineering",
    icon: <BsBuilding className="text-4xl text-white" />,
    ug: "70+",
    pg: "20+",
    faculty: "6+",
    iconBg: "#7872eb",
    tab: "civil-engineering"
  },
  {
    title: "Computer science & engineering",
    icon: <FaCode className="text-4xl text-white" />,
    ug: "70+",
    pg: "20+",
    faculty: "6+",
    iconBg: "#ec8048",
    tab: "cse"
  },
  {
    title: "Electrical engineering",
    icon: <MdElectricalServices className="text-4xl text-white" />,
    ug: "70+",
    pg: "20+",
    faculty: "6+",
    iconBg: "#e15b98",
    tab: "electrical-engineering"
  },
  {
    title: "Electronics & communication engineering",
    icon: <HiMiniCpuChip className="text-4xl text-white" />,
    ug: "70+",
    pg: "20+",
    faculty: "6+",
    iconBg: "#27db6dbf",
    tab: "ece"
  },
  {
    title: "Mechanical engineering",
    icon: <MdOutlineEngineering className="text-4xl text-white" />,
    ug: "70+",
    pg: "20+",
    faculty: "6+",
    iconBg: "#279cdbbf",
    tab: "mechanical-engineering"
  },
];

function AllDepartments() {


  const navigate = useNavigate();






  return (
    <div className="container min-h-screen flex flex-col gap-6 justify-between w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
      <div className="w-full flex">
        <div className=" flex flex-col justify-center p-4 text-gray-600">
          {/* <div className="flex w-full flex-row mb-6">
            <span className="mb-2 bg-[#053a7b] w-1 mr-4"></span>
            <div className="w-full flex flex-col justify-between">
              <p className="font-semibold text-2xl mb-2">Engineering At <span className="font-bold text-[25px]">CUPGS BPUT Rourkela</span></p>

            </div>
          </div> */}

          <p className='text-sm mt-2 text-gray-600 leading-relaxed text-justify' data-aos='fade-up'>
            The engineering program at the Center for Undergraduate and Postgraduate Studies, Biju Patnaik University of Technology (BPUT), Rourkela, stands as a beacon of excellence in technical education. Offering a comprehensive array of undergraduate and postgraduate courses, the center is dedicated to fostering innovation, critical thinking, and practical skills among its students. With state-of-the-art laboratories, experienced faculty, and a robust curriculum aligned with industry standards, the center equips students to tackle real-world engineering challenges. Research and development are strongly emphasized, encouraging students to engage in cutting-edge projects and interdisciplinary collaborations. The conducive learning environment, combined with strong industry linkages, ensures that graduates are well-prepared for successful careers in various engineering fields, contributing significantly to technological advancements and societal progress.
          </p>
        </div>
      </div>

      <div className="w-full" data-aos='fade-up'>
        <Heading text={"Engineering @CUPGS at a glance"} />
        <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-0 sm:p-2 md:p-4 " data-aos='fade-up'>
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center">
              <div className="text-2xl font-bold leading-9 tracking-tight text-[#053a7b] text-center">
                {stat.value}
              </div>
              <div className="text-base leading-7 text-gray-600 text-center mt-2">
                {stat.name}
              </div>
            </div>
          ))}
        </div>
      </div>




      <div className="w-full h-auto mt-5 p-2 flex flex-col gap-6" data-aos='fade-up'>
        <Heading text={"Our Departments"} />
        {departments.map((data, index) => {
          return (
            <div
              onClick={() => navigate(`/departments/?tab=${data?.tab}`)}
              key={index}
              className="cursor-pointer w-full h-auto rounded-xl bg-[#f1f5f9] overflow-hidden p-4 flex flex-col md:flex-row justify-center items-center transition-transform transform hover:scale-[1.01]"
              data-aos='fade-up'>
              <div className="w-full md:w-[20%] h-full flex justify-center items-center mb-4 md:mb-0">
                <div
                  className={`h-16 w-16 rounded-full flex justify-center items-center`}
                  style={{ backgroundColor: data?.iconBg }}
                >
                  {data.icon}
                </div>
              </div>
              <div className="w-full md:w-[80%] h-full p-2">
                <p className="text-[20px] font-semibold text-[#053a7b] font-['Merriweather'] uppercase">
                  Department of {data.title}
                </p>
                <div className="w-full flex flex-col md:flex-row justify-between mt-4">
                  <p className="w-full md:w-1/3 h-auto text-md font-normal text-[#4b5563] flex items-center mb-2 md:mb-0">
                    <span className="w-1 bg-green-400 h-4 inline-block mr-3"></span>{data.ug} Ug Students
                  </p>
                  <p className="w-full md:w-1/3 text-md font-normal text-[#4b5563] flex items-center mb-2 md:mb-0">
                    <span className="w-1 bg-green-400 h-4 inline-block mr-3"></span>{data.pg} Pg Students
                  </p>
                  <p className="w-full md:w-1/3 text-md font-normal text-[#4b5563] flex items-center">
                    <span className="w-1 bg-green-400 h-4 inline-block mr-3"></span>{data.faculty} Faculties
                  </p>
                </div>
                <p className="w-full text-md font-normal text-[#4b5563] flex items-center mt-4">
                  <span className="w-1 bg-green-400 h-4 inline-block mr-3"></span>
                  <span className="font-semibold">Head Of The Department :</span>&nbsp; Dr. John Doe
                </p>
              </div>
            </div>

          );
        })}
      </div>


      <div className="w-full px-7 py-4 mt-10 bg-gray-800 text-white rounded-xl shadow-lg" data-aos='fade-up'>
        <div className="flex flex-col justify-between h-full">
          <div className="mb-4">
            <p className="text-xl font-bold leading-snug">
              “Engineers like to solve problems. If there are no problems handily available, they will create their own problems.”
            </p>
          </div>
          <div className="text-right mt-[-30px]">
            <p className="text-md font-normal italic opacity-75">- Scott Adams</p>
          </div>
        </div>
      </div>



    </div>
  );
}

export default AllDepartments;
