import CivilDeptImg from "../assets/img/civilEnggBanner.webp";
import CseImg from "../assets/img/CseBanner2.webp";
import EceImg from "../assets/img/EceBanner.webp";
import ElectricalImg from "../assets/img/ElectricalBanner.webp";
import MechanicalImg from "../assets/img/MechanicalBanner.webp";

const CivilImages = [];
const CseImages = [];
const EceImages = [];
const ElectricalImages = [];
const MechanicalImages = [];

const DepartmentData = [
  {
    civil: {
      about:
        "Civil Engineering is concerned with the improvement in quality of basic needs of human civilization and taking care of the naturally and humanly built environments with their planning, designing, construction, operation and maintenance. The Civil Engineering Department at NIT Rourkela is earnestly working to develop solutions to major sustainability challenges of the country and committed to produce leaders impacting the society at large.",
      mission:
        "To impart knowledge and equip students with skills for generating quality civil engineering professionals with high ethical standards; carry out innovative research and consultancy projects to design, build and maintain civil engineering infrastructure ensuring environmental health and quality life.",
      vision:
        "To become frontier in civil engineering education and research, which will serve the society with most sustainable infrastructure and superior environmental health.",
      quote:
        "Civil engineering is the art of directing the great sources of power in nature for the use and convenience of man.",
      author: "Thomas Tredgold",
      banner: CivilDeptImg,
      stats: [
        {
          type: "UG",
          course: "B.TECH (4 Years)",
          intake: "30 +  (Lateral)",
        },
        {
          type: "UG",
          course: "B.TECH + M.TECH (5 Years)",
          intake: "10",
        },
        {
          type: "PG",
          course: "M.TECH (2 Years)",
          intake: "18",
        },
      ],
      images: CivilImages,
    },
    computerScience: {
      about:
        "Computer Science is the systematic study of the theoretical foundations of information and computation and of practical techniques for their implementation and application in computer systems. Computer scientists invent algorithmic processes that create, describe, and transform information and formulate suitable abstractions to model complex systems. The study is devoted to theoretical foundations of computation and practical techniques for their implementation in computer systems.",
      mission:
        "The mission of the department is to provide high-quality education that prepares the graduates for success in their professional practice and advanced studies. ",
      vision:
        "The vision of the department is to prepare its students for professional employment and graduate education through study and implementation of the fundamental principles of theory, abstraction, and software design, while at the same time presenting the ethical and social issues associated with computer science.",
      quote:
        "The computer was born to solve problems that did not exist before. ",
      author: "Bill Gates",
      banner: CseImg,
      stats: [
        {
          type: "UG",
          course: "B.TECH (4 Years)",
          intake: "30 + (Lateral)",
        },
        {
          type: "UG",
          course: "B.TECH + M.TECH (5 Years)",
          intake: "10",
        },
        {
          type: "PG",
          course: "M.TECH (2 Years)",
          intake: "18",
        },
      ],
      images: CseImages,
    },
    electrical: {
      about:
        "Electrical Engineering broadly involving electricity, electromagnetism and electronics is essential in modern human life and industries. The present day academic activities of electrical engineering are very broad with this due reason. The electrical engineering department at NIT Rourkela has specialized faculties in all important areas of electrical engineering such as power system, power electronics & drives, control & automation and signal processing.",
      mission:
        "To develop a platform for forging students as technocrats in line with cutting-edge academic, research and modern industrial practices, and enhancing their aptness in any technical sectors across the globe.",
      vision:
        "To design technologies and nurture technologists for diverse and sustainable growth in Electrical Engineering, leading to wealth and welfare of Humanity.",
      quote: "Electricity is the greatest of all weapons in the hands of man.",
      author: "William J. Hammer",
      banner: ElectricalImg,
      stats: [
        {
          type: "UG",
          course: "B.TECH (4 Years)",
          intake: "30 + (Lateral)",
        },
        {
          type: "UG",
          course: "B.TECH + M.TECH (5 Years)",
          intake: "10",
        },
        {
          type: "PG",
          course: "M.TECH (2 Years)",
          intake: "18",
        },
      ],
      images: ElectricalImages,
    },
    electronics: {
      about:
        "Electronics Engineers Design, develop and test electronic systems, devices and equipment. Examples of these systems include computer components, GPS systems, communication systems, antennas, satellite transponders, electronics guidance system for aircrafts, electronic control for missiles, signal processing based biomedical instruments, entertainment electronics and home applications , VLSI and ULSI chips and many more. There are several specializations within Electronics Engineering that include Automatic Controls, Digital Systems (Computer Systems), Electromagnetics, Electronics, Semiconductor Devices, Communication and Signal Processing.",
      mission:
        "To advance and spread knowledge in the area of electronics, communication, instrumentation, signal processing and very large scale integration leading to creation of wealth and welfare of humanity.",
      vision:
        "To become an internationally acclaimed department of higher learning that will serve as a source of knowledge and expertise for the society and be a preferred destination for undergraduate and graduate studies.",
      quote:
        "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
      author: "Bill Gates",
      banner: EceImg,
      stats: [
        {
          type: "UG",
          course: "B.TECH (4 Years)",
          intake: "30 + (Lateral)",
        },
        {
          type: "UG",
          course: "B.TECH + M.TECH (5 Years)",
          intake: "10",
        },
        {
          type: "PG",
          course: "M.TECH (2 Years)",
          intake: "18",
        },
      ],
      images: EceImages,
    },
    mechanical: {
      about:
        "Mechanical Engineering is often called the mother of all engineering. It covers a host of subjects: properties of materials, structural design, material processing, manufacturing, heat engines, refrigeration and air conditioning, industrial management, robotics and much more. The Mechanical Engineering Department of NIT, Rourkela is known for research in most of these fields. The main foci of research are on mechanical vibration, robotics, CAD/CAM, precision engineering, Metal forming, manufacturing, CFD, Industrial refrigeration and Cryogenics.",
      mission:
        "To nurture its students (B.Tech., M.Tech. and Ph.D.) with fundamentals of the subject and an up-to-date technological skill to meet regional as well as national priorities in higher education for industrial application. The program also strives to enhance learning skill with research capability, quality research and scholarly activities to be integrated with teaching.",
      vision:
        "To provide the society and industry with Mechanical Engineers having superior technical capability and ethical responsibility. To become the best mechanical engineering department in the country for research & development in the emerging areas.",
      quote:
        "Engineering is the art of directing the great sources of power in nature for the use and the convenience of people.",
      author: "Thomas Tredgold",
      banner: MechanicalImg,
      stats: [
        {
          type: "UG",
          course: "B.TECH (4 Years)",
          intake: "30 + (Lateral)",
        },
        {
          type: "UG",
          course: "B.TECH + M.TECH (5 Years)",
          intake: "10",
        },
        {
          type: "PG",
          course: "M.TECH (2 Years)",
          intake: "18",
        },
      ],
      images: MechanicalImages,
    },
  },
];

export default DepartmentData;
