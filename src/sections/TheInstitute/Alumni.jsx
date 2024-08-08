import ComingSoon from '@/components/ComingSoon/ComingSoon'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Alumni = () => {


  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000 });
  }, []);


  return (
    <div className="container min-h-screen flex flex-col gap-6 leading-relaxed text-justify w-[85%] mx-auto mt-4 " data-aos='fade-up'>
      <ComingSoon text='Coming Soon' />
    </div>
  )
}

export default Alumni