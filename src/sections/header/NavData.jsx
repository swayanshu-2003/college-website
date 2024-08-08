import { HiMiniDocumentText } from "react-icons/hi2";
import { RiFileListLine } from "react-icons/ri";
import { GrDocumentTime } from "react-icons/gr";


export const Navdata = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "The Institute",
    subItems: [
      {
        path: "/about",
        title: "About CUPGS",
        tab: "cupgs",
        parent: "About",
      },
      {
        path: "/about",
        title: "Mission and Vision",
        tab: "mission",
        parent: "About",
      },
      {
        path: "/about",
        title: "Director's message",
        tab: "directors-message",
        parent: "About",
      },
      {
        path: "/about",
        title: "Discover CUPGS",
        tab: "discover",
        parent: "About",
      },
      {
        path: "/about",
        title: "Alumni",
        tab: "alumni",
        parent: "About",
      },
      {
        path: "/about",
        title: "Gallery",
        tab: "gallery",
        parent: "About",
      },
    ],
  },
  {
    path: "/academics",
    title: "Academics",
    subItems: [
      {
        path: "/academics",
        title: "UG Programs",
        tab: "ug",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "PG Programs",
        tab: "pg",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "Time Table",
        tab: "time-table",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "Notices",
        tab: "notices",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "Syllabus",
        tab: "syllabus",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "Faculty",
        tab: "faculty",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "Academic calender",
        tab: "academic-calender",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "Holiday List",
        tab: "holiday-list",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "Results",
        tab: "results",
        parent: "Academics",
      },
      {
        path: "/academics",
        title: "Lecture Notes",
        tab: "lecture-notes",
        parent: "Academics",
      },
    ],
  },
  {
    path: "admission",
    title: "Admission",
    subItems: [
      {
        path: "/admission",
        title: "UG Addmission",
        tab: "ug-admission",
        parent: "Admission",
      },
      {
        path: "/admission",
        title: "PG Addmission",
        tab: "pg-admission",
        parent: "Admission",
      },
      // {
      //   path: "/admission",
      //   title: "Fee Structure",
      //   tab: "fee-structure",
      // parent: "Admission"
      // },
      {
        path: "/admission",
        title: "Scholarships",
        tab: "scholarships",
        parent: "Admission",
      },
      {
        path: "/admission",
        title: "Anti Ragging Cell",
        tab: "anti-ragging",
        parent: "Admission",
      },
    ],
  },
  {
    path: "/departments",
    title: "Departments",
    subItems: [
      {
        path: "/departments",
        title: "Civil",
        tab: "civil-engineering",
        parent: "Departments",
      },
      {
        path: "/departments",
        title: "Computer Science",
        tab: "cse",
        parent: "Departments",
      },
      {
        path: "/departments",
        title: "Electrical",
        tab: "electrical-engineering",
        parent: "Departments",
      },
      {
        path: "/departments",
        title: "Electronics & Communication",
        tab: "ece",
        parent: "Departments",
      },
      {
        path: "/departments",
        title: "Mechanical",
        tab: "mechanical-engineering",
        parent: "Departments",
      },
    ],
  },
  {
    path: "/placement",
    title: "Placement Cell",
  },
  {
    path: "campus",
    title: "Campus Life",
    subItems: [
      // {
      //   path: "/campus",
      //   title: "Campus Life",
      //   tab: "campus-life",
      //   parent: "Campus Life"
      // },
      {
        path: "/campus",
        title: "Student Activities",
        tab: "student-activity",
        parent: "Campus Life",
      },
      {
        path: "/campus",
        title: "Clubs",
        tab: "clubs",
        parent: "Campus Life",
        subChildren: [
          {
            path: "/campus",
            title: "Coding Club",
            tab: "clubs",
            ownTab: "coding-club",
            parent: "Clubs",

          },
          {
            path: "/campus",
            title: "Cultural & Litrature",
            tab: "clubs",
            ownTab: "cultural-club",
            parent: "Clubs",


          },
          {
            path: "/campus",
            title: "Robotics Club",
            tab: "clubs",
            ownTab: "robotics-club",
            parent: "Clubs",


          },
          {
            path: "/campus",
            title: "Sports Club",
            tab: "clubs",
            ownTab: "sports-club",
            parent: "Clubs",


          },
        ]
      },
      {
        path: "/campus",
        title: "Hall Of Residence",
        tab: "hall-of-residence",
        parent: "Campus Life",
      },
      {
        path: "/campus",
        title: "Facilities",
        tab: "facilities",
        parent: "Campus Life",
      },
    ],
  },
  {
    path: "extra",
    title: "Extension Activities",
    subItems: [
      {
        path: "/extra",
        title: "Seminars/Workshops",
        tab: "conference",
        parent: "Extra",
      },
      {
        path: "/extra",
        title: "Internships",
        tab: "internship",
        parent: "Extra",
      },
    ],
  },
  {
    path: "/downloads",
    title: "Downloads",
  },
];

export const adminNavData = [
  {
    path: "/",
    title: "Admin",
    subItems: [
      {
        path: "/dashboard",
        title: "Dashboard",
        tab: "dashboard",
      },
      {
        path: "/logout",
        title: "Logout",
        tab: "logout",
      },
    ],
  },
];

export const adminDashboardSideNavData = [
  {
    path: "/dashboard",
    title: "Dashboard",
    tab: "dashboard",
    icon: (
      <svg
        className="w-6 h-6 fill-current inline-block mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
      </svg>
    ),
  },
  {
    path: "/dashboard",
    title: "Notices",
    tab: "notices",
    icon: <HiMiniDocumentText className="text-2xl mr-2" />,
  },
  {
    path: "/dashboard",
    title: "Time Table",
    tab: "time-table",
    icon: <GrDocumentTime className="text-xl mr-2" />,
  },
];
