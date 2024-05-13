import { BiMoney } from "react-icons/bi";
import { FaPhone, FaQuestion } from "react-icons/fa";
import { FaBuildingCircleCheck, FaMapLocationDot } from "react-icons/fa6";
import { IoIosBusiness } from "react-icons/io";
import { MdConnectWithoutContact, MdWork } from "react-icons/md";
import {
  RiCodeSSlashLine,
  RiLockPasswordLine,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
import { TbWorldCode } from "react-icons/tb";

export const fields = [
  {
    labelText: "Empresa",
    inputType: "text",
    inputCategory: "input",
    inputName: "companyName",
    inputIcon: IoIosBusiness,
  },
  {
    labelText: "Puesto",
    inputType: "text",
    inputCategory: "input",
    inputName: "jobTitle",
    inputIcon: MdWork,
  },
  {
    labelText: "Requisitos",
    inputType: "text",
    inputCategory: "input",
    inputName: "requisites",
    inputIcon: RiCodeSSlashLine,
  },
  {
    labelText: "Ubicación",
    inputType: "text",
    inputCategory: "input",
    inputName: "location",
    inputIcon: FaMapLocationDot,
  },

  {
    labelText: "Modalidad",
    inputCategory: "select",
    inputName: "modality",
    inputIcon: FaQuestion,
    options: ["Remoto", "Híbrido", "Presencial"],
  },
  {
    labelText: "Salario",
    inputType: "number",
    inputCategory: "input",
    inputName: "offeredSalary",
    inputIcon: BiMoney,
  },
  {
    labelText: "Website",
    inputType: "url",
    inputCategory: "input",
    inputName: "companyWebsite",
    inputIcon: TbWorldCode,
  },
  {
    labelText: "Reclutador",
    inputType: "text",
    inputCategory: "input",
    inputName: "recruiterName",
    inputIcon: RiUserLine,
  },
  {
    labelText: "Teléfono",
    inputType: "text",
    inputCategory: "input",
    inputName: "recruiterPhone",
    inputIcon: FaPhone,
  },
  {
    labelText: "Email",
    inputType: "email",
    inputCategory: "input",
    inputName: "recruiterEmail",
    inputIcon: RiMailLine,
  },
  {
    labelText: "Canal",
    inputType: "text",
    inputCategory: "input",
    inputName: "communicationChannel",
    inputIcon: MdConnectWithoutContact,
  },
  {
    labelText: "Estado",
    inputCategory: "select",
    inputName: "status",
    options: [
      "Pendiente",
      "Rechazada",
      "Aprobada",
      "En revisión",
      "Cancelada",
      "En espera",
      "En proceso",
      "Finalizada",
      "Aceptada",
      "Denegada",
      "En evaluación",
      "En consideración",
      "En espera de decisión",
      "En espera de respuesta",
      "En espera de aprobación",
      "En espera de confirmación",
    ],
    inputIcon: FaBuildingCircleCheck,
  },
  {
    labelText: "Contraseña",
    inputType: "password",
    inputCategory: "input",
    inputName: "secret_password",
    inputIcon: RiLockPasswordLine,
  },
];
