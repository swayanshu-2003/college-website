import Heading from "../components/Typography/Heading";
import TopBanner from "../components/Banner/TopBanner";
import PlacementBanner from "../assets/img/placement-banner.webp";
import directorPlacement from "@/assets/faculties/placement-director.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Placement = () => {
  const profileCard = (
    <div className="w-64 bg-white rounded-lg text-gray-900 border border-gray-800" data-aos='fade-up'>
      <div className="rounded-t-lg h-20 overflow-hidden bg-gray-800"></div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src={directorPlacement}
          alt="Director placement"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold text-lg">Dr. Sujit Kumar Dash</h2>
        <p className="text-gray-500 text-sm">
          Director Placement <br /> BPUT
        </p>
      </div>
      <div className="py-4 flex border-t mt-2 justify-center space-x-2">
        <a
          href="https://www.bput.ac.in/director-p-it.html"
          target="_blank"
          className="w-1/2 block rounded-md bg-teal-600 hover:shadow-lg font-semibold text-white px-2 py-1 text-center"
        >
          View Profile
        </a>
        <a
          href="https://www.linkedin.com/in/dr-sujit-kumar-dash-71111a42/"
          target="_blank"
          className="block p-0 w-fit h-fit rounded-md  font-semibold text-blue-600"
        >
          <FaLinkedin className="w-8 h-8 mx-auto hover:shadow-lg shadow-lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/dr-sujit-kumar-dash-71111a42/"
          target="_blank"
          className="block p-0 w-fit h-fit rounded-md  font-semibold text-gray-900"
        >
          <FaSquareXTwitter className="w-8 h-8 mx-auto hover:shadow-lg shadow-lg" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <TopBanner
        bannerImage={PlacementBanner}
        text={"Placement Cell"}
        position="top"
        parent={"Placement Cell"}
      />
      <div className="flex flex-col-reverse md:flex-row gap-6 mt-6 mx-auto px-10" data-aos='fade-up'>
        <div className="mx-auto md:mx-0 my-8 md:my-0 md:sticky top-16 self-start" data-aos='fade-up'>
          {profileCard}
        </div>
        <div className="min-h-screen w-full md:w-2/3 flex flex-col items-start mx-auto bg-white" data-aos='fade-up'>
          <div
            className="w-fit text-justify text-gray-600"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
            data-aos='fade-up'
          >
            <Heading text={"Introduction"} />
            <p className="mb-3 leading-relaxed text-sm" data-aos='fade-up'>
              Training and Placement cell at CUPGS provides placement assistance
              to the students. Various personality development programs, group
              discussions, seminars, etc. are convened from time to time and
              sharpen the quality and skill of the students. Companies are
              invited for on-campus selections through the institution&apos;s
              industrial link ups. Many companies visit the college to recruit
              students. Training and placements are responsible for liaising
              with various companies for summer training programs.
            </p>
            <p className="mb-3 leading-relaxed text-sm" data-aos='fade-up'>
              Though training has not been made compulsory, after the 2nd year,
              students are encouraged to go for it. Vocational Practical
              Training is a curricular requirement here, the main objective
              being to give the engineering students a scope to supplement their
              classroom knowledge and have wide exposure to active industrial
              life and environment before they step into the real professional
              world. Every student has to take a minimum of 30 days Practical
              Training with having an undertaking.
            </p>
            <p className="mb-3 leading-relaxed text-sm" data-aos='fade-up'>
              Quite often in-house summer training programs are also organized
              by institutions on different advanced topics. Training programs in
              software field, such as, JAVA, .NET, ASP.NET, SQL-2000 and many
              others too are convened from time to time. After the 2nd year,
              students are encouraged to go to different organizations for
              training during summer vacations. Besides these, the students are
              also involved in the local study tours to the nearby Industries
              during the 3rd, 5th & 7th Semesters to have a practical knowledge
              about various functions of the industries. Two faculty members
              also accompany them during such study tours.
            </p>
            <p className="mb-3 leading-relaxed text-sm" data-aos='fade-up'>
              The Training and Placement Department has a spacious Conference
              Hall which is well furnished. Adjacent halls are also available
              for written tests. Besides, the Conference Hall, has
              air-conditioned placement-room where Group discussions and
              Personal Interviews can be conducted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placement;
