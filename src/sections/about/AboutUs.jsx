import React, { useEffect } from "react";
import Heading2 from "../../components/Typography/Heading2"
import CupgsImg from "../../assets/img/cupgs9.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <>
            <div className="lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 my-6 mx-4 md:mx-10 " data-aos="fade-up">
                <div className="flex flex-col gap-8 ">
                    <Heading2 text={"About CUPGS"} />
                    <div className="w-full  flex flex-col-reverse lg:flex-row justify-center gap-8 ">
                        <div className="w-full text-justify text-gray-600 lg:w-3/5 bg-white" style={{ fontFamily: "\"Open Sans\", sans-serif" }}>
                            <p className="mb-3 leading-relaxed text-sm">The Center for UG and PG Studies (CUPGS) at Biju Patnaik University of Technology (BPUT), Rourkela, is a prominent academic division of the university that offers a range of undergraduate and postgraduate programs. Originally known as the Centre for Advanced Post Graduate Studies (CAPGS), it was rebranded to CUPGS with the introduction of undergraduate engineering and integrated dual degree courses from the academic session 2022-2023.</p>
                            <p className="mb-3 leading-relaxed text-sm">CUPGS provides comprehensive education in engineering with B.Tech programs in five branches and integrated dual degree (B.Tech + M.Tech) programs in five specializations. Additionally, it offers M.Tech courses in ten specializations, catering to the growing demand for advanced technical education.</p>
                            <p className="mb-3 leading-relaxed text-sm">The center is committed to fostering a conducive learning environment through state-of-the-art facilities, experienced faculty, and a robust curriculum designed in alignment with AICTE and UGC guidelines. Admission to CUPGS is through the Odisha Joint Entrance Examination (OJEE), ensuring a standardized and transparent selection process.
                            </p>
                            <p className="mb-3 leading-relaxed text-sm">In addition to its academic offerings, CUPGS supports its students with amenities such as hostel accommodation, a central library with extensive resources, and various student services to enhance their educational experience. The center aims to produce skilled professionals who can contribute effectively to the industry.</p>
                        </div>
                        <div className="w-full h-full lg:w-2/5 rounded-lg">
                            <img className="w-full h-full rounded-lg" src={CupgsImg} alt="A group of People" />
                        </div>
                    </div>
                </div>




                {/* <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div className="w-full lg:w-8/12 lg:pt-8">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                                <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                                <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default AboutUs;
