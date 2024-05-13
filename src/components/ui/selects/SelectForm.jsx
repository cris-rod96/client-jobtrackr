import PropTypes from "prop-types";

const SelectForm = ({ inputName, handleChange, Icon, options, value }) => {
  return (
    <div className="flex bg-white">
      <div className="w-16 flex justify-center items-center bg-neutral-700">
        <Icon size="24" />
      </div>
      <select
        name={inputName}
        id={inputName}
        className="w-full px-2 py-3 bg-transparent outline-none text-black"
        onChange={handleChange}
        value={value}
      >
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
SelectForm.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  Icon: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
};
export default SelectForm;
