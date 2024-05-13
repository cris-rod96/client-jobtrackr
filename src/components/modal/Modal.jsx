import { useState } from "react";
import { BtnClose, BtnSubmit, InputForm, SelectForm } from "..";
import { fields } from "../../data/formFields";
import PropTypes from "prop-types";
import { postulationsEndpoints } from "../../api/postulations";
import { AxiosError } from "axios";

const Modal = ({ toggleModal, toast }) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(postulation).every((data) => data !== "");
    if (isValid) {
      postulationsEndpoints
        .savePostulation(postulation)
        .then(() => {
          toast.success("Postulación agregada con éxito");
        })
        .catch((err) => {
          if (err instanceof AxiosError) {
            if (err.code === "ERR_NETWORK") toast.error(`${err.message}`);
            if (err.code === "ERR_BAD_REQUEST")
              toast.error(err.response.data.error);
            else toast.error("Error desconocido");
          }
        });
    } else {
      toast.error("Todos los campos son obligatorios");
    }
  };

  return (
    <main className="absolute top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center bg-neutral-800 bg-opacity-50 z-50">
      <section className="border border-gray-500/20 rounded-lg bg-neutral-800 px-8 py-10 w-3/5 relative">
        <BtnClose toggleModal={toggleModal} />

        <form
          action=""
          className="grid grid-cols-2 gap-5"
          onSubmit={handleSubmit}
        >
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
  toast: PropTypes.any,
};

export default Modal;
