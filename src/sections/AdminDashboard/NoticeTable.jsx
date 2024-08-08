import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { getNotices } from '../notices/noticeData';
import moment from 'moment/moment';
import { FaDownload } from "react-icons/fa";
import DeleteNotice from '../notices/DeleteNotice';
import CustomSnackBar from '../../components/SnackBar/CustomSnackBar';
import { SkewLoader } from 'react-spinners';


const NoticeTable = ({ shouldRefetch }) => {
    const [refetchData, setRefetchData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState();
    const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
    const [rowId, setRowId] = useState();
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [successStatus, setSuccessStatus] = useState(true);


    const handleSnackBarClose = () => {
        setOpenSnackBar(false);
    }

    useEffect(() => {
        const getNoticeData = async () => {
            setLoading(true);
            const data = await getNotices();
            // console.log(data?.data?.notices);
            if (data?.data) {
                const descendingData = data?.data?.notices.slice().reverse(); // Create a new array with reversed order
                setItems(descendingData);
                setLoading(false)
            }
            setLoading(false)

        }
        getNoticeData()

    }, [shouldRefetch, refetchData])


    //filter notices of last 10 days
    const setnewTag = (date) => {
        // console.log(date)
        const uploadDate = new Date(date);
        const currentDate = new Date();
        const differenceInTime = currentDate.getTime() - uploadDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        // console.log(differenceInDays)
        if (differenceInDays <= 10) {
            return true;
        }
        else {
            return false;
        }
    }

    const handleDeleteNotice = (id) => {
        setOpenDeleteModal(true);
        setRowId(id);
        setInterval(() => {
            setRefetchData(false);
        }, 2000);
    }


    const columns = [
        {
            name: 'Date',
            selector: row => moment(row.uploadDate).format('DD-MM-YYYY'),
            id: 0,
            minWidth: "120px"
        },
        {
            name: 'Notice',
            selector: row => {
                return (
                    <>
                        <a href={`${row?.link}`} target='_blank' rel='noopener noreferrer'>{row?.title}</a>
                        {setnewTag(row.uploadDate) &&

                            (<span className="ml-4 w-14 inline-flex items-center rounded-full bg-red-50 px-4 h-6 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                New
                            </span>)}
                    </>

                )
            },
            id: 1,
            minWidth: "600px"
        },
        {
            name: 'View',
            selector: row => {
                return <a href={`${row?.link}`} target='_blank' rel='noopener noreferrer'><FaDownload className='text-xl' /></a>
            },
            id: 2,
            minWidth: "85px",
            center: true,
        },
        {
            name: 'Action',
            selector: row => {
                return <button onClick={() => handleDeleteNotice(row?._id)} className='bg-red-600 text-white px-2 py-1 rounded-md'>Delete</button>
            },
            id: 3,
            minWidth: "100px",
            omit: sessionStorage.getItem('token') ? false : true,
        },
    ];




    return (
        <div className="w-full block m-auto ">
            {openSnackBar &&
                <CustomSnackBar
                    open={openSnackBar}
                    handleClose={handleSnackBarClose}
                    message={`${successStatus ? "Notice Deleted Successfully" : "Error Deleting Notice"}`}
                    severity={`${successStatus ? "success" : "error"}`}
                />
            }
            {OpenDeleteModal &&
                <DeleteNotice
                    setSuccessStatus={setSuccessStatus}
                    showSnackBar={setOpenSnackBar}
                    id={rowId}
                    open={OpenDeleteModal}
                    setOpen={setOpenDeleteModal}
                    setRefetchData={setRefetchData}
                />
            }
            <div className="md:w-fit w-full md:mx-auto mx-0 overflow-x-hidden md:overflow-auto px-2 md:px-0" data-aos='fade-up'>

                <DataTable
                    pagination
                    paginationPerPage={10}
                    columns={columns}
                    data={items}
                    responsive
                    progressPending={loading}
                    progressComponent={<span className='flex flex-col-reverse gap-4 items-center justify-center'><span className='text-gray-500'>Loading...</span><SkewLoader color="#1f2937" /></span>}
                    customStyles={{
                        progress: {
                            style: {
                                height: '200px',
                                width: '950px',
                            },
                        },
                        noData: {
                            style: {
                                height: '200px',
                                width: '950px',
                            },
                        },

                        pagination: {
                            style: {
                                border: '1px solid #E2E8F0',
                                borderBottomRightRadius: 12,
                                borderBottomLeftRadius: 12,

                            },
                        },
                        table: {
                            style: {

                                width: "950px",
                                position: 'relative',
                                // border: '1px solid #E2E8F0',
                                // borderRadius: 12,
                            },
                        },
                        head: {
                            style: {
                                color: '#6B7280 !important',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                fontSize: 14,
                            },
                        },
                        headRow: {
                            style: {
                                color: "#ffffff",
                                background: 'rgb(31,41,55,1)',
                                borderTopRightRadius: 12,
                                borderTopLeftRadius: 12,
                            },
                        },
                        rows: {
                            highlightOnHoverStyle: {
                                background: 'rgba(249, 250, 251, 0.6)',
                            },
                            style: {
                                // border: '1px solid #E2E8F0',
                                cursor: 'pointer',
                                height: '40px',
                                // padding: '10px 0px',
                            },
                        },
                        cells: {
                            style: {
                                fontSize: "14px",
                                border: '1px solid #E2E8F0',
                            }
                        }
                    }}

                />
            </div>


        </div>
    )
}

export default NoticeTable