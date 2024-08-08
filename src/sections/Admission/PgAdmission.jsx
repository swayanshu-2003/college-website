import React from 'react'
import DataTable from 'react-data-table-component'
import Heading from '../../components/Typography/Heading';
import { MdOutlineDoubleArrow } from "react-icons/md";
import ComingSoon from '@/components/ComingSoon/ComingSoon';


const PgAdmission = () => {

    const UGAdmissionData = [
        { sl_no: 1, full_time_course: 'B.TECH in Civil Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: 2, full_time_course: 'B.TECH in Computer Science & Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: 3, full_time_course: 'B.TECH in Electrical Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: 4, full_time_course: 'B.TECH in Electronics And Communication Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: 5, full_time_course: 'B.TECH in Mechanical Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: "", full_time_course: 'Total Annual Intake', capacity: 150, duration: "" },

    ];


    const columns = [
        {
            name: 'Sl. No.',
            selector: row => row.sl_no,
            sortable: true,
            cell: row => <div className="text-left">{row.sl_no}</div>,
            style: {
                backgroundColor: '#f8f9fa',
            },
            width: "100px",
        },
        {
            name: 'Full Time Courses',
            selector: row => row.full_time_course,
            sortable: true,
            cell: row => <div className="text-left">{row.full_time_course}</div>,
            style: {
                backgroundColor: '#f8f9fa',
            },
        },
        {
            name: 'Intake Capacity',
            selector: row => row.capacity,
            width: "200px",
            sortable: true,
            center: true,
            style: {
                backgroundColor: '#f8f9fa',
            },
        },
        {
            name: 'Duration',
            selector: row => row.duration,
            width: "200px",
            sortable: true,
            center: true,
            style: {
                backgroundColor: '#f8f9fa',
            },
        },
    ];

    const customStyles = {
        table: {
            style: {
                width: "1100px"
            },
        },
        headCells: {
            style: {
                fontSize: '16px',
                // fontWeight: 'bold',
                // backgroundColor: '#2c5282',
                color: 'white',
            },
        },
        headRow: {
            style: {
                color: "#ffffff",
                background: 'rgb(31,41,55,1) !important',
            },
        },
        cells: {
            style: {
                fontSize: "16px",
                backgroundColor: '#ffffff',
                border: '1px solid #E2E8F0',
            },
        },
    };



    return (
        <div className="container flex flex-col gap-6 justify-between  w-[95%] sm:w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            {/* <div>
                <Heading text={'Admission Procedure'} />
                <p className='leading-loose' >
                    The admission procedure for Center For UG & PG Studies, BPUT, Rourkela is as per Biju Patnaik University of Technology, Odisha (BPUT) norms and is strictly governed by Odisha Joint Entrance Examination (OJEE).
                </p>
            </div>
            <div>
                <Heading text={'Eligibility & Selection Criteria'} />
                <ol>

                    <li className='flex items-start mb-2'>
                        <span className='flex items-center  py-[7px]'>
                            <MdOutlineDoubleArrow className='mr-3' />
                        </span>
                        <span className='leading-loose'>
                            Admission criteria to Under-graduate- Engineering Programs are made through JEE-Main and O-JEE only and Lateral Entry through O-JEE.
                        </span>

                    </li>
                    <li className='flex items-start'>
                        <span className='flex items-center  py-[7px]'>
                            <MdOutlineDoubleArrow className='mr-3' />
                        </span>
                        <span className='leading-loose'>

                            Details of reservation, eligibility and medical requirements are provided in O-JEE brochure. And visit the website: <a className='text-red-600' href="http://www.odishajee.com" target='_blank'>http://www.odishajee.com</a> or <a className='text-red-600' href="http://www.odishajee.com" target='_blank'>https://ojee.nic.in</a>.
                        </span>
                    </li>
                </ol>
            </div>
            <div>
                <Heading text={'Reservation Of Seats'} />
                <p className='leading-loose'>
                    Some seats in Engineering are reserved for S.C, S.T, Diploma holders in Engineering. Children of Green Card Holders, Woman Candidates of the State and Physically handicapped candidates, Non-Resident Orissa. Detailed information can be obtained from JEE information brochure or visit website: <a className='text-red-600' href="http://www.odishajee.com" target='_blank'>http://www.odishajee.com</a> or <a className='text-red-600' href="http://www.odishajee.com" target='_blank'>https://ojee.nic.in</a>.
                </p>
                <p className='my-4 font-medium leading-loose text-gray-900'>
                    The intake strength of various departments as approved by AICTE for the session 2017-18 and degree awarded as follows:
                </p>
                <div className=''>
                    <DataTable
                        columns={columns}
                        data={UGAdmissionData}
                        customStyles={customStyles}
                        pagination={false}
                    />
                </div>
            </div>
            <div className='mt-4'>
                <Heading text={'Fee Structure for Regular Courses (B.Tech)'} />
                <p className='my-4 font-medium leading-loose text-gray-900'>
                    Fee for Fresher Excepting TFW Student :
                </p>
                <div className='my-3'>
                    <DataTable
                        columns={columns}
                        data={UGAdmissionData}
                        customStyles={customStyles}
                        pagination={false}
                    />
                </div>
                <p className='leading-loose'>
                    Fee to be deposited Via Demand Draft
                </p>
                <p className='my-4 font-medium leading-loose text-green-600'>
                    The above Fee structure may be changed from time to time as per Govt. Notifications.
                </p>
            </div>
            <div className='mt-4'>
                <Heading text={'Detailed Fee Structures For Lateral B.Tech.'} />
                <p className='my-4 font-medium leading-loose text-gray-900'>
                    (2nd Year ) Admitted In The Year 2017-2018. (Excepting TFW Student)
                </p>
                <div className='my-3'>
                    <DataTable
                        columns={columns}
                        data={UGAdmissionData}
                        customStyles={customStyles}
                        pagination={false}
                    />
                </div>
                <p className='leading-loose'>
                    Fee to be deposited Via Demand Draft
                </p>
                <p className='my-4 font-medium leading-loose text-green-600'>
                    The above Fee structure may be changed from time to time as per Govt. Notifications.
                </p>
            </div> */}
            <ComingSoon />
        </div>
    )
}

export default PgAdmission