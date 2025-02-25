import {
  AddScreeningRequest,
  AddScreeningResponse,
  GetOneScreeningResponse,
} from "../../types/Screenings";
import axiosInstance from "../api/axiosInstance";

export const getOneScreening = async (
  id: string
): Promise<GetOneScreeningResponse> => {
  try {
    const response = await axiosInstance.get(`/screenings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching screening:", error);
    throw error;
  }
};

export const createScreening = async (
  screening: AddScreeningRequest
): Promise<AddScreeningResponse> => {
  try {
    const response = await axiosInstance.post(`/screenings`, screening);
    return response.data;
  } catch (error) {
    console.error("Error creating screening:", error);
    throw error;
  }
};

export const deleteScreening = async (
  id: string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  try {
    const response = await axiosInstance.delete(`/screenings/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting screening:", error);
    throw error;
  }
};

