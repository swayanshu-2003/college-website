import React from 'react'
import img1 from "@/assets/anti-ragging/1.jpg"
import img2 from "@/assets/anti-ragging/2.jpg"
import img3 from "@/assets/anti-ragging/3.jpg"
import img4 from "@/assets/anti-ragging/4.jpg"

const AntiRagging = () => {
    return (
        <div className="min-h-screen flex flex-col gap-6 leading-relaxed text-justify w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            {/* <div className="w-full flex flex-col items-center justify-center gap-4"> */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4" data-aos='fade-up'>
                {[img1, img2, img3, img4].map((item, index) =>
                    <img src={item} key={index} alt="anti ragging" className='w-full ' data-aos='fade-up' />
                )}
            </div>
        </div>
    )
}

export default AntiRagging