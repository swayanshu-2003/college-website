import React from 'react'
import DataTable from 'react-data-table-component'
import Heading from '../../components/Typography/Heading';
import { MdOutlineDoubleArrow } from "react-icons/md";


const UgAdmission = () => {

    const UGAdmissionData = [
        { sl_no: 1, full_time_course: 'B.TECH in Civil Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: 2, full_time_course: 'B.TECH in Computer Science & Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: 3, full_time_course: 'B.TECH in Electrical Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: 4, full_time_course: 'B.TECH in Electronics And Communication Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: 5, full_time_course: 'B.TECH in Mechanical Engineering', capacity: 30, duration: "4 Years" },
        { sl_no: "", full_time_course: 'Total Annual Intake', capacity: 150, duration: "" },

    ];
    const UGDualdmissionData = [
        { sl_no: 1, full_time_course: 'B.Tech in Civil Engineering & M.Tech (in Structural Engineering)', capacity: 10, duration: "4 Years" },
        { sl_no: 2, full_time_course: 'B.Tech in Computer Science & Engineering & M.Tech (in Computer Science & Engineering)', capacity: 10, duration: "4 Years" },
        { sl_no: 3, full_time_course: 'B.Tech in Electrical Engineering & M.Tech (in Power Systems Engineering)', capacity: 10, duration: "4 Years" },
        { sl_no: 4, full_time_course: 'B.Tech in Electronics & Communication Engineering & M.Tech (in Signal Processing & Communication)', capacity: 10, duration: "4 Years" },
        { sl_no: 5, full_time_course: 'B.Tech in Electronics & Communication Engineering & M.Tech (in Signal Processing & Communication)', capacity: 10, duration: "4 Years" },
        { sl_no: "", full_time_course: 'Total Annual Intake', capacity: 50, duration: "" },

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
            name: 'Intake',
            selector: row => row.capacity,
            width: "140px",
            sortable: true,
            center: true,
            style: {
                backgroundColor: '#f8f9fa',
            },
        },
        {
            name: 'Duration',
            selector: row => row.duration,
            width: "130px",
            sortable: true,
            center: true,
            style: {
                backgroundColor: '#f8f9fa',
            },
        },
    ];




    const RegularFeeData = [
        { slNo: 1, details: 'Tuition Fee', firstYear: 12000, secondYear: 12000, thirdYear: 12000, fourthYear: 12000 },
        { slNo: 2, details: 'Development Fee', firstYear: 7000, secondYear: 7000, thirdYear: 7000, fourthYear: 7000 },
        { slNo: 3, details: 'Caution Money (Refundable)', firstYear: 2500, secondYear: 0, thirdYear: 0, fourthYear: 0 },
        { slNo: 4, details: 'BPUT Fee & Regd. Fee', firstYear: 1500, secondYear: 3000, thirdYear: 3000, fourthYear: 3000 },
        { slNo: 5, details: 'Laboratory Maintenance Fee', firstYear: 1500, secondYear: 1500, thirdYear: 1500, fourthYear: 1500 },
        { slNo: 6, details: 'Students Activity Fee', firstYear: 1500, secondYear: 1500, thirdYear: 1500, fourthYear: 1500 },
        { slNo: 7, details: 'Site visit Fee', firstYear: 600, secondYear: 600, thirdYear: 600, fourthYear: 600 },
        { slNo: 8, details: 'Internal Examination Fee', firstYear: 1800, secondYear: 1800, thirdYear: 1800, fourthYear: 1800 },
        { slNo: 9, details: 'Training & Placement Fee (One Time)', firstYear: 5000, secondYear: 0, thirdYear: 0, fourthYear: 0 },
        { slNo: 10, details: 'Alumni Fee (One Time)', firstYear: 1500, secondYear: 0, thirdYear: 0, fourthYear: 0 },
        { slNo: 11, details: 'Transportation Fee (Girls)', firstYear: 7500, secondYear: 0, thirdYear: 0, fourthYear: 0 },
        { slNo: 12, details: 'Redcross & NSS', firstYear: 40, secondYear: 30, thirdYear: 30, fourthYear: 30 },
        { slNo: 'Total', details: '', firstYear: 42440, secondYear: 27430, thirdYear: 27430, fourthYear: 27430 }
    ];

    const LateralFeeStructure = [
        { slNo: 1, details: 'Tuition Fee', secondYear: 12000, thirdYear: 12000, fourthYear: 12000 },
        { slNo: 2, details: 'Development Fee', secondYear: 7000, thirdYear: 7000, fourthYear: 7000 },
        { slNo: 3, details: 'Caution Money (Refundable)', secondYear: 2500, thirdYear: '', fourthYear: '' },
        { slNo: 4, details: 'BPUT Fee & Regd. Fee', secondYear: 1500, thirdYear: 3000, fourthYear: 3000 },
        { slNo: 5, details: 'Laboratory Maintenance Fee', secondYear: 1500, thirdYear: 1500, fourthYear: 1500 },
        { slNo: 6, details: 'Students Activity Fee', secondYear: 1500, thirdYear: 1500, fourthYear: 1500 },
        { slNo: 7, details: 'Site Visit Fee', secondYear: 600, thirdYear: 600, fourthYear: 600 },
        { slNo: 8, details: 'Internal Examination Fee', secondYear: 1800, thirdYear: 1800, fourthYear: 1800 },
        { slNo: 9, details: 'Training & Placement Fee (One Time)', secondYear: 5000, thirdYear: '', fourthYear: '' },
        { slNo: 10, details: 'Alumni Fee (One Time)', secondYear: 1500, thirdYear: '', fourthYear: '' },
        { slNo: 11, details: 'Redcross & NSS', secondYear: 40, thirdYear: 30, fourthYear: 30 },
        { slNo: 'Total', details: '', secondYear: 34940, thirdYear: 27430, fourthYear: 27430 }
    ];

    const feeColumns = [
        {
            name: 'Sl. No.',
            selector: row => row.slNo,
            sortable: true,
            cell: row => <div className="text-left">{row.slNo}</div>,
            style: {
                backgroundColor: '#f8f9fa',
            },
            width: "100px",
        },
        {
            name: 'Details of the Head',
            selector: row => row.details,
            sortable: true,
            cell: row => <div className="text-left">{row.details}</div>,
            style: {
                backgroundColor: '#f8f9fa',
            },
        },
        {
            name: '1st Year',
            selector: row => row.firstYear,
            sortable: true,
            cell: row => <div className="text-right">{row.firstYear}</div>,
            style: {
                backgroundColor: '#f8f9fa',
            },
            width: "130px",
        },
        {
            name: '2nd Year',
            selector: row => row.secondYear,
            sortable: true,
            cell: row => <div className="text-right">{row.secondYear}</div>,
            style: {
                backgroundColor: '#f8f9fa',
            },
            width: "130px",
        },
        {
            name: '3rd Year',
            selector: row => row.thirdYear,
            sortable: true,
            cell: row => <div className="text-right">{row.thirdYear}</div>,
            style: {
                backgroundColor: '#f8f9fa',
            },
            width: "130px",
        },
        {
            name: '4th Year',
            selector: row => row.fourthYear,
            sortable: true,
            cell: row => <div className="text-right">{row.fourthYear}</div>,
            style: {
                backgroundColor: '#f8f9fa',
            },
            width: "130px",
        },
    ];



    const customStyles = {
        responsiveWrapper: {
            style: {
                width: "93vw",
                marginRight: "4px",
                marginLeft: "4px",
            },
        },
        table: {
            style: {
                width: "900px"
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
                fontSize: "14px",
                backgroundColor: '#ffffff',
                border: '1px solid #E2E8F0',
            },
        },
    };



    return (
        <div className=" min-h-screen flex flex-col gap-6 justify-between w-[95%] sm:w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            <div data-aos='fade-up'>
                <Heading text={'Admission Procedure'} />
                <p className='leading-normal md:leading-loose text-gray-600 text-sm text-justify' data-aos='fade-up'>
                    The admission procedure for Center For UG & PG Studies, BPUT, Rourkela is as per Biju Patnaik University of Technology, Odisha (BPUT) norms and is strictly governed by Odisha Joint Entrance Examination (OJEE).
                </p>
            </div>
            <div data-aos='fade-up'>
                <Heading text={'Eligibility & Selection Criteria'} />
                <ol>

                    <li className='flex items-start mb-2' data-aos='fade-up'>
                        <span className='flex items-center  py-[7px]'>
                            <MdOutlineDoubleArrow className='mr-3' />
                        </span>
                        <span className='leading-normal md:leading-loose text-gray-600 text-sm text-justify'>
                            Admission criteria to Under-graduate- Engineering Programs are made through JEE-Main and O-JEE only and Lateral Entry through O-JEE.
                        </span>

                    </li>
                    <li className='flex items-start' data-aos='fade-up'>
                        <span className='flex items-center  py-[7px]'>
                            <MdOutlineDoubleArrow className='mr-3' />
                        </span>
                        <span className='leading-normal md:leading-loose text-gray-600 text-sm text-justify'>

                            Details of reservation, eligibility and medical requirements are provided in O-JEE brochure. And visit the website: <a className='text-red-600' href="http://www.odishajee.com" target='_blank'>http://www.odishajee.com</a> or <a className='text-red-600' href="http://www.odishajee.com" target='_blank'>https://ojee.nic.in</a>.
                        </span>
                    </li>
                </ol>
            </div>
            <div data-aos='fade-up'>
                <Heading text={'Reservation Of Seats'} />
                <p className='leading-normal md:leading-loose text-gray-600 text-sm text-justify' data-aos='fade-up'>
                    Some seats in Engineering are reserved for S.C, S.T, Diploma holders in Engineering. Children of Green Card Holders, Woman Candidates of the State and Physically handicapped candidates, Non-Resident Orissa. Detailed information can be obtained from JEE information brochure or visit website: <a className='text-red-600' href="http://www.odishajee.com" target='_blank'>http://www.odishajee.com</a> or <a className='text-red-600' href="http://www.odishajee.com" target='_blank'>https://ojee.nic.in</a>.
                </p>
                <p className='my-4 font-medium leading-loose text-gray-900 text-sm' data-aos='fade-up'>
                    The intake strength of various departments as approved by AICTE for the session 2017-18 and degree awarded as follows:
                </p>
                <div className='my-3 block mx-auto max-w-[1200px] overflow-hidden' data-aos='fade-up'>
                    <DataTable
                        columns={columns}
                        data={UGAdmissionData}
                        customStyles={customStyles}
                        pagination={false}
                    />
                </div>
                <div className='my-6 block mx-auto max-w-[1200px] overflow-hidden' data-aos='fade-up'>
                    <DataTable
                        columns={columns}
                        data={UGDualdmissionData}
                        customStyles={customStyles}
                        pagination={false}
                    />
                </div>
            </div>
            <div className='mt-4' data-aos='fade-up'>
                <Heading text={'Fee Structure for Regular (B.Tech)'} />
                <p className='my-4 font-medium leading-loose text-gray-900' data-aos='fade-up'>
                    Fee for Fresher Excepting TFW Student :
                </p>
                <div className='my-3 block mx-auto max-w-[1200px] overflow-hidden' data-aos='fade-up'>
                    <DataTable
                        columns={feeColumns}
                        data={RegularFeeData}
                        customStyles={customStyles}
                        pagination={false}
                    />
                </div>
                <p className='leading-loose' data-aos='fade-up'>
                    Fee to be deposited Via Demand Draft
                </p>
                <p className='my-4 font-medium leading-loose text-green-600' data-aos='fade-up'>
                    The above Fee structure may be changed from time to time as per Govt. Notifications.
                </p>
            </div>
            <div className='mt-4' data-aos='fade-up'>
                <Heading text={'Fee Structures For Lateral B.Tech.'} />
                <p className='my-4 font-medium leading-loose text-gray-900' data-aos='fade-up'>
                    (2nd Year ) Lateral Entry (Excepting TFW Student)
                </p>
                <div className='my-3 block mx-auto max-w-[1200px] overflow-hidden' data-aos='fade-up'>
                    <DataTable
                        columns={feeColumns}
                        data={LateralFeeStructure}
                        customStyles={customStyles}
                        pagination={false}
                    />
                </div>
                <p className='leading-loose' data-aos='fade-up'>
                    Fee to be deposited Via Demand Draft
                </p>
                <p className='my-4 font-medium leading-loose text-green-600' data-aos='fade-up'>
                    The above Fee structure may be changed from time to time as per Govt. Notifications.
                </p>
            </div>
        </div>
    )
}

export default UgAdmission