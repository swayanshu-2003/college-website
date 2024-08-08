import React from 'react';
import DataTable from 'react-data-table-component';
import Heading from '../../components/Typography/Heading';
import ComingSoon from '@/components/ComingSoon/ComingSoon';

const MTECHdata = [
    { programme: 'Civil Engineering', capacity: 30 },
    { programme: 'Computer Science & Engineering', capacity: 30 },
    { programme: 'Electrical Engineering', capacity: 30 },
    { programme: 'Electronics And Communication Engineering', capacity: 30 },
    { programme: 'Mechanical Engineering', capacity: 30 },

];


const columns = [
    {
        name: 'Programmes',
        selector: row => row.programme,
        sortable: true,
        cell: row => <div className="text-left">{row.programme}</div>,
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
            width: "950px"
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

const buttonStyle = {
    WebkitClipPath: 'polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%)',
    clipPath: 'polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%)'
};

const PgPrograms = () => {
    return (
        <div className="min-h-screen flex flex-col gap-6 justify-between w-[95%] sm:w-[95%] md:w-[85%] mx-auto mt-4 px-2">
            {/* <div className="flex flex-col items-center  py-2">
                <div className="block w-full">
                    <Heading text={"M.TECH"} />
                </div>
                <p className="text-justify mt-7 mb-10 text-sm leading-normal md:leading-loose text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium deleniti recusandae accusamus quis labore dignissimos nesciunt, dicta eveniet ea facilis aut expedita molestias aperiam natus dolorum magnam eaque! Debitis a esse laborum harum temporibus voluptas eaque impedit corporis velit iste totam ex, at similique placeat corrupti odio quae, consequuntur quia cum minima sapiente eveniet! Eveniet accusantium voluptatem illum aliquid perspiciatis voluptatibus nam provident itaque obcaecati mollitia assumenda explicabo nemo, delectus, nesciunt, quae animi? Perspiciatis quae autem doloribus, fuga possimus earum dicta quisquam pariatur officiis placeat soluta hic. Dolor vero, nemo est ratione nulla voluptate repellat voluptatem. Sint temporibus corporis at!
                </p>
                <div className='block mx-auto max-w-full overflow-hidden'>
                    <DataTable
                        columns={columns}
                        data={MTECHdata}
                        customStyles={customStyles}
                        pagination={false}
                    />
                </div>
            </div> */}
            <ComingSoon text='Coming Soon' />
        </div>
    );
};

export default PgPrograms;
