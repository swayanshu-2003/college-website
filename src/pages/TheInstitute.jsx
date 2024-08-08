import { useEffect, useState } from "react";
import SideNav from "../components/sideNav/SideNav";
import AboutCupgs from "../sections/TheInstitute/AboutCupgs";
import MissionAndVision from "../sections/TheInstitute/MissionAndVision";
import FromDirector from "../sections/TheInstitute/FromDirctor";
import DiscoverCupgs from "../sections/TheInstitute/DiscoverCupgs";
import Alumni from "../sections/TheInstitute/Alumni";
import { useLocation } from "react-router-dom";
import CupgsImage from "../assets/img/cupgs9_1.webp";
import TopBanner from "../components/Banner/TopBanner";
import Heading2 from "@/components/Typography/Heading2";
import InstituteGallery from "@/sections/TheInstitute/Gallery/InstituteGallery";

const TheInstitute = ({ subItems = [] }) => {
  const [currentTab, setCurrentTab] = useState("all");
  const [renderSections, setRenderSections] = useState([]);
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");

  const loc = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(loc.search);
    const tab = searchParams.get("tab");
    setCurrentTab(tab);
    setParent(subItems[0]?.parent);
  }, [loc.search]);

  const aboutSections = [
    {
      element: <AboutCupgs />,
      elementTab: "cupgs",
      title: "About CUPGS",
      id: 0,
    },
    {
      element: <MissionAndVision />,
      title: "Mission & Vission",
      elementTab: "mission",
      id: 1,
    },
    {
      element: <FromDirector />,
      elementTab: "directors-message",
      title: "Director's Message",
      id: 2,
    },
    {
      element: <DiscoverCupgs />,
      elementTab: "discover",
      title: "Discover CUPGS",
      id: 3,
    },
    {
      element: <Alumni />,
      elementTab: "alumni",
      title: "Alumni",
      id: 4,
    },
    {
      element: <InstituteGallery />,
      elementTab: "gallery",
      title: "Gallery",
      id: 5,
    },
  ];

  useEffect(() => {
    const setSections = () => {
      const data = aboutSections.filter(
        (section) => section.elementTab === currentTab
      );
      if (data.length === 0) {
        setRenderSections(aboutSections);
        setChild(null);
      } else {
        setRenderSections(data);
        setChild(data[0]?.title);
      }
    };
    setSections();
  }, [currentTab]);

  return (
    <div className="w-full">
      <TopBanner
        parent={parent}
        child={child}
        bannerImage={CupgsImage}
        text={"The Institution"}
        position="center"
      />
      <div className="w-auto flex items-start  px-4 bg-white py-10">
        <div className="flex flex-col gap-6 sticky left-0 top-16">
          <SideNav subItems={subItems} />
        </div>
        <div className="ml-0 w-full sm:w-[75%] flex flex-col items-center">
          {renderSections.map((section, index) => (
            <div key={index} className="w-full mb-10">
              <Heading2 text={section.title} />
              <div className="w-full flex flex-col items-center my-5">
                {section.element}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheInstitute;
