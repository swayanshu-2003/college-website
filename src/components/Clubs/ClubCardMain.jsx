import PropTypes from "prop-types";

function ClubCardMain({ data }) {
  return (
    <div className="w-[30%] max-sm:w-full h-80 bg-white rounded-lg text-gray-900 border border-gray-800">
      <div className="rounded-t-lg h-20 overflow-hidden bg-gray-800"></div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover h-full w-full"
          src={data.image}
          alt="Director placement"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold text-lg">{data.name}</h2>
        <p className="text-sm">Club Co-ordinator</p>
        <p className="text-gray-500 text-base">{data.designation}</p>
      </div>
      <div className="w-full border-t p-2 mt-2 flex flex-col items-center gap-2">
        <p className="text-sm">Email: {data.email}</p>
        <p className="text-sm">Phone: {data.phone}</p>
      </div>
    </div>
  );
}

ClubCardMain.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClubCardMain;
