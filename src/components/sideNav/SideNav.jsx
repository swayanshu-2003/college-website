import React from 'react'
import SubItemsButton from '../nav/SubItemsButton';



const SideNav = ({ subItems = [], className = "" }) => {

    return (

        <div className={`hidden sm:hidden md:inline-flex lg:inline-flex w-fit max-w-[260px]  left-0 top-16 h-auto flex-col justify-between bg-white shadow pb-2 border border-gray-600 rounded-lg ${className}`}>
            <p className="py-3 mb-2 w-full text-center bg-gray-800 rounded-t-lg text-white capitalize">
                {subItems[0]?.parent}
            </p>
            <nav className="flex flex-col space-y-2 px-2">
                {subItems?.map((item, index) => (
                    <div key={index} className='!mt-0'>
                        <div className="w-full">
                            <SubItemsButton
                                icon={true}
                                data={item}
                                className={"text-sm px-2 rounded flex items-center text-gray-800 py-2 my-0 cursor-pointer hover:bg-gray-200"}
                                activeClasses='!bg-teal-500 text-white'
                            />
                            {index < subItems.length - 1 && <hr className="bg-gray-800 m-0 my-[2px]" />}
                        </div>
                    </div>
                ))}
            </nav>
        </div>


    )
}

export default SideNav