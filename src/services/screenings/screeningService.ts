import axiosInstance from "../api/axiosInstance";

export const fetchScreening = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/screenings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
