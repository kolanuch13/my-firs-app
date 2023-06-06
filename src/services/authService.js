import axios from "../utils/axios";

export const loginUser = async (payload) => {
  return axios.post("/users/login", payload);
};
