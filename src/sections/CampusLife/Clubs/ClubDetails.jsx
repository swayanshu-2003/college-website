import PropTypes from "prop-types";
import Heading from "@/components/Typography/Heading";
import ClubSecreteryCard from "@/components/Clubs/ClubSecreteryCard";
import ClubCardMain from "@/components/Clubs/ClubCardMain";
// import ComingSoon from "@/components/ComingSoon/ComingSoon";
import Gallery from "@/components/Gallery/Gallery";

function ClubDetails({ data, images }) {
  return (
    <div className="w-full h-auto py-2 px-0" data-aos='fade-up'>
      <div className="w-full h-auto flex flex-col" data-aos='fade-up'>
        <div className="w-full h-full flex flex-col justify-center p-4 text-gray-600" data-aos='fade-up'>
          <div className="w-full h-72 overflow-hidden rounded-xl mb-7" data-aos='fade-up'>
            <img
              src={data.banner}
              alt="Club picture"
              className="object-cover w-full h-full"
              data-aos='fade-up'
            />
          </div>
          <p className="font-bold text-2xl text-[#053a7b]" data-aos='fade-up' >About the Club</p>
          <p className="mb-3 leading-relaxed text-sm text-justify" data-aos='fade-up' >
            {data.about}
          </p>
        </div>
      </div>
      <div className="w-full p-2" data-aos='fade-up'>
        <div className="relative h-full ml-0" data-aos='fade-up'>
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-600 rounded-lg"></span>
          <div className="relative h-full p-5 bg-white border-2 border-blue-600 rounded-lg" data-aos='fade-up'>
            <div className="flex items-center -mt-1">
              <h3 className="mt-2 text-xl font-bold text-blue-600 uppercase">
                Mission
              </h3>
            </div>
            <p className="mt-1 mb-1 w-full h-[2px] text-xs font-medium bg-blue-600 uppercase"></p>
            <p className="mb-2 text-gray-600 text-justify leading-relaxed mt-6 text-sm">
              {data.mission}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-auto mt-8 flex max-sm:flex-col justify-between items-center p-2 gap-4">
        <ClubCardMain data={data.co_ordinator} />
        <div className="w-[35%] max-sm:w-full h-auto">
          <Heading text="club secretaries" />
          <div className="w-full h-auto pr-2 pl-2 flex flex-col justify-center items-center gap-4">
            {data.secretary &&
              data.secretary.map((data, index) => {
                return <ClubSecreteryCard key={index} data={data} />;
              })}
          </div>
        </div>
        <div className="w-[35%] max-sm:w-full h-auto">
          <Heading text="club vice-secretaries" />
          <div className="w-full h-auto pr-2 pl-2 flex flex-col justify-center items-center gap-4">
            {data.viceSecretary &&
              data.viceSecretary.map((data, index) => {
                return <ClubSecreteryCard key={index} data={data} />;
              })}
          </div>
        </div>
      </div> */}
      <div className="w-full h-auto p-2 mt-8" data-aos='fade-up'>
        <Heading text="Club Activity Gallery" />
        <div className="w-full h-auto flex justify-center items-center p-2">
          <Gallery imageData={images} />
          {/* <ComingSoon /> */}
        </div>
      </div>
    </div>
  );
}

ClubDetails.propTypes = {
  data: PropTypes.shape({
    banner: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    co_ordinator: PropTypes.object.isRequired,
    secretary: PropTypes.arrayOf(PropTypes.object).isRequired,
    viceSecretary: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ClubDetails;
