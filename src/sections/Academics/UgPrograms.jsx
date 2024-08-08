import DataTable from "react-data-table-component";
import Heading from "@/components/Typography/Heading";
import { UgProgramData } from "@/data/academicsData";


const BTECHdata = [
  { programme: "Civil Engineering", capacity: 30 },
  { programme: "Computer Science & Engineering", capacity: 30 },
  { programme: "Electrical Engineering", capacity: 30 },
  { programme: "Electronics And Communication Engineering", capacity: 30 },
  { programme: "Mechanical Engineering", capacity: 30 },
];
const DualDegreedata = [
  {
    programme:
      "B.Tech in Civil Engineering & M.Tech (in Structural Engineering)",
    capacity: 10,
  },
  {
    programme:
      "B.Tech in Computer Science & Engineering & M.Tech (in Computer Science & Engineering)",
    capacity: 10,
  },
  {
    programme:
      "B.Tech in Electrical Engineering & M.Tech (in Power Systems Engineering)",
    capacity: 10,
  },
  {
    programme:
      "B.Tech in Electronics & Communication Engineering & M.Tech (in Signal Processing & Communication)",
    capacity: 10,
  },
  {
    programme: "B.Tech in Mechanical Engineering & M.Tech (in Machine Design)",
    capacity: 10,
  },
];

const columns = [
  {
    name: "Programmes",
    selector: (row) => row.programme,
    sortable: true,
    cell: (row) => <div className="text-left">{row.programme}</div>,
    style: {
      backgroundColor: "#f8f9fa",
    },
  },
  {
    name: "Intake Capacity",
    selector: (row) => row.capacity,
    width: "200px",
    sortable: true,
    center: true,
    style: {
      backgroundColor: "#f8f9fa",
    },
  },
];

const customStyles = {
  responsiveWrapper: {
    style: {
      width: "93vw",
      marginRight: "4px",
      marginLeft: "4px",
    },
  },
  table: {
    style: {
      width: "950px",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      // fontWeight: 'bold',
      // backgroundColor: '#2c5282',
      color: "white",
    },
  },
  headRow: {
    style: {
      color: "#ffffff",
      background: "rgb(31,41,55,1) !important",
    },
  },
  cells: {
    style: {
      fontSize: "14px",
      backgroundColor: "#ffffff",
      border: "1px solid #E2E8F0",
    },
  },
};

const UgPrograms = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6 justify-between w-[95%] sm:w-[95%] md:w-[85%] mx-auto mt-4 px-2" data-aos='fade-up'>
      <div className="flex flex-col items-center py-2">
        <div className="block w-full">
          <Heading text={"B.TECH"} />
        </div>
        <p className='text-sm mt-2 text-gray-600 leading-relaxed text-justify' data-aos='fade-up'>
          {UgProgramData.text}
        </p>
        <div className="block mx-auto max-w-full overflow-hidden mt-5" data-aos='fade-up'>
          <DataTable
            columns={columns}
            data={UgProgramData.BTECHdata}
            customStyles={customStyles}
            pagination={false}
          />
        </div>
      </div>

      <div className="flex flex-col items-center  py-6" data-aos='fade-up'>
        <div className="block w-full" data-aos='fade-up'>
          <Heading text={"Int. (B.TECH + M.TECH) Dual Degree"} />
        </div>
        <p className='text-sm mt-2 text-gray-600 leading-relaxed text-justify' data-aos='fade-up'>
          {UgProgramData.dual}
        </p>
        <div className="block mx-auto max-w-full overflow-hidden mt-5" data-aos='fade-up'>
          <DataTable
            columns={columns}
            data={UgProgramData.DualDegreedata}
            customStyles={customStyles}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};

export default UgPrograms;
