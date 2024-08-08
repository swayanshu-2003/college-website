import * as React from "react";
import SheetTriggerIcon from "../../assets/svg/hamburger.svg";
import BputLogo from "../../assets/logo/bput-logo.png";
import { Navdata } from "./NavData";
import NavAccrodion from "./NavAccrodino";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";

function MobileNav() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    !!sessionStorage.getItem("token")
  );

  const handleLogout = () => {
    console.log("logged out");
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate("/auth/login", { replace: true });
  };

  const handleLogin = () => {
    navigate("/auth/login");
  };

  const handleAccordionChange = (index) => {
    setExpanded(expanded === index ? false : index);
  };

  return (
    <section className="max-w-[100px]">
      <Sheet>
        <SheetTrigger
          asChild
          onClick={() => {
            setExpanded(false);
          }}
        >
          <img src={SheetTriggerIcon} alt="Open" width={30} height={30} />
        </SheetTrigger>
        <SheetContent className="bg-zinc-200 border-none p-2" side="left">
          <SheetClose asChild>
            <Link to={"/"} className="flex items-center gap-2">
              <img src={BputLogo} alt="bput logo" height={40} width={40} />
              <p className="text-[26px] font-bold text-[#5073ab]">CUPGS</p>
            </Link>
          </SheetClose>
          <div className="w-full h-auto mt-4">
            <section className="flex flex-col gap-1">
              <SheetClose asChild>
                <Link to="/">
                  <p className="text-base pr-4 pl-4 text-left">Home</p>
                </Link>
              </SheetClose>
              {Navdata &&
                Navdata.map((data, index) => {
                  return (
                    <NavAccrodion
                      key={data.id}
                      data={data}
                      isExpanded={expanded === index}
                      handleChange={handleAccordionChange}
                      index={index}
                    />
                  );
                })}
              <SheetClose asChild>
                <Link to="/downloads">
                  <p className="text-base pr-4 pl-4 text-left">Downloads</p>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/placement">
                  <p className="text-base pr-4 pl-4 text-left mt-4">Placement Cell</p>
                </Link>
              </SheetClose>
            </section>
          </div>
          <div className="mt-4">
            {!isLoggedIn ? (
              <SheetClose asChild>
                <div
                  onClick={handleLogin}
                  className="text-base capitalize pr-4 pl-4 cursor-pointer"
                >
                  Login
                </div>
              </SheetClose>
            ) : (
              <SheetClose asChild>
                <div
                  onClick={handleLogout}
                  className="text-base capitalize pr-4 pl-4 cursor-pointer"
                >
                  Logout
                </div>
              </SheetClose>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
