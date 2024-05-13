import { instance } from "./base.api";
const model = "postulations";

export const postulationsEndpoints = {
  getAll: () => {
    return instance.get(`${model}/all`);
  },
  savePostulation: (postulation) => {
    return instance.post(`${model}/create`, postulation);
  },
};
