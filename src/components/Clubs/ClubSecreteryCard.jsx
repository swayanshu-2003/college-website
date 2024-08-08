import PropTypes from "prop-types";
import { GiGraduateCap } from "react-icons/gi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

function ClubSecreteryCard({ data }) {
  return (
    <div className="w-full h-auto bg-blue-100 px-4 py-2 border-none rounded-lg">
      <h5 className="text-md font-semibold text-gray-800">{data.name}</h5>
      <p className="text-gray-600 mt-1 text-sm font-medium flex items-center truncate capitalize">
        <span className="mr-3 text-xl text-blue-900">
          <GiGraduateCap />
        </span>
        {data.branch}
      </p>
      <p className="text-gray-600 mt-1 text-sm font-medium flex items-center truncate capitalize">
        <span className="mr-4 text-md text-blue-900">
          <BsFillTelephoneForwardFill />
        </span>
        {data.phone}
      </p>
    </div>
  );
}

ClubSecreteryCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    branch: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClubSecreteryCard;
