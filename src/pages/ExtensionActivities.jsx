import { useEffect, useState } from "react";
import SideNav from "../components/sideNav/SideNav";
import ExtraImage from "../assets/img/extra.webp";
import { useLocation } from "react-router-dom";
import TopBanner from "../components/Banner/TopBanner";
import Conference from "../sections/ExtensionActivities/Conference";
import Internship from "../sections/ExtensionActivities/Internship";
import Heading2 from "@/components/Typography/Heading2";

const ExtensionActivities = ({ subItems = [] }) => {
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

  const ExtensionActivitiesSection = [
    {
      element: <Conference />,
      title: "Seminars/Workshops",
      elementTab: "conference",
      id: 0,
    },
    {
      element: <Internship />,
      title: "Internships",
      elementTab: "internship",
      id: 0,
    },
  ];

  useEffect(() => {
    const setSections = () => {
      const data = ExtensionActivitiesSection.filter((section) => section.elementTab === currentTab);
      if (data.length === 0) {
        setRenderSections(ExtensionActivitiesSection)
        setChild(null)
      } else {
        setRenderSections(data);
        setChild(data[0]?.title)
      }
    }
    setSections();
  }, [currentTab])





  return (
    <div className="w-full overflow-x-hidden">
      <TopBanner bannerImage={ExtraImage} text={'Extension Activities'} parent={parent} child={child} position="top" />
      <div className='w-auto flex items-start  px-4 bg-white py-10'>
        <div className="flex flex-col gap-6 sticky left-0 top-16">
          <SideNav subItems={subItems} />
        </div>
        <div className='ml-0 w-full sm:w-[75%] flex flex-col items-center min-h-screen'>
          {
            renderSections.map((section, index) => (
              <div className='w-auto min-h-screen mb-10'>

                <p key={index} class=" flex flex-col items-center justify-center text-2xl md:text-4xl font-semibold uppercase py-2 !w-fit m-auto text-center font-['Merriweather'] ">
                  <span className='text-gray-800 mx-0 text-3xl'>
                    {section.title || ""}
                  </span>
                  <span className="bg-cyan-400 w-3/5 h-[2px] block self-end"></span>
                </p>
                <div className="w-full flex flex-col items-center my-5">
                  {section.element}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ExtensionActivities;
