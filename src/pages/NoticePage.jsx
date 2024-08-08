import { useState } from 'react'
import UploadNotice from '../sections/notices/UploadNotice'
import NoticeTable from '../sections/AdminDashboard/NoticeTable';
import { FaUpload } from "react-icons/fa";
import CustomSnackBar from '../components/SnackBar/CustomSnackBar';

const NoticePage = () => {
    const [isLoading, setIsloading] = useState(false);
    const [shouldRefetchNotices, setShouldRefetchNotices] = useState(false);
    const [addNotice, setAddNotice] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [successStatus, setSuccessStatus] = useState(true);


    const handleSnackBarClose = () => {
        setOpenSnackBar(false);
    }

    const handleNoticeUploaded = () => {
        setShouldRefetchNotices(true);
        setInterval(() => {
            setShouldRefetchNotices(false)
        }, 3000);
    };
    return (
        <div className='w-full flex flex-col gap-10 items-start justify-evenly  py-10 px-4'>
            <div className="w-full flex flex-row-reverse">
                <button onClick={() => setAddNotice(true)} className="flex items-center justify-evenly w-52 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span className="font-medium text-[#333] group-hover:text-white">Publish Notice
                    </span>
                    <span className="font-medium text-[#333] group-hover:text-white">
                        <FaUpload />
                    </span>
                </button>


            </div>

            {openSnackBar &&
                <CustomSnackBar
                    open={openSnackBar}
                    handleClose={handleSnackBarClose}
                    message={`${successStatus ? "Notice Published Successfully" : "Error Publishing Notice"}`}
                    severity={`${successStatus ? "success" : "error"}`}
                />
            }

            {addNotice && <UploadNotice setSuccessStatus={setSuccessStatus}
                showSnackBar={setOpenSnackBar} open={addNotice} setOpen={setAddNotice} isLoading={isLoading} setIsloading={setIsloading} onNoticeUploaded={handleNoticeUploaded} />}

            <NoticeTable shouldRefetch={shouldRefetchNotices} setShouldRefetch={setShouldRefetchNotices} />
        </div>
    )
}

export default NoticePage