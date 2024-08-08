import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { REACT_APP_HOST_API } from '../../config';
import axios from 'axios';
import { deleteCookie } from '../../utils/cookie';
import SlideInModel from '../Modal/Modal';
import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const SubItemsButton = ({ className, data, activeClasses = "", hoverClasses = "", icon = false }) => {
    const [currentTab, setCurrentTab] = useState('all');
    const [subTab, setSubtab] = useState('');
    const [OpenLogout, setOpenLogout] = useState(false);
    const [logoutLoading, setLoagoutLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isSubTabActive, setIsSubTabActive] = useState(false);

    const navigate = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(loc.search);
        const tab = searchParams.get('tab');
        const subtab = searchParams.get('sub-tab');
        setCurrentTab(tab);
        setSubtab(subtab);
    }, [loc.search])

    const handleClick = async (data) => {
        if (data.path === "/dashboard") {
            const token = sessionStorage.getItem('token')
            if (token) {
                navigate(`${data?.path}/?tab=${data?.tab}`);
            }
            else {
                navigate('/auth/login', { replace: true });
            }
        }
        else if (data.title === "Logout") {
            setOpenLogout(true)
            // const data = await axios.get(`${REACT_APP_HOST_API}/logout`);
            // sessionStorage.clear();
            // deleteCookie('token');
            // navigate('/auth/login', { replace: true });
        }
        else if (data.parent === "Clubs") {
            navigate(`${data?.path}/?tab=${data?.tab}&sub-tab=${data?.ownTab}`);

        } else {
            navigate(`${data?.path}/?tab=${data?.tab}`);
        }

    }

    const handleLogout = async () => {
        setLoagoutLoading(true);
        const data = await axios.get(`${REACT_APP_HOST_API}/logout`);
        sessionStorage.clear();
        deleteCookie('token');
        navigate('/auth/login', { replace: true });
        setOpenLogout(false);
        setLoagoutLoading(false);
    }


    useEffect(() => {
        if (data?.ownTab && data?.ownTab === subTab) {
            setIsActive(false);
            setIsSubTabActive(true);
        } else if (data?.tab === currentTab) {
            setIsActive(true);
            setIsSubTabActive(false);
        }
        else {
            setIsActive(false);
            setIsSubTabActive(false);
        }
    }, [currentTab, subTab])



    return (
        <>
            {OpenLogout && <SlideInModel open={OpenLogout}  >
                <div className="mx-auto w-[400px] bg-white rounded-lg">
                    <div className='w-full flex items-center justify-between bg-gray-800 rounded-t-lg px-4'>
                        <h1 className="w-auto text-white text-xl font-medium px-1 py-2">Confirm Logout</h1>
                        <RxCross2 onClick={() => setOpenLogout(false)} className="text-md text-white cursor-pointer" />
                    </div>

                    <div className='p-4'>
                        <p className="mb-5">Do you Really want to Logout ?</p>

                        <div className='w-full flex gap-2 justify-end'>
                            <Button onClick={() => setOpenLogout(false)} color='info' variant="outlined">Cancel</Button>
                            <LoadingButton sx={{ backgroundColor: "rgb(31 41 55)", color: "white" }} onClick={() => handleLogout()} loading={logoutLoading} type="button" variant="contained" >
                                Logout
                            </LoadingButton>
                        </div>
                    </div>
                </div>
            </SlideInModel>}


            <p onClick={() => handleClick(data)} className={`${className} ${isActive && !data?.ownTab ? activeClasses : ""} ${isSubTabActive && 'text-white bg-blue-500 hover:bg-blue-500'} ${hoverClasses}`}>
                {data.icon}
                {icon && <MdKeyboardDoubleArrowRight className="mr-4" />}
                <span>{data.title}</span>

            </p>

        </>
    )
}

export default SubItemsButton