import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "@/components/Gallery/ImageGallery";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import { useLocation } from "react-router-dom";

const Gallery = ({ imageData }) => {
  const loc = useLocation();
  const sectionRef = useRef(null);
  const [openedGallery, setOpenedGallery] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleFolderClick = (title, photos) => {
    if (openedGallery === title) {
      closeGallery();
    } else {
      setOpenedGallery(title);
      setFilteredImages(photos);
      setTimeout(() => scrollToSection(sectionRef), 0);
    }
  };

  const closeGallery = () => {
    setOpenedGallery(null);
    setFilteredImages([]);
  };

  // Cleanup function when component unmounts
  useEffect(() => {
    return () => {
      closeGallery();
    };
  }, [loc.search]);


  return (
    <div className="container flex flex-col gap-6 justify-between w-full mx-auto mt-4">
      <section className="bg-white w-full px-0">
        {imageData ? (
          <div className="py-4 px-2 max-w-screen-xl sm:py-6 lg:px-10 border border-gray-200 rounded-md grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {imageData?.map((item, index) => (
              <div key={index} className="px-2">
                <div
                  onClick={() => handleFolderClick(item?.title, item?.photos)}
                  className="group relative flex flex-col overflow-hidden rounded-lg pb-[56.25%] mb-4 cursor-pointer"
                >
                  <img
                    src={item?.photos[0]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <h1 className="z-10 absolute top-2 left-2 text-md md:text-lg pl-2 my-2 border-l-4 font-sans font-semibold border-teal-400 text-white">
                    {item?.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ComingSoon text="Coming Soon" />
        )}
      </section>
      {openedGallery && (
        <div className="mt-4 w-full">
          <ImageGallery ref={sectionRef} title={openedGallery} filteredImages={filteredImages} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
