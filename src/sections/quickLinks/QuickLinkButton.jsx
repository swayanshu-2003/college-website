import PropTypes from "prop-types";

function QuickLinkButton({ link, title, icon }) {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <button className="bg-blue-50 fill-gray-400 px-3 py-2 pl-4 flex items-center justify-between cursor-pointer border-none rounded-lg transition-transform duration-300 active:scale-95  group w-56  gap-4">
        <div className="svg-wrapper group-hover:scale-125 transition-transform duration-700 w-[30%]">
          <img
            src={icon}
            alt="icon"
            className="w-10 h-10 rounded-lg transform origin-center transition-transform duration-700 group-hover:translate-x-[3.8em] group-hover:scale-105"
          />
        </div>
        <p className="text-left font-semibold text-lg text-gray-600 w-[70%] transition-opacity duration-700 group-hover:opacity-0 uppercase" style={{ fontFamily: "Roboto Slab" }}>
          {title}
        </p>
      </button>
    </a>
  );
}

QuickLinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default QuickLinkButton;
