import axios, { type Axios } from "axios";

const { VITE_API_URI, VITE_API_VERSION } = import.meta.env;

// axios.defaults.withCredentials = true;

const baseURL = VITE_API_URI + `/${VITE_API_VERSION}`;

const defaultClient: Axios = axios.create({
  baseURL: baseURL,
  // withCredentials: true,
});

export default defaultClient;
