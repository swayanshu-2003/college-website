import React, { useState, useEffect } from "react";
import { adminNavData, Navdata } from "./NavData";
import MobileNav from "./MobileNav";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import SubItemsButton from "../../components/nav/SubItemsButton";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-800 relative z-30 flex items-center justify-center ${isSticky ? "sticky top-[-0.5px]" : ""
        }`}
    >
      <div className="max-w-full w-full flex items-center justify-end md:justify-center mx-auto">
        <div className="flex  items-center justify-between h-14 max-sm:h-[2rem]">
          <div className="flex items-center  h-full">
            <div className="hidden md:block h-full">
              <div className="flex items-baseline space-x-4 h-full">
                {Navdata?.map((item, index) => (
                  <div
                    key={index}
                    className="relative h-full"
                    onMouseEnter={() =>
                      item.subItems && handleMouseEnter(index)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      disabled={!(item.title === 'Departments' || item.title === 'Campus Life' || !item.subItems)}
                      className="text-gray-300 px-3 py-0 rounded-md text-sm font-medium h-full flex items-center"
                      onClick={() => navigate(item.path)}
                    >
                      {item.title}
                      {item?.subItems && (
                        <MdKeyboardArrowDown className={"ml-1 text-xl"} />
                      )}
                    </button>
                    {activeIndex === index && (
                      <div
                        className="absolute left-0 mt-0 w-max rounded-b-md shadow-lg bg-white transition-all duration-300 ease-out"
                        style={{ top: "100%" }}
                      >
                        <div className="py-1">
                          {item?.subItems?.map((subItem, subIndex) => (
                            <React.Fragment key={subIndex}>
                              {subIndex !== 0 && <hr className="bg-gray-200" />}

                              {/* <HashLink
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-auto"
                              >
                                {subItem.title}
                              </HashLink> */}
                              <SubItemsButton
                                data={subItem}
                                className={
                                  "cursor-pointer block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-auto"
                                }
                              />
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {/* {sessionStorage.getItem("token") == null && (
                  <Link
                    to={"/auth/login"}
                    className="block px-4 py-2 text-sm text-white cursor-pointer w-auto"
                  >
                    Login
                  </Link>
                )} */}
                {sessionStorage.getItem("token") &&
                  adminNavData.map((item, index) => (
                    <div
                      key={index}
                      className="relative h-full"
                      onMouseEnter={() =>
                        item.subItems && handleMouseEnter(index)
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className="text-gray-300 px-3 py-0 rounded-md text-sm font-medium h-full  flex items-center"
                        onClick={() => navigate(item.path)}
                      >
                        {item.title}
                        {item?.subItems && (
                          <MdKeyboardArrowDown className={"ml-1 text-xl"} />
                        )}
                      </button>
                      {activeIndex === index && (
                        <div
                          className="absolute left-0 mt-0 w-max rounded-b-md shadow-lg bg-white transition-all duration-300 ease-out"
                          style={{ top: "100%" }}
                        >
                          <div className="py-1">
                            {item?.subItems?.map((subItem, subIndex) => (
                              <React.Fragment key={subIndex}>
                                {subIndex !== 0 && (
                                  <hr className="bg-gray-200" />
                                )}

                                {/* <HashLink
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-auto"
                              >
                                {subItem.title}
                              </HashLink> */}
                                <SubItemsButton
                                  data={subItem}
                                  className={
                                    "cursor-pointer block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-auto"
                                  }
                                />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div className="md:hidden text-white w-full mr-8">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
