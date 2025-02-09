import axios from "axios";
import API_BASE_URL from "./apiConstants";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // or your API base URL
  timeout: 10000, // optional
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
