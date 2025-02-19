/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../assets/movie.jpg";
import SeatChart from "../../components/screening/SeatChart/SeatChart";
import Button from "../../components/shared/Button/Button";
import Modal from "../../components/shared/Modal/Modal";
import { createReservation } from "../../services/reservation/reservation-service";
import { getOneScreening } from "../../services/screenings/screening-service";
import { GetOneScreeningResponse } from "../../types/Screenings";
import { dateFormatter } from "../../util/dateTimeFormatter";
import styles from "./ScreeningDetails.module.css";

type SeatStatus = "available" | "taken" | "selected";
const ScreeningDetailsPage = () => {
  const { id } = useParams();
  const [screening, setScreening] = useState<GetOneScreeningResponse>();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());
  const takenSeats = new Set(screening?.tickets || []);

  const userEmail = "user@gmail.com"; //TODO: update when user service available

  const getScreenings = async () => {
    setLoading(true);
    try {
      if (!id) return;
      const data = await getOneScreening(id);
      setScreening(data);
    } catch (error) {
      console.error("Failed to fetch screening", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getScreenings();
  }, []);

  const totalPrice = useMemo(() => {
    const ticketPrice = screening?.ticketPrice ?? 0;
    return selectedSeats.size > 0 ? selectedSeats.size * +ticketPrice : 0;
  }, [selectedSeats, screening]);

  const toggleSeat = (row: number, col: number) => {
    const seatId = `${row}-${col}`;
    if (takenSeats.has(seatId)) return; // Cannot select a taken seat

    setSelectedSeats((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(seatId)) {
        newSelection.delete(seatId);
      } else {
        newSelection.add(seatId);
      }
      return newSelection;
    });
  };

  const getSeatStatus = (row: number, col: number): SeatStatus => {
    const seatId = `${row}-${col}`;
    if (takenSeats.has(seatId)) return "taken";
    if (selectedSeats.has(seatId)) return "selected";
    return "available";
  };

  const handleBuyClick = () => {
    if (!screening?.screening_id) return;
    setModalOpen(true);
    // Convert the Set to an array of Tickets
    const ticketsArray = Array.from(selectedSeats).map((seat) => {
      const [row, column] = seat.split("-").map(Number); // Split and convert to numbers
      return { ticket_row: row, ticket_column: column };
    });
    if (!ticketsArray.length) {
      setModalOpen(true);
      return;
    }

    const newReservation = {
      screening_id: screening?.screening_id,
      email: userEmail,
      totalPrice: totalPrice,
      ticketsData: ticketsArray,
    };
    console.log(newReservation);
    createReservation(newReservation);
  };

  const handleConfirm = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const modalContentConfirm = (
    <p>
      <h3>Are you sure you want to purchase these tickets? </h3>
      <p> Event: {screening?.movie?.name} </p>

      <p> Date: {dateFormatter(screening?.screeningDate || "")} </p>
      <p>Time: {screening?.screeningTime.slice(0, 5)}</p>
      <p> Quantity: {selectedSeats.size} </p>
      <p> Total Price: {totalPrice} RSD</p>

      <p>
        Please confirm your purchase. Once confirmed, tickets cannot be refunded
        or exchanged.
      </p>
    </p>
  );

  const modalContentError = (
    <p>
      <p>
        You must select at least one seat before proceeding with the ticket
        purchase.
      </p>

      <p>Please choose your preferred seat(s) to continue.</p>
    </p>
  );

  if (loading) return <div className={styles.container}>Loading</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {screening?.movie?.name} -
        {screening ? dateFormatter(screening.screeningDate) : ""} -
        <strong>{screening ? screening.screeningTime.slice(0, 5) : ""}</strong>
      </h2>

      <div className={styles.content}>
        <div className={styles.leftSection}>
          <img
            className={styles.poster}
            src={image}
            alt={`Poster for ${screening?.movie?.name}`}
          />
        </div>
        <div className={styles.rightSection}>
          {screening?.screeningRows &&
            screening?.screeningColumns &&
            screening.ticketPrice && (
              <SeatChart
                rows={screening.screeningRows}
                cols={screening.screeningColumns}
                getSeatStatus={getSeatStatus}
                toggleSeat={toggleSeat}
              />
            )}
        </div>
      </div>
      <div className={styles.purchaseContainer}>
        <strong>Total price: {totalPrice} RSD</strong>
        <Button onClick={handleBuyClick} text="Buy" />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Ticket Purchase"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        {selectedSeats.size ? modalContentConfirm : modalContentError}
      </Modal>
    </div>
  );
};

export default ScreeningDetailsPage;
