import {
  civilFacultyImage,
  cseFacultyImage,
  eceFacultyImage,
  mechanicalFacultyImage,
  electricalFacultyImage,
} from "@/utils/images";

const FacultyDetails = {
  civil: {
    HOD: {
      name: "Dr. Bibhuti Bhusan Mukherjee",
      imgurl: civilFacultyImage?.DrBibhutiBhusanMukherjee,
      designation: "Associate Professor",
      email: "capgs.bbmukharjee@bput.ac.in",
      phone: "+91 93370 53192",
      qualification: "Ph.D in Civil Engineering",
      department: "Civil Engineering",
    },
    regularFaculty: [
      {
        name: "Dr. Bharadwaj Nanda",
        imgurl: null,
        designation: "Associate Professor",
        email: "",
        phone: "",
        qualification: "Ph.D in Civil Engineering",
        department: "Civil Engineering",
      },
      {
        name: "Dr. Madhusmita Biswal",
        imgurl: civilFacultyImage?.DrMadhusmitaBiswal,
        designation: "Assistant Professor",
        email: "madhusmitabiswal.biswal@gmail.com",
        phone: "",
        qualification: "Ph.D in Structural Engineering",
        department: "Civil Engineering",
      },
    ],
  },
  computerScience: {
    HOD: {
      name: "Dr. Debashreet Das",
      imgurl: cseFacultyImage?.DrDebashreetDas,
      designation: "Associate Professor",
      email: "",
      phone: "+91 73270 20734",
      qualification: "Ph.D in Computer Science & Engineering",
      department: "Computer Science and Engineering",
    },
    regularFaculty: [
      {
        name: "Dr. D.Chandrasekhar Rao",
        imgurl: cseFacultyImage?.DChandraSekharRao,
        designation: "Associate Professor",
        email: "",
        phone: "+91 93377 24582",
        qualification: "Ph.D in Computer Science & Engineering",
        department: "Computer Science and Engineering",
      },
      {
        name: "Mr. Shiba Prasad Dash",
        imgurl: cseFacultyImage?.ShibaPrasadDash,
        designation: "Assistant Professor",
        email: "",
        phone: "+91 89175 42485",
        qualification: "M.Tech",
        department: "Computer Science and Engineering",
      },
    ],
  },
  electrical: {
    HOD: {
      name: "Prof. Manas Ranjan Nayak",
      imgurl: electricalFacultyImage?.ManasRNayak,
      designation: "Professor",
      email: "capgs.mrnayak@bput.ac.in",
      phone: "+91 94373 32558",
      qualification: "Ph.D in Electrical Engineering",
      department: "Electrical Engineering",
    },
    regularFaculty: [
      {
        name: "Prof. Sivkumar Mishra",
        imgurl: electricalFacultyImage?.ShivKMishra,
        designation: "Professor",
        email: "capgs.smishra@bput.ac.in",
        phone: "+91 94374 33586",
        qualification: "Ph.D in Electrical Engineering",
        department: "Electrical Engineering",
      },
      {
        name: "Dr. Manoj Kumar Sahu",
        imgurl: electricalFacultyImage?.ManojSahu,
        designation: "Associate Professor",
        email: "capgs.mksahu@bput.ac.in",
        phone: "+91 79786 41040",
        qualification: "Ph.D in Electrical Engineering",
        department: "Electrical Engineering",
      },
      {
        name: "Dr. Ashish Kumar Pradhan",
        imgurl: electricalFacultyImage?.AshishKumarPradhan,
        designation: "Assistant Professor",
        email: "",
        phone: "",
        qualification: "Ph.D in Electrical Engineering",
        department: "Electrical Engineering",
      },
      {
        name: "Dr. Saswat Satapathy",
        imgurl: null,
        designation: "Assistant Professor",
        email: "",
        phone: "",
        qualification: "Ph.D in Electrical Engineering",
        department: "Electrical Engineering",
      },
    ],
  },
  electronics: {
    HOD: {
      name: "Dr. Prakash Kumar Panda",
      imgurl: null,
      designation: "Associate Professor",
      email: "",
      phone: "+91 79786 46694",
      qualification: "Ph.D in Electronics Engineering",
      department: "Electronics and Communication Engineering",
    },
    regularFaculty: [
      {
        name: "Dr. Bikramaditya Das",
        imgurl: eceFacultyImage?.BikramadityaDas,
        designation: "Associate Professor",
        email: "",
        phone: "+91 94373 36969",
        qualification: "Ph.D in Electronics Engineering",
        department: "Electronics and Communication Engineering",
      },
    ],
  },
  mechanical: {
    HOD: {
      name: "Dr. Atal Bihari Harichandan",
      imgurl: mechanicalFacultyImage?.ABHarichandan,
      designation: "Associate Professor",
      email: "",
      phone: "",
      qualification: "Ph.D in Mechanical Engineering",
      department: "Mechanical Engineering",
    },
    regularFaculty: [
      {
        name: "Dr. Pradeep Kumar Mishra",
        imgurl: mechanicalFacultyImage?.PKMishra,
        designation: "Associate Professor",
        email: "capgs.pkmishra@bput.ac.in",
        phone: "+91 80931 91305",
        qualification: "Ph.D in Mechanical Engineering",
        department: "Mechanical Engineering",
      },
    ],
  },
};

export default FacultyDetails;
