import { RiCloseLine } from "react-icons/ri";
import PropTypes from "prop-types";
const BtnClose = ({ toggleModal }) => {
  return (
    <button
      className="absolute top-2 right-2"
      type="button"
      onClick={toggleModal}
    >
      <RiCloseLine size={25} />
    </button>
  );
};
BtnClose.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default BtnClose;
