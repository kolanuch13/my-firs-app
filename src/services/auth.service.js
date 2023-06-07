import axios from "../utils/axios";

export const loginUser = async (payload) => {
  return axios.post("/users/login", payload);
};

export const signInUser = async (payload) => {
  return axios.post("/users/register", payload);
};

export const logoutUser = async () => {
  return axios.post("/users/logout");
};
