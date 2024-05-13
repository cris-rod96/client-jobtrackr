import PropTypes from "prop-types";
const InputForm = ({ inputType, inputName, handleChange, value, Icon }) => {
  return (
    <div className="flex bg-white">
      <div className="w-16 flex justify-center items-center bg-neutral-700">
        <Icon size="24" />
      </div>
      <input
        type={inputType}
        name={inputName}
        id={inputName}
        value={value}
        onChange={handleChange}
        className="w-full px-2 py-3 bg-transparent outline-none text-black"
        autoComplete="off"
      />
    </div>
  );
};

InputForm.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  Icon: PropTypes.any.isRequired,
};
export default InputForm;
