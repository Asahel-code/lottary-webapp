import axios from "axios";

export const ENDPOINT = "http://localhost:8080/api";
const BASE_URL = ENDPOINT;

const AxiosUtility = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 100000,
  headers: {
    accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
  withCredentials: true
});

export const setAuthToken = (instance) => {
  const { state } = JSON.parse(localStorage?.getItem("user"));
  const token = state?.user?.token;

  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default AxiosUtility;