import { RiCloseLine } from "react-icons/ri";
import PropTypes from "prop-types";
const BtnClose = ({ handleClose }) => {
  return (
    <button
      className="absolute top-2 right-2"
      type="button"
      onClick={handleClose}
    >
      <RiCloseLine size={25} />
    </button>
  );
};
BtnClose.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default BtnClose;
