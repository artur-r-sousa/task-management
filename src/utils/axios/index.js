import axios from "axios";

export const globalAPI = axios.create({
  baseURL: `http://localhost:3002/`,
  timeout: 1000,
});