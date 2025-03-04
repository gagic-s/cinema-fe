import {
  CreateMovieRequest,
  CreateMovieResponse,
  GetAllMoviesResponse,
} from "../../types/Movie";
import axiosInstance from "../api/axiosInstance";

type GetMoviesParams = {
  movieName?: string;
  date?: string;
  limit?: number;
  offset?: number;
};
export const getAllMovies = async (
  params: GetMoviesParams
): Promise<GetAllMoviesResponse[]> => {
  try {
    const response = await axiosInstance.get("/movies", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const createMovie = async (
  newMovie: CreateMovieRequest
): Promise<CreateMovieResponse> => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found");
  }
  try {
    const response = await axiosInstance.post("/movies", newMovie, {
      headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating movies:", error);
    throw error;
  }
};
