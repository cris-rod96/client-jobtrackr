import PropTypes from "prop-types";
const BtnPostulation = ({ toggleModal }) => {
  return (
    <button
      onClick={toggleModal}
      type="button"
      className="w-40 border border-gray-500/30 text-gray-300 bg-gray-500/10 rounded-lg hover:bg-gray-500/20 hover:text-white transition-colors duration-300"
    >
      Postular
    </button>
  );
};

BtnPostulation.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default BtnPostulation;
