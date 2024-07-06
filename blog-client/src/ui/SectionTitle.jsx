import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="pb-24 text-center ">
      <h1 className="text-2xl sm:text-3xl  text-[#ff5d56] uppercase">
        {heading}
      </h1>

      <h4 className="text-[16px] font-medium text-[#707070] mt-1">
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
