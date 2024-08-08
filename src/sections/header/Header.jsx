import { Link } from "react-router-dom";
import Logo from "../../assets/logo/bput-logo.png";

function Header() {
  return (
    <div className="w-full h-auto my-3 mb-4 px-40 max-sm:p-1 max-sm:my-0 md:px-6 max-lg:px-4 flex justify-center max-sm:justify-around gap-16 max-sm:gap-0 items-center">
      <Link to={'/'} className="flex justify-center items-center">
        <img src={Logo} alt="" className="w-28 max-sm:w-10" />
      </Link>
      <div className="w-max text-center flex flex-col justify-between py-1 ">
        <h1
          style={{ fontFamily: "Roboto Slab" }}
          className=" text-[1.93rem] max-sm:text-[.62rem] md:text-[2rem] max-lg:text-[1.26rem] font-bold uppercase text-[#053a7b]"
        >
          Centre for Under Graduate & Post Graduate Studies
        </h1>
        <h1 className="text-[1.3rem] max-sm:text-[.46rem] max-lg:text-[1.15rem] font-semibold capitalize text-[#053a7b] ">
          Biju Patnaik University of Technology, Odisha, Rourkela
        </h1>
        <p className="text-md max-sm:text-[.37rem] max-lg:text-[1rem] capitalize mt-1 max-sm:m-0">
          (an on-campus college of <strong>BPUT</strong>, Odisha)
        </p>
      </div>
    </div>
  );
}

export default Header;
