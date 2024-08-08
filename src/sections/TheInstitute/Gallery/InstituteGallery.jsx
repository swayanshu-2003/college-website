import Gallery from '@/components/Gallery/Gallery'
import React from 'react'
import { images } from "./galleryData"
import ComingSoon from '@/components/ComingSoon/ComingSoon'

const InstituteGallery = () => {
    return (
        <div className="min-h-screen flex flex-col gap-6 leading-relaxed text-justify w-[95%] md:w-[85%] mx-auto mt-4 ">
            {/* <Gallery imageData={images} /> */}
            <ComingSoon text='Coming Soon' />
        </div>
    )
}

export default InstituteGallery