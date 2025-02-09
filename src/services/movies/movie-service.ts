// import axios from "axios";

import axiosInstance from "../api/axiosInstance";

// const API_BASE_URL = "http://localhost:8000/api"; // Change to your backend URL

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const fetchMovies = async (params: {
  movieName?: string;
  date?: string;
  limit?: number;
  offset?: number;
}) => {
  try {
    const response = await axiosInstance.get("/movies", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
