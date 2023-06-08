import axios from "axios";
import store from "../store/index";

axios.defaults.baseURL = "https://my-first-app-vue-backend.onrender.com/api";
axios.interceptors.request.use(
  (config) => {
    const { token } = store.state.auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
