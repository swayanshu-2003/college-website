import PropTypes from "prop-types";

const Heading2 = ({ text }) => {
  return (
    <p className=" overflow-hidden flex flex-col items-center justify-center font-semibold uppercase py-2 !w-fit m-auto text-center font-['Merriweather'] ">
      <span className="text-gray-800 mx-0 text-3xl max-sm:text-2xl">
        {text || ""}
      </span>
      <span className="bg-cyan-400 w-3/5 h-[2px] block self-end"></span>
    </p>
  );
};

Heading2.propTypes = {
  text: PropTypes.string,
};

export default Heading2;
