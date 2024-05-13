import { useState } from "react";
import { BtnPostulation, InputSearch, Title } from "./components";
import Modal from "./components/modal/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <section className="flex flex-col gap-5">
      {showModal && <Modal toggleModal={toggleModal} />}
      <header className="flex flex-col">
        <Title title="JobTrackr" />
        <div className="flex gap-3">
          <InputSearch />
          <BtnPostulation toggleModal={toggleModal} />
        </div>
        <div className="relative overflow-x-auto shadow-md  mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 flex flex-col">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="[&>th]:p-6">
                <th scope="col">Fecha</th>
                <th scope="col">Empresa</th>
                <th scope="col">Website</th>
                <th scope="col">Puesto</th>
                <th scope="col">Requisitos</th>
                <th scope="col">Ubicación</th>
                <th scope="col">Modalidad</th>
                <th scope="col">Salario</th>
                <th scope="col">Reclutador</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Email</th>
                <th scope="col">Canal</th>
                <th scope="col">Estado</th>
                <th scope="col">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr> */}
            </tbody>
            <tfoot className="bg-gray-800 p-6 text-center">
              <span className="text-lg text-white font-bold">
                Sin postulaciones registradas
              </span>
            </tfoot>
          </table>
        </div>
      </header>
    </section>
  );
};

export default App;
