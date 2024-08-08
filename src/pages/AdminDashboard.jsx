import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SideBar from '../sections/AdminDashboard/SideBar';
import { adminDashboardSideNavData } from '../sections/header/NavData';
import NoticePage from './NoticePage';
import Dashboard from '../sections/AdminDashboard/Dashboard';
import TimeTable from '../sections/AdminDashboard/TimeTable/TimeTable';
import Heading2 from '@/components/Typography/Heading2';

const AdminDashboard = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        console.log(token)
        if (!token) {
            navigate('/auth/login', { replace: true })
        }
    }, [localStorage])


    const [currentTab, setCurrentTab] = useState('dashboard');
    const [renderSections, setRenderSections] = useState([]);

    const loc = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(loc.search);
        const tab = searchParams.get('tab');
        setCurrentTab(tab);
    }, [loc.search])




    const adminDashboardSections = [
        {
            element: <Dashboard />,
            elementTab: "dashboard",
            id: 0,
            title: "Dashboard"
        },
        {
            element: <NoticePage />,
            elementTab: "notices",
            id: 1,
            title: "Notices"
        },
        {
            element: <TimeTable />,
            elementTab: "time-table",
            id: 2,
            title: "TimeTable"
        },
    ]


    useEffect(() => {
        const setSections = () => {
            const data = adminDashboardSections.filter((section) => section.elementTab === currentTab);
            if (data.length === 0) {
                setRenderSections(adminDashboardSections)
            } else {
                setRenderSections(data);
            }
        }
        setSections();
    }, [currentTab])

    return (
        <div className='bg-gray-200 flex'>
            <SideBar data={adminDashboardSideNavData} />
            <div className='w-full flex flex-col items-center justify-center'>
                {
                    renderSections.map((section, index) =>
                        <div className='w-full my-6' key={index}>
                            <Heading2 text={section?.title} />

                            {section.element}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AdminDashboard