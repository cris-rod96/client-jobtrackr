import { useState } from "react";
import { BtnPostulation, InputSearch, Title } from "./components";
import Modal from "./components/modal/Modal";
import { useEffect } from "react";
import { postulationsEndpoints } from "./api/postulations";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Toaster } from "sonner";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { AxiosError } from "axios";
import { DiDotnet } from "react-icons/di";
import { GoDotFill } from "react-icons/go";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [postulations, setPostulations] = useState([]);
  const [idPostulation, setIdPostulation] = useState(null);
  const toggleModal = () => setShowModal(!showModal);
  const fetchPostulations = () => {
    postulationsEndpoints
      .getAll()
      .then((res) => setPostulations(res.data))
      .catch(() => {});
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar esta postulación?",
      text: "Esta acción es irreversible, eliminarás esta postulación para futuras referencias.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar postulación",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Contraseña de seguridad",
          input: "password",
          inputLabel: "Esta acción requiere de una contraseña",
          inputPlaceholder: "Ingresa tu contraseña",
        }).then((res) => {
          const password = res.value;
          postulationsEndpoints
            .deletePostulation(id, password)
            .then((res) => {
              toast.success(res.data.message);
              fetchPostulations();
            })
            .catch((err) => {
              if (err instanceof AxiosError) {
                toast.error(err.response.data.error);
              } else {
                toast.error("Error desconocido");
              }
            });
        });
      }
    });
  };
  const handleEdit = (id) => {
    setIdPostulation(id);
    toggleModal();
  };

  useEffect(() => {
    fetchPostulations();
  }, []);

  return (
    <section className="flex flex-col gap-5">
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          toast={toast}
          idPostulation={idPostulation}
          setIdPostulation={setIdPostulation}
          fetchPostulations={fetchPostulations}
        />
      )}
      <header className="flex flex-col">
        <Title title="JobTrackr" />
        <div className="py-5 my-5 flex items-center px-2 border border-green-900 rounded-md bg-green-900 bg-opacity-50 text-white">
          <p className="flex gap-2 font-light text-sm tracking-wide ">
            <GoDotFill />
            Nota: Este proyecto no está destinado para uso general. El autor lo
            desarrolló con el propósito de llevar un registro de sus solicitudes
            de trabajo y practicar sus habilidades. La aplicación está protegida
            por una contraseña que solo el autor conoce. Además, está diseñada
            para que los usuarios solo puedan visualizar las solicitudes
            realizadas por el autor, garantizando así la privacidad de los
            datos.
          </p>
        </div>
        <div className="flex gap-3">
          <InputSearch disabled={postulations.length == 0} />
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
                    <button
                      type="button"
                      className="px-3 py-2 border border-yellow-500 bg-yellow-500 text-white rounded-md"
                      onClick={() => handleEdit(postulation._id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(postulation._id)}
                      className="px-3 py-2 border border-red-500 bg-red-500 text-white rounded-md"
                    >
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
