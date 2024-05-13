import axios from "axios";
const IS_DEVELOPMENT = import.meta.env.MODE === "development";
export const instance = axios.create({
  baseURL: IS_DEVELOPMENT
    ? import.meta.env.VITE_BASE_URL_LOCAL
    : import.meta.env.VITE_BASE_URL_DEPLOY,
});
