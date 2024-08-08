import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomSelect from '@/components/FormComponents/CustomSelect/CustomSelect';
import Alert from '@/components/FormComponents/CustomSelect/Alerts/Alert';
import { REACT_APP_HOST_API } from "@/config";
import { FormProvider, useForm } from 'react-hook-form';

const TimeTable = () => {
    const [allTimeTables, setAllTimeTables] = useState([]);
    const [filteredTimeTable, setFilteredTimeTable] = useState([]);
    const [alert, setAlert] = useState(false);

    const methods = useForm();
    const { handleSubmit, setValue, formState: { errors } } = methods;

    useEffect(() => {
        const fetchTimeTables = async () => {
            const data = await axios.get(`${REACT_APP_HOST_API}/timetables`);
            if (data?.data?.success) {
                setAllTimeTables(data?.data?.data?.timeTables);
            } else {
                console.log("error fetching time table");
            }
        };
        fetchTimeTables();
    }, []);

    const departmentOptions = [
        { value: 'cse', label: 'CSE' },
        { value: 'civil', label: 'Civil' },
        { value: 'electrical', label: 'Electrical' },
        { value: 'ece', label: 'ECE' },
        { value: 'mechanical', label: 'Mechanical' },
    ];

    const semOptions = [
        { value: 1, label: '1st Sem' },
        { value: 2, label: '2nd Sem' },
        { value: 3, label: '3rd Sem' },
        { value: 4, label: '4th Sem' },
        { value: 5, label: '5th Sem' },
        { value: 6, label: '6th Sem' },
        { value: 7, label: '7th Sem' },
        { value: 8, label: '8th Sem' },
    ];

    const sessionOptions = [
        { value: '2022-23', label: '2022-23' },
        { value: '2023-24', label: '2023-24' },
        { value: '2024-25', label: '2024-25' },
    ];

    const onSubmit = (data) => {
        const { semester, branch, session } = data;

        // Filter TimeTable based on selected department, semester, and session
        const filtered = allTimeTables.filter(item => {
            return (item.semester === parseInt(semester, 10) || semester === "all") &&
                (item.branch.toLowerCase() === branch.toLowerCase() || branch === "all") &&
                (item.session === session || session === "all");
        });

        filtered.length === 0 ? setAlert(true) : setAlert(false);
        setFilteredTimeTable(filtered);
    };

    return (
        <div className="container min-h-screen flex flex-col gap-6 w-[95%] md:w-[85%] mx-auto mt-4" data-aos='fade-up'>
            <FormProvider {...methods}>
                <form className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
                    <CustomSelect
                        options={semOptions}
                        placeholder={"Select Semester"}
                        className='w-1/4'
                        required={true}
                        name="semester"
                    />
                    <CustomSelect
                        options={departmentOptions}
                        placeholder={"Select Department"}
                        className='w-1/4'
                        required={true}
                        name="branch"
                    />
                    <CustomSelect
                        options={sessionOptions}
                        placeholder={"Select Session"}
                        className='w-1/4'
                        required={true}
                        name="session"
                    />
                    <button type='submit' className=" justify-self-end md:justify-self-auto px-6 h-fit py-1 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
                        View
                    </button>
                </form>
            </FormProvider>

            <div className="w-full flex flex-col gap-3 font-mono mb-10 mt-5" data-aos='fade-up'>
                {filteredTimeTable.length > 0 ? (
                    filteredTimeTable.map((el, index) => (
                        <a
                            key={index}
                            href={el?.link} target='_blank'
                            className="text-blue-900 font-semibold border-l-8 border-blue-500 rounded-md px-3 py-2 w-full bg-blue-50" data-aos='fade-up'>
                            <span className='w-full'>
                                {el.title || `Time Table for ${el.branch},Semester - ${el.semester} `}
                            </span>
                            <div className="text-gray-500 font-thin text-sm pt-1 flex items-center w-full">
                                <span className='w-1/3 capitalize'>Department: {el.branch}</span>
                                <span className='w-1/3'>Semester: {el.semester}</span>
                                <span className='w-1/3'>Session: {el.session}</span>
                            </div>
                        </a>
                    ))
                ) : (
                    alert && <Alert text={"No Time Table Found for Your Search"} data-aos='fade-up' />
                )}
            </div>
        </div>
    );
};

export default TimeTable;
