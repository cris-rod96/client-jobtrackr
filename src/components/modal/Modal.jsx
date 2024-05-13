import { useState } from "react";
import { BtnClose, BtnSubmit, InputForm, SelectForm } from "..";
import { fields } from "../../data/formFields";
import PropTypes from "prop-types";

const Modal = ({ toggleModal }) => {
  const initialState = {
    companyName: "",
    jobTitle: "",
    location: "",
    modality: "",
    offeredSalary: "",
    recruiterName: "",
    recruiterEmail: "",
    recruiterPhone: "",
    communicationChannel: "",
    companyWebsite: "",
    status: "",
    requisites: "",
    secret_password: "",
  };
  const [postulation, setPostulation] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostulation({
      ...postulation,
      [name]: value,
    });

    console.log(postulation);
  };

  return (
    <main className="absolute top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center bg-neutral-800 bg-opacity-50 z-50">
      <section className="border border-gray-500/20 rounded-lg bg-neutral-800 px-8 py-10 w-3/5 relative">
        <BtnClose toggleModal={toggleModal} />

        <form action="" className="grid grid-cols-2 gap-5">
          {fields.map((field) => (
            <div className="flex flex-col gap-2" key={field.inputName}>
              <label htmlFor="" className="text-lg">
                {field.labelText}
              </label>
              {field.inputCategory === "input" ? (
                <InputForm
                  inputType={field.inputType}
                  inputName={field.inputName}
                  value={postulation[field.inputName]}
                  Icon={field.inputIcon}
                  handleChange={handleChange}
                />
              ) : (
                <SelectForm
                  inputName={field.inputName}
                  Icon={field.inputIcon}
                  options={field.options}
                  handleChange={handleChange}
                />
              )}
            </div>
          ))}
          <BtnSubmit />
        </form>
      </section>
    </main>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
