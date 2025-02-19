import axiosInstance from "../api/axiosInstance";

export const getAllGenres = async () => {
  try {
    const response = await axiosInstance.get(`/genres`);
    return response.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};
