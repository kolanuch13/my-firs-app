import axios from "../utils/axios";

export const getApartmentsList = (page, size) => {
  return axios.get(`/apartments?page=${page}&size=${size}`);
}

export const getApartmentById = (id) => {
  return axios.get(`/apartments/${id}`);
};