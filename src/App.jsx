import { useState } from "react";
import { BtnPostulation, InputSearch, Title } from "./components";
import Modal from "./components/modal/Modal";
import { useEffect } from "react";
import { postulationsEndpoints } from "./api/postulations";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { AxiosError } from "axios";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [postulations, setPostulations] = useState([]);
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    postulationsEndpoints
      .getAll()
      .then((res) => setPostulations(res.data))
      .catch(() => {});
  }, []);

  return (
    <section className="flex flex-col gap-5">
      {showModal && <Modal toggleModal={toggleModal} toast={toast} />}
      <header className="flex flex-col">
        <Title title="JobTrackr" />
        <div className="flex gap-3">
          <InputSearch />
          <BtnPostulation toggleModal={toggleModal} />
        </div>
        <table className="table-fixed text-center  text-gray-500 dark:text-gray-400 flex flex-col mt-10">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full [&>tr]:p-6">
            <tr className="flex justify-between [&>th]:w-full [&>th]:text-center">
              <th>Fecha</th>
              <th>Empresa</th>
              <th>Website</th>
              <th>Puesto</th>
              <th>Ubicación</th>
              <th>Modalidad</th>
              <th>Salario</th>
              <th>Reclutador</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Canal</th>
              <th>Estado</th>
              <th>Options</th>
            </tr>
          </thead>
          {postulations.length > 0 ? (
            <tbody className="[&>tr]:p-6">
              {postulations.map((postulation) => (
                <tr
                  className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between text-center [&>td]:w-full [&>td]:text-center"
                  key={postulation._id}
                >
                  <td>{postulation.postulationDate}</td>
                  <td className="">{postulation.companyName}</td>
                  <td className="">
                    <a href={postulation.companyWebsite} target="__blank">
                      Link
                    </a>
                  </td>
                  <td className="">{postulation.jobTitle}</td>
                  <td className="">{postulation.location}</td>
                  <td className="">{postulation.modality}</td>
                  <td className="">{postulation.offeredSalary}</td>
                  <td className="">{postulation.recruiterName}</td>
                  <td className="">{postulation.recruiterPhone}</td>
                  <td className="">{postulation.recruiterEmail}</td>
                  <td className="">{postulation.communicationChannel}</td>
                  <td className="">{postulation.status}</td>
                  <td className="flex items-center justify-center gap-2">
                    <button>
                      <FaEdit />
                    </button>
                    <button>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tfoot className="bg-gray-800 p-6 text-center">
              <span className="text-lg text-white font-bold">
                Sin postulaciones registradas
              </span>
            </tfoot>
          )}
        </table>
      </header>

      <Toaster richColors />
    </section>
  );
};

export default App;
