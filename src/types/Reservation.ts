export type Ticket = {
  ticket_row: number;
  ticket_column: number;
};

export type TicketResponse = {
  ticket_row: number;
  ticket_column: number;
  reservation_id: string;
  screening_id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateReservationRequest = {
  screening_id: string;
  email: string;
  totalPrice: number;
  ticketsData: Ticket[];
};

export type CreateReservationResponse = {
  reservation_id: string;
  screening_id: string;
  reservationCode: string;
  email: string;
  totalPrice: number;
  tickets: TicketResponse[];
  createdAt: Date;
  updatedAt: Date;
};
