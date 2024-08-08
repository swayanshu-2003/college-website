import React, { useEffect, useState } from 'react'
import SideNav from '../components/sideNav/SideNav'
import campusImage from '../assets/img/campuslife1.webp'
import { useLocation } from 'react-router-dom';
import TopBanner from '../components/Banner/TopBanner';
import StudentActivity from '../sections/CampusLife/StudentActivity';
import Clubs from '../sections/CampusLife/Clubs';
import HallOfResidence from '../sections/CampusLife/HallOfResidence';
import Facilities from '../sections/CampusLife/Facilities';
import Campus from '../sections/CampusLife/Campus';
import Heading2 from '../components/Typography/Heading2';




const CampusLife = ({ subItems = [] }) => {
    const [currentTab, setCurrentTab] = useState('all');
    const [renderSections, setRenderSections] = useState([]);
    const [parent, setParent] = useState("");
    const [child, setChild] = useState("");

    const loc = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(loc.search);
        const tab = searchParams.get('tab');
        setCurrentTab(tab);
        setParent(subItems[0]?.parent);
    }, [loc.search])

    const campusLifeSection = [

        {
            element: <StudentActivity />,
            title: "Student Activities",
            elementTab: "student-activity",
            id: 0
        },
        {
            element: <Clubs />,
            title: "Clubs",
            elementTab: "clubs",
            id: 0,

        },
        {
            element: <HallOfResidence />,
            title: "Hall Of Residence",
            elementTab: "hall-of-residence",
            id: 0
        },
        {
            element: <Facilities />,
            title: "Facilities",
            elementTab: "facilities",
            id: 0
        },

    ]

    useEffect(() => {
        const setSections = () => {
            const data = campusLifeSection.filter((section) => section.elementTab === currentTab);
            if (data.length === 0) {
                setRenderSections([{
                    element: <Campus />,
                    title: "Campus Life",
                    elementTab: "campus-life",
                    id: 0
                }]);
                setChild(null)
            } else {
                setRenderSections(data);
                setChild(data[0]?.title)
            }
        }
        setSections();
    }, [currentTab])


    const getSubChildren = (tab) => {
        const a = subItems.filter((item) => item?.tab === tab)[0]?.subChildren;
        return a;
    }




    return (
        <div className="w-full">
            <TopBanner bannerImage={campusImage} text={'Campus Life'} parent={parent} child={child} />
            <div className='w-auto flex items-start  px-4 bg-white py-10'>
                <div className="flex flex-col gap-6 sticky left-0 top-16">

                    <SideNav subItems={subItems} />
                    <div className=''>

                        {currentTab === "clubs" && <SideNav subItems={getSubChildren('clubs')} className='' />}
                    </div>
                </div>
                <div className='flex  ml-0 w-full sm:w-[90%] md:w-[75%] flex-col items-center min-h-screen'>
                    {
                        renderSections.map((section, index) => (
                            <div key={index} className='w-auto min-h-screen mb-10'>

                                <Heading2 text={section.title || ""} />
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

export default CampusLife