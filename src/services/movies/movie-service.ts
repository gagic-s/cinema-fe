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
