import {
  CreateReservationRequest,
  CreateReservationResponse,
} from "../../types/Reservation";
import axiosInstance from "../api/axiosInstance";

export const createReservation = async (
  params: CreateReservationRequest
): Promise<CreateReservationResponse> => {
  try {
    const response = await axiosInstance.post(`/reservations`, params);
    return response.data;
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw error;
  }
};
