import { MdOutlineEngineering } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { HiMiniCpuChip } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import Campus from "../../assets/img/campus5.jpg"


const links = [
    { name: 'Industry Ready Syllabus', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
const stats = [
    { name: 'Branches', value: '5' },
    { name: 'Students', value: '300+' },
    { name: 'Faculties', value: '30+' },
    { name: 'Library Resources', value: '100,000+' },
];

const boxes = [
    {
        title: 'Civil engineering',
        description: "Civil Engineering, the Art and Science of Shaping Our World's Physical Landscape, Designing & Constructing  Infrastructure to Propel Humanity Forward into a Sustainable Future.",
        icon: (
            <BsBuilding className="text-5xl" />


        )
    },
    {
        title: 'Mechanical engineering',
        description: " Mechanical Engineering, Where Creativity Meets Machinery, Designing, Innovating, and Engineering Solutions to Propel Humanity Forward into a World of Limitless Possibilities.",
        icon: (
            <MdOutlineEngineering className="text-5xl" />

        )
    },
    {
        title: 'Electrical engineering',
        description: "Electrical Engineering, Illuminating Pathways of Innovation, from Power Generation to Information Technology, Lighting the Way to a Brighter, Smarter, and More Connected Future.",
        icon: (
            <MdElectricalServices className="text-5xl" />
        )
    },
    {
        title: 'Electronics & communication engineering',
        description: "Electronics Engineering, Orchestrating the Symphony of Circuits and Signals, Crafting the Foundation for Tomorrow's Technological Marvels, Illuminating Pathways to a Connected and Sustainable Future.",
        icon: (
            <HiMiniCpuChip className="text-5xl" />

        )
    },
    {
        title: 'Computer science & engineering',
        description: "Computer Science Engineering, Unleashing the Power of Algorithms, Building the Framework for  Technological Evolution, Empowering Minds to Shape a Digitally Driven World of Endless Possibilities. ",
        icon: (
            <FaCode className="text-5xl" />

        )
    },

];


export default function Departments() {
    return (
        <div className="w-full h-auto relative overflow-hidden py-24 sm:py-32 my-14">
            <div
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-fixed"
                style={{
                    backgroundImage: `url(${Campus})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="absolute inset-0 bg-black opacity-70 z-0" />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl z-20"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="w-full px-8 lg:px-16 relative"> {/* Ensure text is white */}
                <div className="lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-white"> {/* Ensure text is white */}
                        Our Departments
                    </h2>
                    <p className="mt-6 text-lg text-justify leading-8 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                        At CUPGS, we offer a wide range of departments to meet the demands of
                        today's industries. Our commitment to excellence shines through in our
                        expert faculty, innovative curriculum, and top-notch facilities. Whether
                        your interests lie in engineering, electronics, or software development,
                        we have the perfect department to help you achieve your career goals.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="w-full mt-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 px-8 md:px-16">
                    {boxes.slice(0, 3).map((box, index) => (
                        <div
                            key={index}
                            className="relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300 bg-gray-800"
                        >
                            <span className="absolute -top-12 p-3 border-2 border-gray-300 rounded-full bg-gray-800">
                                {box.icon}
                            </span>
                            <h2 className="my-4 gradient-red text-base uppercase tracking-wide text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                                {box.title}
                            </h2>
                            <p className="py-2 text-justify text-sm text-gray-300">{box.description}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-24 px-8 md:px-16">
                    {boxes.slice(3).map((box, index) => (
                        <div
                            key={index}
                            className="relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-300 bg-gray-800"
                        >
                            <span className="absolute -top-12 p-3 border-2 border-gray-300 rounded-full bg-gray-800">
                                {box.icon}
                            </span>
                            <h2 className="my-4 gradient-red text-base uppercase tracking-wide text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                                {box.title}
                            </h2>
                            <p className="py-2 text-justify text-sm text-gray-300">{box.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    )
}
