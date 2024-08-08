import React from 'react'
import comingSoon from "@/assets/img/comingSoon.webp"

const ComingSoon = ({ text = "Coming Soon" }) => {
    return (
        <div className='flex flex-col items-center justify-center' data-aos='fade-up'>
            <img src={comingSoon} alt="coming soon" />
            <p className="capitalize px-4 py-2 bg-teal-600 text-white text-2xl font-bold mt-0 md:-mt-28">{text}</p>
        </div>
    )
}

export default ComingSoon