import { useEffect, useState } from 'react'
import SideNav from '../components/sideNav/SideNav'
import Faculty from "../sections/Academics/Faculty"
import Syllabus from "../sections/Academics/Syllabus"
import UgPrograms from "../sections/Academics/UgPrograms"
import PgPrograms from "../sections/Academics/PgPrograms"
import TimeTable from "../sections/Academics/TimeTable"
import AcademicCalender from "../sections/Academics/AcademicCalender"
import HolidayList from "../sections/Academics/HolidayList"
import Results from "../sections/Academics/Results"
import LectureNotes from "../sections/Academics/LectureNotes"
import AcademicsImage from '../assets/img/academics.webp'
import { useLocation } from 'react-router-dom';
import NoticeTable from '../sections/AdminDashboard/NoticeTable';
import TopBanner from '../components/Banner/TopBanner';
import Heading2 from '../components/Typography/Heading2';





const Academics = ({ subItems = [] }) => {
    const [currentTab, setCurrentTab] = useState('ug');
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
            element: <UgPrograms />,
            title: "UG Programs",
            elementTab: "ug",
            id: 0
        },
        {
            element: <PgPrograms />,
            title: "PG Programs",
            elementTab: "pg",
            id: 1
        },
        {
            element: <TimeTable />,
            title: "Time Table",
            elementTab: "time-table",
            id: 2
        },
        {
            element: <NoticeTable />,
            title: "All Notices",
            elementTab: "notices",
            id: 3
        },
        {
            element: <Syllabus />,
            elementTab: "syllabus",
            title: "Syllabus",
            id: 4
        },
        {
            element: <Faculty />,
            elementTab: "faculty",
            title: "Faculty",
            id: 5
        },
        {
            element: <AcademicCalender />,
            elementTab: "academic-calender",
            title: "Academic Calender",
            id: 6
        },
        {
            element: <HolidayList />,
            elementTab: "holiday-list",
            title: "Holiday List",
            id: 7
        },
        {
            element: <Results />,
            elementTab: "results",
            title: "Results",
            id: 8
        },
        {
            element: <LectureNotes />,
            elementTab: "lecture-notes",
            title: "Lecture Notes",
            id: 9
        },
    ]

    useEffect(() => {
        const setSections = () => {
            const data = academicSections.filter((section) => section.elementTab === currentTab);
            if (data.length === 0) {
                setRenderSections(academicSections);
                setChild(null)
            } else {
                setRenderSections(data);
                setChild(data[0]?.title);
            }
        }
        setSections();
    }, [currentTab])





    return (
        <div className=" w-full">
            <TopBanner bannerImage={AcademicsImage} text={'Academics'} parent={parent} child={child} position='top' />
            <div className='w-auto flex items-start px-0 sm:px-4 bg-white py-10'>
                <div className="flex flex-col gap-6 sticky left-0 top-16">
                    <SideNav subItems={subItems} />
                </div>
                <div className='ml-0 w-full sm:w-[75%] flex flex-col items-center min-h-screen '>

                    {
                        renderSections.map((section, index) => (
                            <div key={index} className='w-full min-h-screen mb-10'>

                                <Heading2 text={section.title} />


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

export default Academics