import axios from "axios";

let config = {
  baseURL: "http://localhost:3000/api/",
};

export const api = axios.create(config);
