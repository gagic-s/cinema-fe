/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "../api/axiosInstance";

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

export const createMovie = async (newMovie: any) => {
  try {
    const response = await axiosInstance.post("/movies", newMovie);
    return response.data;
  } catch (error) {
    console.error("Error adding movies:", error);
    throw error;
  }
};
