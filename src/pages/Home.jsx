import React, { useEffect, useState } from 'react'
import Carousel from "../sections/carousel/Carousel";
import Notices from '../sections/notices/Notices';
import AboutUs from '../sections/about/AboutUs';
import MovingMarquee from "../sections/marquee/MovingMarquee"
import DirectorsMessage from '../sections/about/DirectorsMessage';
import Departments from '../sections/departments/Departments';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [isLoading, setIsloading] = useState(false)
    useEffect(() => {
        AOS.init({ offset: 0, duration: 1500 });
    }, []);
    return (
        <div className='w-full  flex flex-col items-center justify-center'>
            <Carousel />
            <MovingMarquee />
            <AboutUs />

            <div className="w-full flex flex-col lg:flex-row items-center px-5 lg:px-32 gap-7" data-aos='fade-up'>
                <DirectorsMessage />
                <Notices isLoading={isLoading} setIsloading={setIsloading} itemsToShow={8} showCarousel={true} />
            </div>
            <Departments />
        </div>
    )
}

export default Home