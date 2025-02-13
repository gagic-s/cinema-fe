/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import styles from "./ScreeningDetails.module.css";
import { useEffect, useMemo, useState } from "react";
import Screening from "../../types/Screenings";
import { fetchScreening } from "../../services/screenings/screeningService";
import SeatChart from "../../components/screening/SeatChart/SeatChart";
import { dateFormatter } from "../../util/dateTimeFormater";
import image from "../../assets/movie.jpg";
import { createReservation } from "../../services/reservation/reservationService";
import Button from "../../components/shared/Button/Button";

type SeatStatus = "available" | "taken" | "selected";
const ScreeningDetailsPage = () => {
  const { id } = useParams();
  const [screening, setScreening] = useState<Screening>();
  const [loading, setLoading] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  const takenSeats = new Set(screening?.tickets || []);

  const userEmail = "user@gmail.com"; //TODO: update when user service available

  const getScreenings = async () => {
    setLoading(true);
    try {
      if (!id) return;
      const data = await fetchScreening(id);
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
    if (!screening?.id) return;

    // Convert the Set to an array of Tickets
    const ticketsArray = Array.from(selectedSeats).map((seat) => {
      const [row, column] = seat.split("-").map(Number); // Split and convert to numbers
      return { ticket_row: row, ticket_column: column };
    });

    const newReservation = {
      screening_id: screening?.id,
      email: userEmail,
      totalPrice: totalPrice,
      ticketsData: ticketsArray,
    };

    createReservation(newReservation);
  };

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
    </div>
  );
};

export default ScreeningDetailsPage;
