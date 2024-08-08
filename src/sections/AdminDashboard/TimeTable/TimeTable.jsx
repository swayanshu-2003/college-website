import React, { useState } from 'react'
import TimeTableUpload from './TimeTableUpload'
import { FaUpload } from "react-icons/fa";
import CustomSnackBar from '@/components/SnackBar/CustomSnackBar';
import Table from './Table';

const TimeTable = () => {
    const [isLoading, setIsloading] = useState(false);
    const [shouldRefetchTimeTable, setShouldRefetchTimeTable] = useState(false);
    const [addTimeTable, setAddTimeTable] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [successStatus, setSuccessStatus] = useState(true);


    const handleSnackBarClose = () => {
        setOpenSnackBar(false);
    }

    const handleTimeTableUpload = () => {
        setShouldRefetchTimeTable(true);
        setInterval(() => {
            setShouldRefetchTimeTable(false)
        }, 3000);
    };
    return (
        <div className='w-full flex flex-col gap-10 items-start justify-evenly  py-10 px-4'>
            <div className="w-full flex flex-row-reverse">
                <button onClick={() => setAddTimeTable(true)} class="flex items-center justify-evenly w-52 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span class="font-medium text-[#333] group-hover:text-white">Publish TimeTable
                    </span>
                    <span class="font-medium text-[#333] group-hover:text-white">
                        <FaUpload />
                    </span>
                </button>


            </div>

            {openSnackBar &&
                <CustomSnackBar
                    open={openSnackBar}
                    handleClose={handleSnackBarClose}
                    message={`${successStatus ? "TimeTable Published Successfully" : "Error Publishing TimeTable"}`}
                    severity={`${successStatus ? "success" : "error"}`}
                />
            }

            {addTimeTable && <TimeTableUpload setSuccessStatus={setSuccessStatus}
                showSnackBar={setOpenSnackBar} open={addTimeTable} setOpen={setAddTimeTable} isLoading={isLoading} setIsloading={setIsloading} onNoticeUploaded={handleTimeTableUpload} />}

            <Table shouldRefetch={shouldRefetchTimeTable} setShouldRefetch={setShouldRefetchTimeTable} />
        </div>
    )
}

export default TimeTable