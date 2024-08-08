import ComingSoon from '@/components/ComingSoon/ComingSoon'
import React from 'react'

const Conference = () => {
    return (
        <div className="min-h-screen flex flex-col gap-6 leading-relaxed text-justify w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            <ComingSoon text='Coming Soon' />
        </div>
    )
}

export default Conference