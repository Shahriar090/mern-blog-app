import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="pb-12 text-center ">
      <h1 className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent uppercase">
        {heading}
      </h1>

      <h4 className="text-[16px] font-medium text-gray-700 capitalize mt-1">
        {subHeading}
      </h4>
    </div>
  );
};

// props validation
SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
