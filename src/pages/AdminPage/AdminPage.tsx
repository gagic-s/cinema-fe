// pages/Admin.tsx
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { retrieveAllReservation } from "../../services/reservation/reservation-service";
import { Reservation } from "../../types/Reservation";
import styles from "./AdminPage.module.css";


const Admin = () => {
  const auth = useContext(AuthContext);
  const [reservations, setReservation] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await retrieveAllReservation();
      setReservation(response);
    };
    fetchReservations();
  }, []);

  return (
    <div className={styles.adminContainer}>
     <h1>Welcome Admin, {auth?.user?.name}</h1>
    <h2>Reservations: </h2>
     {reservations && reservations.map((reservation) => (
       <div key={reservation.reservation_id}>
         <div className={styles.reservationContainer}>
         <p>Reservation code: {reservation.reservationCode}</p>
         <p>Screening id: {reservation.screening_id}</p>
         <p>Total price: {reservation.totalPrice}</p>
         <p>{reservation.Tickets.map(ticket => (
          <div>Seat: {ticket.ticket_row}/{ticket.ticket_column}</div>
         ))}</p>
           </div>
       </div>
     ))}
   

    </div>
  ) 
};

export default Admin;
