import axios from "axios";
const API_URL = "https://api.coincap.io/v2/assets/";
export const getUsersServices = (pageNumber) =>
  axios.get(`${API_URL}?limit=${pageNumber * 50}`);
