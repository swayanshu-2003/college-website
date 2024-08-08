import React, { useEffect, useState } from 'react'
import SideNav from '../components/sideNav/SideNav'
import AcademicsImage from '../assets/img/cupgs2.webp'
import { useLocation } from 'react-router-dom';
import TopBanner from '../components/Banner/TopBanner';
import UgAdmission from '../sections/Admission/UgAdmission';
import PgAdmission from '../sections/Admission/PgAdmission';
import Scolarships from '../sections/Admission/Scolarships';
import AntiRagging from '../sections/Admission/AntiRagging';
import Heading2 from '../components/Typography/Heading2';





const Admission = ({ subItems = [] }) => {
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

    // console.log(currentTab)
    const academicSections = [
        {
            element: <UgAdmission />,
            title: "UG Admission",
            elementTab: "ug-admission",
            id: 0
        },
        {
            element: <PgAdmission />,
            title: "PG Admission",
            elementTab: "pg-admission",
            id: 0
        },
        {
            element: <Scolarships />,
            title: "Scolarships",
            elementTab: "scholarships",
            id: 0
        },
        {
            element: <AntiRagging />,
            title: "Anti Ragging",
            elementTab: "anti-ragging",
            id: 0
        },

    ]

    useEffect(() => {
        const setSections = () => {
            const data = academicSections.filter((section) => section.elementTab === currentTab);
            if (data.length === 0) {
                setRenderSections(academicSections)
                setChild(null)
            } else {
                setRenderSections(data);
                setChild(data[0]?.title)
            }
        }
        setSections();
    }, [currentTab])





    return (
        <div className="w-full">
            <TopBanner bannerImage={AcademicsImage} text={'Admission'} parent={parent} child={child} />
            <div className='w-auto flex items-start px-2 sm:px-4 bg-white py-10'>
                <div className="flex flex-col gap-6 sticky left-0 top-16">
                    <SideNav subItems={subItems} />
                </div>
                <div className='ml-0 w-full sm:w-[75%] flex flex-col items-center'>

                    {
                        renderSections.map((section, index) => (
                            <div key={index} className='w-auto mb-10'>

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

export default Admission