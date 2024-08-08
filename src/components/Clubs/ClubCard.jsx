import React from "react";
import { useNavigate } from "react-router-dom";

const ClubCard = ({ club, currentTab, setCurrentTab }) => {
  const isActive = club?.tab === currentTab;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/campus/?tab=clubs&sub-tab=${club?.tab}`);
    setCurrentTab(club?.tab);
  };

  return (
    <>
      <div
        className={`scale-95 relative max-w-sm transition-all duration-500 transform  cursor-pointer ${
          isActive ? `scale-[1.02]` : ""
        }`}
        onClick={handleClick}
      >
        <span
          className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg ${
            isActive ? `bg-white border-b border-r ` : ""
          }`}
          style={{
            backgroundColor: isActive ? "#ffffff" : club.color,
            borderColor: isActive ? club.color : "",
            borderWidth: isActive ? "2px" : "0px",
          }}
        ></span>
        <div
          className={`relative h-full px-4 py-1 border-2 rounded-lg ${
            isActive ? "bg-current-color" : "bg-white"
          }`}
          style={{
            borderColor: club.color,
            backgroundColor: isActive ? club.color : "#ffffff",
          }}
        >
          <div className="flex items-center -mt-1">
            <span
              className="text-3xl"
              style={{ color: isActive ? "#ffffff" : club.color }}
            >
              {club.icon}
            </span>
            <h3
              className="my-2 ml-3 text-lg font-semibold"
              style={{ color: isActive ? "#ffffff" : club.color }}
            >
              {club.title}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubCard;
