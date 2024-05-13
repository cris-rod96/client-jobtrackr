import PropTypes from "prop-types";
const InputSearch = ({ disabled }) => {
  return (
    <input
      type="text"
      className="w-full px-2 py-4 bg-neutral-800 border border-neutral-800 rounded-md outline-none text-white"
      placeholder="Filtrar por empresa,sueldo,modalidad..."
      disabled={disabled}
    />
  );
};
InputSearch.propTypes = {
  disabled: PropTypes.bool,
};

export default InputSearch;
