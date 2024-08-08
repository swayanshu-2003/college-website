import React, { useEffect, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { axiosInstance } from '@/utils/axios';
import SlideInModel from '@/components/Modal/Modal';
import { RxCross2 } from 'react-icons/rx';

const DeleteTimeTable = ({ setRefetchData, open, setOpen, id, showSnackBar, setSuccessStatus }) => {
    const [loading, setLoading] = useState(false)


    const handleRemoveTimeTable = async () => {
        setLoading(true);
        const deleteData = await axiosInstance.delete(`/timetables/delete/${id}`);
        if (deleteData) {
            setSuccessStatus(true);
            setLoading(false);
            setRefetchData(true);
            showSnackBar(true);
            setOpen(false);
        } else {
            setSuccessStatus(false);
            setLoading(false);
            setRefetchData(true);
            showSnackBar(true);
            setOpen(false);
        }
    }


    return (
        <SlideInModel open={open} setOpen={setOpen}>
            <div className='mx-auto w-full max-w-[550px] bg-white rounded-lg'>
                <div className='w-full flex items-center justify-between bg-gray-800 rounded-t-lg px-4'>
                    <h1 className="w-auto  text-white text-xl font-medium px-1 py-2">Delete Notice</h1>
                    {/* <img src={MacBtns} alt="" className='w-10 h-[0.75rem]' /> */}
                    <RxCross2 onClick={() => setOpen(false)} className="text-md text-white cursor-pointer" />
                </div>
                <div className='w-full px-4 py-2'>
                    <div className="w-full px-10 py-6">
                        Do You Really Want to Delete This TimeTable ?
                    </div><div className="w-full flex flex-row-reverse">
                        <LoadingButton onClick={handleRemoveTimeTable} loading={loading} variant="contained" color='error'>
                            Delete
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </SlideInModel>
    )
}

export default DeleteTimeTable