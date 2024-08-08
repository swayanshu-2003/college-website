import React from 'react'
import SubItemsButton from '../../components/nav/SubItemsButton'

const SideBar = ({ data }) => {
    console.log(data)
    return (

        <div
            id="sidebar"
            className="sticky left-0 top-14 bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
            x-show="sidenav"

        >
            <div className="space-y-6 md:space-y-10 mt-10">

                <div id="profile" className="space-y-3">
                    <img
                        src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716163200&semt=ais_user"
                        alt="Avatar user"
                        className="w-10 md:w-24 rounded-full mx-auto"
                    />
                    <div>
                        <h2
                            className="font-medium text-xs md:text-sm text-center text-teal-500"
                        >
                            Administrator
                        </h2>
                        {/* <p className="text-xs text-gray-500 text-center">Administrator</p> */}
                    </div>
                </div>
                {/* <div
                    className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500"
                >
                    <input
                        type="text"
                        className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                        placeholder="Search"
                    />
                    <button
                        className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block"
                    >
                        <svg
                            className="w-4 h-4 fill-current"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div> */}
                <div id="menu" className="flex flex-col space-y-2">
                    {data.map((item, index) => (

                        <SubItemsButton
                            key={index}
                            className={'cursor-pointer text-md font-medium text-gray-700 py-2 px-2 rounded-md transition duration-150 ease-in-out flex'}
                            hoverClasses='hover:text-base'
                            activeClasses='bg-teal-500 text-white text-base'
                            data={item}
                        />

                    ))}

                </div>
            </div>
        </div>


    )
}

export default SideBar