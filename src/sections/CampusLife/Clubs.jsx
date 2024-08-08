import { useEffect, useState } from "react";
import ClubCard from "../../components/Clubs/ClubCard";
import { FaCode, FaRobot } from "react-icons/fa";
import { TbMusicPause } from "react-icons/tb";
import { MdOutlineSportsHandball } from "react-icons/md";
import { useLocation } from "react-router-dom";
import Heading2 from "@/components/Typography/Heading2";
import ClubDetails from "./Clubs/ClubDetails";
import ClubData, { clubImageEvents } from "../../data/ClubData";

const Clubs = () => {
  const [imageData, setImageData] = useState([]);
  const [renderClub, setRenderClub] = useState();
  const [currentClub, setCurrentClub] = useState("");
  const loc = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(loc.search);
    const subtab = searchParams.get("sub-tab");
    // console.log(subtab);
    setCurrentClub(subtab);
  }, [loc.search]);




  useEffect(() => {
    const loadImages = async () => {
      const allImages = [];

      for (const category of clubImageEvents?.coding) {
        const { title, path } = category;
        const photos = [];
        let i = 1;

        while (true) {
          const imagePath = `${import.meta.env.VITE_PUBLIC_URL}/assets/img/clubs/coding/${path}/${i}.jpg`;
          const image = new Image();
          image.src = imagePath;

          try {
            await image.decode(); // Ensure the image is loaded
            photos.push(imagePath);
            i++;
          } catch (err) {
            // console.error(`Error loading image ${path}/${i}.jpg:`, err);
            break; // Exit the loop when an image is not found
          }
        }

        allImages.push({ title, photos });
      }

      setImageData(allImages);
      console.log(allImages);
    };

    loadImages();
  }, []);













  const clubLists = [
    {
      path: "/campus-life",
      title: "Coding Club",
      tab: "coding-club",
      parent: "Clubs",
      desc: "lorem ipsum dolor sit amet",
      icon: <FaCode />,
      color: "#7872eb",
      element: <ClubDetails data={ClubData.coding} images={imageData} />,
    },
    {
      path: "/campus-life",
      title: "Cultural Club",
      tab: "cultural-club",
      parent: "Clubs",
      desc: "lorem ipsum dolor sit amet",
      icon: <TbMusicPause />,
      color: "#ec8048",
      element: <ClubDetails data={ClubData.Cultural} />,
    },
    {
      path: "/campus-life",
      title: "Robotics Club",
      tab: "robotics-club",
      parent: "Clubs",
      desc: "lorem ipsum dolor sit amet",
      icon: <FaRobot />,
      color: "#e15b98",
      element: <ClubDetails data={ClubData.Robotics} />,
    },
    {
      path: "/campus-life",
      title: "Sports Club",
      tab: "sports-club",
      parent: "Clubs",
      desc: "lorem ipsum dolor sit amet",
      icon: <MdOutlineSportsHandball />,
      color: "#27db6dbf",
      element: <ClubDetails data={ClubData.Sports} />,
    },
  ];

  const landingpage = (
    <div className="w-full px-2" data-aos='fade-up' >
      <p className=" text-justify mt-7 mb-10 leading-normal md:leading-loose text-gray-600 text-sm" data-aos='fade-up' >
        {ClubData.about}
      </p>
      <div className="w-full gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4" data-aos='fade-up' >
        {clubLists?.map((item, index) => (
          <ClubCard
            club={item}
            currentTab={currentClub}
            setCurrentTab={setCurrentClub}
            key={index}
          />
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    if (currentClub) {
      const setSections = () => {
        const data = clubLists.filter(
          (section) => section.tab === currentClub
        )[0];
        // console.log(data);
        if (!data) {
          setRenderClub();
        } else {
          setRenderClub(data);
        }
      };
      setSections();
    }
  }, [currentClub]);

  return (
    <div className=" min-h-screen flex flex-col gap-6 justify-between w-full md:w-[85%] mx-auto mt-4" data-aos='fade-up' >
      {landingpage}

      {renderClub && (
        <div className="w-full min-h-screen mb-10 " data-aos='fade-up'>
          <Heading2 text={renderClub.title || ""} />
          <div className="w-full flex flex-col items-center my-5" data-aos='fade-up'>
            {renderClub.element}
          </div>
        </div>
      )}
    </div>
  );
};

export default Clubs;
