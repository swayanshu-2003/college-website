import Heading from '@/components/Typography/Heading'
import React from 'react'
import LibraryImg from "@/assets/img/library2.jpg"
import canteenImg from "@/assets/img/canteen.jpg"
import atmImg from "@/assets/img/atm.jpg"
import AuditoriumImg from "@/assets/img/auditorium.jpg"

const Facilities = () => {



    return (
        <div className="min-h-screen flex flex-col gap-16 justify-between w-[95%] sm:w-[95%] md:w-[85%] mx-auto mt-4 px-2 text-center " data-aos='fade-up'>

            <div className="flex flex-col-reverse md:flex-row items-center my-10 rounded-md w-full md:h-72" data-aos='fade-up'>
                <div className="h-48 md:h-full w-full md:w-2/5 lg:w-5/12" data-aos='fade-up'>
                    <img src={LibraryImg} alt="gem" className="object-cover h-full w-full rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full h-full flex flex-col justify-between p-0 md:w-3/5 lg:w-7/12 my-6 md:my-0 text-center md:text-left lg:pl-5 " data-aos='fade-up'>
                    <Heading text={"Central Library"} />
                    <p className="text-justify text-sm leading-normal md:leading-normal text-gray-600" data-aos='fade-up'>
                        Explore the hub of intellectual curiosity and academic excellence at the Central Library of the Center for Undergraduate and Postgraduate Studies, BPUT Rourkela. Nestled amidst the serene campus, our library offers a vast array of resources including books, journals, e-books, and multimedia materials that cater to diverse fields of study. Equipped with modern amenities and a tranquil environment, we provide a conducive space for research, learning, and collaboration. Our committed staff ensures seamless access to information and supports the scholarly pursuits of students and faculty. Step into a world where knowledge thrives and academic aspirations soar at BPUT's Central Library.
                    </p>
                </div>
            </div>



            <div className="flex flex-col md:flex-row items-center  rounded-md w-full md:h-72" data-aos='fade-up' >
                <div className="w-full flex flex-col justify-between md:w-3/5 lg:w-7/12 p-0 text-center md:text-left lg:pr-5 my-6 md:my-0" data-aos='fade-up' >
                    <Heading text={"College Canteen"} />
                    <p className="text-justify text-sm leading-normal md:leading-normal text-gray-600" data-aos='fade-up' >
                        The college canteen at the Center for Undergraduate and Postgraduate Studies, BPUT Rourkela, serves as a vibrant hub for students and faculty to relax and recharge. Located conveniently within the campus, the canteen offers a diverse menu that caters to various tastes and dietary preferences, featuring everything from traditional Indian cuisine to international dishes. With its spacious seating arrangement, clean environment, and amiable staff, the canteen provides a welcoming atmosphere where everyone can enjoy delicious meals and snacks. Whether you are looking for a quick coffee break between classes or a hearty lunch with friends, the BPUT canteen ensures a delightful culinary experience, fostering a sense of community and camaraderie among the campus members.
                    </p>
                </div>
                <div className="h-48 md:h-full w-full md:w-2/5 lg:w-5/12" data-aos='fade-up'>
                    <img src={canteenImg} alt="gem" className="object-cover h-full w-full rounded shadow-lg border border-merino-400" />
                </div>
            </div>


            <div className="flex flex-col-reverse md:flex-row items-center my-10 rounded-md w-full md:h-72" data-aos='fade-up'>
                <div className="h-40 md:h-full w-full md:w-2/5 lg:w-5/12" data-aos='fade-up'>
                    <img src={atmImg} alt="gem" className="object-cover h-full w-full rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full h-full flex flex-col justify-between p-0 md:w-3/5 lg:w-7/12 my-6 md:my-0 text-center md:text-left lg:pl-5 " data-aos='fade-up'>
                    <Heading text={"ATM Service"} />
                    <p className="text-justify text-sm leading-normal md:leading-normal text-gray-600" data-aos='fade-up'>
                        The ATM service at the Center for Undergraduate and Postgraduate Studies, BPUT Rourkela, offers convenient banking solutions right within the campus. Strategically located for easy access, the on-campus ATMs are operational 24/7, providing students and staff with round-the-clock financial services. Whether you need to withdraw cash, check your account balance, or perform other essential banking transactions, the ATMs are equipped to handle your needs efficiently and securely. The availability of this service ensures that managing finances is hassle-free, allowing everyone in the campus community to focus more on their academic and professional pursuits without the worry of banking logistics.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center  rounded-md w-full md:h-72" data-aos='fade-up'>
                <div className="w-full flex flex-col justify-between md:w-3/5 lg:w-7/12 p-0 text-center md:text-left lg:pr-5 my-6 md:my-0">
                    <Heading text={"Netaji Subash Ch. Bose Auditorium"} />
                    <p className="text-justify text-sm leading-normal md:leading-normal text-gray-600">
                        The college auditorium at the Center for Undergraduate and Postgraduate Studies, BPUT, stands as a testament to modern architectural excellence and technological sophistication. With a seating capacity of 2,000, it is designed to accommodate large gatherings, including academic conferences, cultural events, and seminars. The auditorium is equipped with advanced audio-visual systems, ensuring crystal-clear sound and high-definition visual presentations, which enhance the overall experience for both speakers and audience members. State-of-the-art lighting and climate control systems provide a comfortable and conducive environment for all types of events. Additionally, the auditorium features ergonomic seating and spacious aisles, prioritizing comfort and accessibility. This facility not only serves as a hub for intellectual and cultural exchange but also reflects the institution's commitment to providing top-tier amenities for its students and faculty.                    </p>
                </div>
                <div className="h-48 md:h-full w-full md:w-2/5 lg:w-5/12" data-aos='fade-up'>
                    <img src={AuditoriumImg} alt="gem" className="object-cover h-full w-full rounded shadow-lg border border-merino-400" data-aos='fade-up' />
                </div>
            </div>

        </div>
    )
}

export default Facilities