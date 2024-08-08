import React from 'react'
import GirlsHostel from "../../assets/img/girlsHostel.jpg"
import boysHostel from "../../assets/img/boysHostel.jpg"
import Heading from '../../components/Typography/Heading'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const HallOfResidence = () => {







    const hostelFacilities = [
        {
            id: 1,
            description: "Co-operative basis Student Mess Facility for each hostel"
        },
        {
            id: 2,
            description: "Basic amenities like cot, table, chair, cupboard in Student rooms"
        },
        {
            id: 3,
            description: "Drinking Water Facility: Water Purifier, Water Cooler"
        },
        {
            id: 4,
            description: "Wi-Fi Internet connectivity for 24 hours"
        },
        {
            id: 5,
            description: "Newspaper / Reading Room Facilities"
        },
        {
            id: 6,
            description: "Security Facility: 24*7 Security"
        },
        {
            id: 7,
            description: "24 hrs Electricity/ Generator"
        }
    ];








    const hostelPolicies = [
        {
            id: 1,
            description: "Ragging is strictly prohibited. Anyone found guilty of involvement will face punishment, including rustication or expulsion, and potential prosecution under Supreme Court guidelines."
        },
        {
            id: 2,
            description: "Students must regularly check the Hostel Notice Board. The Superintendent Team or authorized staff can inspect rooms at any time. Students must carry their Identity Cards and present them upon request."
        },
        {
            id: 3,
            description: "Rooms are equipped with furniture and appliances. Students must sign for the receipt of these items and return them in good condition at the end of the academic session."
        },
        {
            id: 4,
            description: "Boarders must vacate accommodations when asked and before summer vacation for annual repairs. Hostel articles must be returned to the caretaker. Responsibility for any loss lies with the student."
        },
        {
            id: 5,
            description: "Rough handling of hostel property is forbidden. Damage costs will be recovered from individuals or groups responsible. Repeated damage may lead to expulsion."
        },
        {
            id: 6,
            description: "Students are responsible for their belongings. They should avoid keeping large amounts of cash or valuables in their rooms. Hostel authorities are not responsible for theft or loss."
        },
        {
            id: 7,
            description: "Private electrical equipment is not allowed. Students can keep mobile chargers and table lamps. Tampering with electrical fittings is prohibited."
        },
        {
            id: 8,
            description: "It is mandatory for hostel students to join the mess. Cooking in rooms is prohibited. Students must dine in the dining hall."
        },
        {
            id: 9,
            description: "Smoking, gambling, alcohol, drugs, and narcotics are prohibited. Violation will lead to expulsion."
        },
        {
            id: 10,
            description: "Students must attend classes unless ill or with valid reason, with permission from the Superintendent. No student shall leave the hostel without prior permission."
        },
        {
            id: 11,
            description: "Students must report for roll call daily. Permission from the Superintendent and a written request from parents are required for personal leave or vacations."
        },
        {
            id: 12,
            description: "In medical emergencies, permission to leave the hostel requires parental communication with the Superintendent."
        },
        {
            id: 13,
            description: "Students with chronic or communicable diseases are not allowed in the hostel."
        },
        {
            id: 14,
            description: "Parents, guardians, and visitors can meet students during visiting hours. Overnight stays for visitors are not permitted."
        },
        {
            id: 15,
            description: "Notices on the hostel board require the Superintendent's countersignature."
        },
        {
            id: 16,
            description: "Misbehavior, participation in movements or strikes, or subversive activities will result in punishment, including rustication or expulsion."
        },
        {
            id: 17,
            description: "Male students are forbidden from entering the Girls' Hostel, and female students from entering the Boys' Hostel."
        },
        {
            id: 18,
            description: "Alcohol, drugs, cigarettes, and tobacco products are banned. Violations will lead to expulsion."
        },
        {
            id: 19,
            description: "Electric appliances must be switched off when not in use. Use of electric heaters, rods, and similar appliances is prohibited."
        },
        {
            id: 20,
            description: "Guests cannot stay overnight without permission. Guests of the opposite gender are not permitted in hostels. Unauthorized guests will incur a fine."
        },
        {
            id: 21,
            description: "Students are prohibited from sheltering outsiders in their rooms. Violations will result in disciplinary action."
        },
        {
            id: 22,
            description: "No outside person can address a meeting in the hostel without the Principal's permission."
        },
        {
            id: 23,
            description: "Students should lock their rooms when leaving for short periods. Each roommate must keep a key."
        },
        {
            id: 24,
            description: "Mess bills and other charges must be paid on schedule. Failure to do so will result in fines."
        },
        {
            id: 25,
            description: "Students must inform the Superintendent if they will be away for more than a day, providing contact information and return time."
        },
        {
            id: 26,
            description: "Students responsible for damage during demonstrations or strikes will be charged."
        },
        {
            id: 27,
            description: "Students appearing for back paper examinations can stay in hostel accommodations by paying the applicable room charge."
        },
        {
            id: 28,
            description: "Visitors must register at the hostel reception. Security may request identification at any time."
        }
    ];


    const hostelMessRules = [
        {
            id: 1,
            description: "All hostel students must join the Hostel Mess."
        },
        {
            id: 2,
            description: "Hostellers must register their meal preferences and dates in a log, which will be given to the authorized Mess personnel to serve meals accordingly."
        },
        {
            id: 3,
            description: "Hostellers wishing to skip meals must get special permission from the Hostel Superintendent or Assistant Superintendent via a written application and return of meal coupons before the period starts."
        },
        {
            id: 4,
            description: "Students are not allowed to take Mess utensils outside the dining area; violations will result in fines."
        },
        {
            id: 5,
            description: "Food can be delivered to rooms for sick students with a minimum of three hours' notice."
        },
        {
            id: 6,
            description: "Guests of students, staff, and faculty will be served in the dining hall upon presenting pre-purchased coupons or receipts."
        },
        {
            id: 7,
            description: "Rebates on pre-paid Mess dues may be granted with three days' notice and return of coupons, for outstation educational tours, training, or authorized absences of 2 to 10 days per month with the Superintendent's approval."
        }
    ];











    return (
        <div className="min-h-screen flex flex-col gap-6 leading-relaxed text-justify w-[95%] md:w-[85%] mx-auto mt-4 " data-aos='fade-up'>
            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>The Hall of Residence at the Center for Undergraduate and Postgraduate Studies (CUPGS) offers students a comfortable and vibrant living environment that fosters both academic and personal growth. Equipped with modern amenities and designed to promote a sense of community, the hostel provides a secure and supportive home away from home. Students benefit from well-maintained facilities, dedicated study areas, recreational spaces, and round-the-clock security, ensuring a balanced and enriching campus life experience. There are two Hall of Residences located in the campus of CUPGS.</p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Ganga Hall Of Residence</span>
                    <span> for Girls</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Himalaya Hall of residence </span>
                    <span> For Boys</span>
                </p>
            </div>
            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <Heading text={"Ganga Hall Of Residence(Girls)"} />
                <img src={GirlsHostel} alt="girls hostel photo" className='w-full' data-aos='fade-up' />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    The girls' hostels at the Center for Under and Post Graduate Studies, BPUT, Rourkela, provide a safe, comfortable, and nurturing environment for female students. Each room is designed with modern amenities and ample storage, offering a cozy and conducive space for both study and relaxation. The hostels are equipped with high-speed internet, ensuring that students have seamless access to academic resources and can stay connected with family and friends.
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    Common areas in the girls' hostels are thoughtfully designed to encourage social interaction and collaboration among residents. These areas include lounges, study rooms, and recreational spaces where students can engage in various activities. The hostels also emphasize safety, with 24/7 security and regular patrols to ensure a secure living environment. The warden and assistant warden are dedicated to maintaining a supportive atmosphere, organizing cultural and educational events that enhance the overall student experience. Regular consultations with the Dean of Student Welfare (DSW) help address any issues and ensure the well-being of all residents.
                </p>
            </div>
            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <Heading text={"Himalaya Hall Of Residence(Boys)"} />
                <img src={boysHostel} alt="girls hostel photo" className='w-full' data-aos='fade-up' />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    The boys' hostels at the Center for Under and Post Graduate Studies, BPUT, Rourkela, offer a robust environment designed to support the academic and personal growth of male students. Each room is well-furnished and provides ample space for study and relaxation. The hostels are equipped with high-speed internet access, allowing students to stay connected and engaged with their coursework and research projects. Common areas are available for socializing and group studies, fostering a sense of camaraderie and teamwork among residents.
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    The boys' hostels also feature recreational facilities, including indoor games and fitness equipment, encouraging students to maintain a healthy and active lifestyle. The warden and assistant warden ensure a disciplined and supportive environment, organizing various events and activities that promote personal development and community building. Regular meetings with the Dean of Student Welfare (DSW) ensure that any concerns are promptly addressed, maintaining a positive and conducive atmosphere for all residents.
                </p>
            </div>
            <div className="w-full text-sm my-2">
                <Heading text={"Facilities"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    Following facilities are available in the hostel:
                </p>
                {hostelFacilities.map((facility, index) =>

                    <p key={index} className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>
                        <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                        <span>{facility.description}</span>
                    </p>
                )}
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    The student messes operate on a cooperative basis, offering essential amenities such as cots, tables, chairs, and cupboards in the rooms, which are spacious, airy, and well-lit, with green landscapes surrounding them. Common rooms are equipped with TVs, and there's 24-hour water supply. Nearby college grounds are available for cricket, hockey, volleyball, and football. Hostels have Wi-Fi connectivity. Maintenance tasks like cleaning, sweeping, and pest control are outsourced, while electrical repairs and security services are provided round the clock.
                </p>
            </div>

            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <Heading text={"Rules & Regulations"} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed' data-aos='fade-up'>
                    These regulations apply to all Boys' and Girls' Halls of Residence. Students must adhere to the Hostel Rules and any supplementary regulations introduced by the Hostel Committee. Ignorance of these rules is not an acceptable excuse for violations. Students are required to submit a completed biodata form with a photograph to their respective Superintendents.
                </p>
                {hostelPolicies?.map((rule, index) =>
                    <p key={index} className='text-sm mt-4 text-gray-600 leading-relaxed flex items-start' data-aos='fade-up'>
                        <span className="mr-3 my-auto"><MdKeyboardDoubleArrowRight /></span>
                        <span> {rule?.description}</span>
                    </p>
                )}
            </div>

            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <Heading text={"Mess Timing "} />
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Breakfast :</span>
                    <span> 7:30 am to 9:00 am</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Lunch :</span>
                    <span> 12:30pm to 2:30pm</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Evening Tea :</span>
                    <span>  5:30 pm to 6:30 pm</span>
                </p>
                <p className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>
                    <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                    <span className='font-semibold mr-1'>Dinner :</span>
                    <span> 8:00 pm to 9:30pm</span>
                </p>
            </div>

            <div className="w-full text-sm my-2" data-aos='fade-up'>
                <Heading text={"Mess Rules"} />
                {hostelMessRules?.map((rule, index) =>
                    <p key={index} className='text-sm mt-4 text-gray-600 leading-relaxed flex items-center' data-aos='fade-up'>
                        <span className="mr-3"><MdKeyboardDoubleArrowRight /></span>
                        <span> {rule?.description}</span>
                    </p>
                )}
            </div>
        </div>


    )
}

export default HallOfResidence