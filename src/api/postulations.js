import { instance } from "./base.api";
const model = "postulations";

export const postulationsEndpoints = {
  getAll: () => {
    return instance.get(`${model}/all`);
  },
  getByID: (id) => {
    return instance.get(`${model}/view/${id}`);
  },
  savePostulation: (postulation) => {
    return instance.post(`${model}/create`, postulation);
  },
  updatePostulation: (id, postulation) => {
    return instance.put(`${model}/update/${id}`, postulation);
  },
  deletePostulation: (id, password) => {
    return instance.put(`${model}/delete/${id}`, {
      secret_password: password,
    });
  },
};
