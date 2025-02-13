import axiosInstance from "../api/axiosInstance";
interface Ticket {
  ticket_row: number;
  ticket_column: number;
}

interface ReservationRequest {
  screening_id: string;
  email: string;
  totalPrice: number;
  ticketsData: Ticket[];
}
export const createReservation = async (params: ReservationRequest) => {
  try {
    console.log(params);
    const response = await axiosInstance.post(`/reservations`, params);
    return response.data;
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw error;
  }
};
