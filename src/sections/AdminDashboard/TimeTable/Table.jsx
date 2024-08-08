
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import moment from 'moment/moment';
import { FaDownload } from "react-icons/fa";
import DeleteTimeTable from './DeleteTimeTable';
import CustomSnackBar from '@/components/SnackBar/CustomSnackBar';
import axios from 'axios';
import { REACT_APP_HOST_API } from '@/config';


const Table = ({ shouldRefetch }) => {
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
        const getTimeTableData = async () => {
            setLoading(true);
            const data = await axios.get(`${REACT_APP_HOST_API}/timetables`);
            console.log(data?.data?.data?.timeTables);
            if (data?.data?.data) {
                const descendingData = data?.data?.data?.timeTables.slice().reverse(); // Create a new array with reversed order
                setItems(descendingData);
                setLoading(false)
            }
            setLoading(false)

        }
        getTimeTableData()

    }, [shouldRefetch, refetchData])




    const handleDeleteTimeTable = (id) => {
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
            minWidth: "120px",
            center: true
        },
        {
            name: 'Session',
            selector: row => row?.session,
            id: 0,
            minWidth: "120px",
            center: true,
        },
        {
            name: 'Branch',
            selector: row => row?.branch,
            id: 0,
            minWidth: "120px",
            textTransform: "uppercase",
            center: true,
        },
        {
            name: 'Semester',
            selector: row => row?.semester,
            id: 0,
            minWidth: "120px",
            center: true,
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
                return <button onClick={() => handleDeleteTimeTable(row?._id)} className='bg-red-600 text-white px-2 py-1 rounded-md'>Delete</button>
            },
            id: 3,
            minWidth: "100px",
            omit: sessionStorage.getItem('token') ? false : true,
            center: true,
        },
    ];




    return (
        <div className="w-full block m-auto ">
            {openSnackBar &&
                <CustomSnackBar
                    open={openSnackBar}
                    handleClose={handleSnackBarClose}
                    message={`${successStatus ? "Timetable Deleted Successfully" : "Error Deleting Timetable"}`}
                    severity={`${successStatus ? "success" : "error"}`}
                />
            }
            {OpenDeleteModal &&
                <DeleteTimeTable
                    setSuccessStatus={setSuccessStatus}
                    showSnackBar={setOpenSnackBar}
                    id={rowId}
                    open={OpenDeleteModal}
                    setOpen={setOpenDeleteModal}
                    setRefetchData={setRefetchData}
                />
            }
            <div className="md:w-fit w-full md:mx-auto mx-0 overflow-x-hidden md:overflow-auto px-2 md:px-0">

                <DataTable
                    pagination
                    paginationPerPage={10}
                    columns={columns}
                    data={items}
                    responsive
                    customStyles={{
                        progress: {
                            style: {
                                height: '200px',
                                width: '100vw',
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

export default Table