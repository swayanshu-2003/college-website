import Home from "../pages/Home";
import Login from "../pages/Login";
import TheInstitute from "../pages/TheInstitute";
import { Navdata } from "../sections/header/NavData";
import Academics from "../pages/Academics";
import AdminDashboard from "../pages/AdminDashboard";
import Admission from "../pages/Admission";
import Placement from "../pages/Placement";
import CampusLife from "../pages/CampusLife";
import ExtensionActivities from "../pages/ExtensionActivities";
import Downloads from "../pages/Downloads";
import ImageGallery from "../components/Gallery/ImageGallery";
import FacultyDetails from "../sections/Academics/FacultyDetails/FacultyDetails";
import DepartmentsList from "../pages/DepartmentsList";

const getSubItems = (title) => {
  let subItems = Navdata.find((item) => item.title === title);
  return subItems.subItems;
};

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: `/auth/login`,
    element: <Login />,
  },
  {
    path: "/about",
    element: <TheInstitute subItems={getSubItems("The Institute")} />,
  },
  {
    path: "/academics",
    element: <Academics subItems={getSubItems("Academics")} />,
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admission",
    element: <Admission subItems={getSubItems("Admission")} />,
  },
  {
    path: "/departments",
    element: <DepartmentsList subItems={getSubItems("Departments")} />,
  },
  {
    path: "/placement",
    element: <Placement />,
  },
  {
    path: "/campus",
    element: <CampusLife subItems={getSubItems("Campus Life")} />,
  },
  {
    path: "/extra",
    element: (
      <ExtensionActivities subItems={getSubItems("Extension Activities")} />
    ),
  },
  {
    path: "/downloads",
    element: <Downloads />,
  },
  {
    path: "/gallery/:title",
    element: <ImageGallery />,
  },
  {
    path: "/faculty-details/:name",
    element: <FacultyDetails />,
  },
];

export default routes;
