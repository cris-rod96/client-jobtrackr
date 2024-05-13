import PropTypes from "prop-types";
const Title = ({ title }) => {
  return (
    <h1 className="text-6xl text-center text-white font-bold mb-5">{title}</h1>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
