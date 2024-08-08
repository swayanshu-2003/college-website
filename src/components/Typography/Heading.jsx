import PropTypes from "prop-types";

const Heading = ({ text }) => {
  const buttonStyle = {
    WebkitClipPath:
      "polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%)",
    clipPath:
      "polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%)",
  };

  return (
    <p
      style={buttonStyle}
      className=" my-3 flex items-center justify-center w-fit rounded-md uppercase font-normal px-6 text-white h-8 text-xs leading-[14px] tracking-[1.2px] transition duration-200 ease-in-out bg-gradient-to-r from-[#1c1c1c] to-[#6220fb] border-0 overflow-hidden hover:cursor-pointer "
    >
      <span className="text-[0.9rem] max-sm:text-[0.8rem]">{text}</span>
    </p>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
