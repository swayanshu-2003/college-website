import React, { useState } from 'react'
import { SkewLoader } from 'react-spinners';

const HolidayList = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div className="container min-h-screen flex flex-col gap-6 justify-between  w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>

            {loading &&
                <div className="w-full flex items-center justify-center">
                    <span className='flex flex-col-reverse gap-4 items-center justify-center'><span className='text-gray-500'>Loading...</span><SkewLoader color="#1f2937" /></span>
                </div>
            }
            <iframe
                src={'https://drive.google.com/file/d/1h210uz8puIjrJK2H60rW2Gnpo_qJOiR_/preview'}
                style={{ width: '100%', height: '500px' }}
                allowFullScreen
                title="Embedded PDF"
                onLoad={() => { setLoading(false) }}
                data-aos='fade-up'
            ></iframe>

        </div>
    )
}

export default HolidayList