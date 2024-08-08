import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "../components/sideNav/SideNav";
import TopBanner from "../components/Banner/TopBanner";
import AllDeptImg from "../assets/img/alldept.webp";
import AllDepartments from "../sections/departments/AllDepartments";
import DepartmentDetails from "../sections/departments/DepartmentDetails";
import DepartmentData from "@/data/departmentData";
import FacultyDetails from "../data/facultyData";
import Heading2 from "../components/Typography/Heading2";

function DepartmentsList({ subItems = [] }) {
  const [currentTab, setCurrentTab] = useState("all");
  const [renderSections, setRenderSections] = useState([]);
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");

  const loc = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(loc.search);
    const tab = searchParams.get("tab");
    setCurrentTab(tab || "all");
    setParent(subItems[0]?.parent);
  }, [loc.search]);

  const DepartmentSection = [
    {
      element: <AllDepartments />,
      title: "Engineering",
      elementTab: "all",
      id: 0,
    },
    {
      element: (
        <DepartmentDetails
          basicData={DepartmentData[0].civil}
          facultyData={FacultyDetails.civil}
        />
      ),
      title: "Civil Engineering",
      elementTab: "civil-engineering",
      id: 1,
    },
    {
      element: (
        <DepartmentDetails
          basicData={DepartmentData[0].computerScience}
          facultyData={FacultyDetails.computerScience}
        />
      ),
      title: "Computer Science & Engineering",
      elementTab: "cse",
      id: 2,
    },
    {
      element: (
        <DepartmentDetails
          basicData={DepartmentData[0].electrical}
          facultyData={FacultyDetails.electrical}
        />
      ),
      title: "Electrical Engineering",
      elementTab: "electrical-engineering",
      id: 3,
    },
    {
      element: (
        <DepartmentDetails
          basicData={DepartmentData[0].electronics}
          facultyData={FacultyDetails.electronics}
        />
      ),
      title: "Electronics & Communication Engineering",
      elementTab: "ece",
      id: 4,
    },
    {
      element: (
        <DepartmentDetails
          basicData={DepartmentData[0].mechanical}
          facultyData={FacultyDetails.mechanical}
        />
      ),
      title: "Mechanical Engineering",
      elementTab: "mechanical-engineering",
      id: 5,
    },
  ];

  useEffect(() => {
    const setSections = () => {
      const data = DepartmentSection.filter(
        (section) => section.elementTab === currentTab
      );
      if (data.length === 0) {
        setRenderSections([DepartmentSection[0]]);
        setChild(null)
      } else {
        setRenderSections(data);
        setChild(data[0]?.title)
      }
    };
    setSections();
  }, [currentTab]);

  return (
    <div className="w-full">
      <TopBanner bannerImage={AllDeptImg} text="Departments" parent={parent} child={child} />
      <div className="w-auto flex items-start px-0 sm:px-4 bg-white py-10">
        <div className="flex flex-col gap-6 sticky left-0 top-16">
          <SideNav subItems={subItems} />
        </div>
        <div className="ml-0 w-full sm:w-[75%] flex flex-col items-center min-h-screen">
          {renderSections.map((section, index) => (
            <div key={index} className='w-auto min-h-screen mb-10'>
              <Heading2 text={section.title || ""} />
              <div className="w-full flex flex-col items-center my-5">
                {section.element}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

DepartmentsList.propTypes = {
  subItems: PropTypes.arrayOf(PropTypes.object),
};

export default DepartmentsList;
