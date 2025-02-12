/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import styles from "./ScreeningDetails.module.css";
import { useEffect, useState } from "react";
import Screening from "../../types/Screenings";
import { fetchScreening } from "../../services/screenings/screeningService";
import SeatChart from "../../components/screening/SeatChart";
import { dateFormatter } from "../../util/dateTimeFormater";
import image from "../../assets/movie.jpg";

const ScreeningDetailsPage = () => {
  const { id } = useParams();
  const [screening, setScreening] = useState<Screening>();
  const [loading, setLoading] = useState(false);
  const takenSeats = new Set(screening?.tickets);

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

  if (loading) return <div className={styles.container}>Loading</div>;

  return (
    <div className={styles.container}>
      <h2>{screening?.movie?.name}</h2>

      <div className={styles.content}>
        <div className={styles.leftSection}>
          <img
            className={styles.poster}
            src={image}
            alt={`Poster for ${screening?.movie?.name}`}
          />
        </div>
        <div className={styles.rightSection}>
          {screening?.screeningDate && screening?.screeningTime && (
            <p>
              {dateFormatter(screening.screeningDate)} -{" "}
              {screening.screeningTime.slice(0, 5)}
            </p>
          )}
          {screening?.screeningRows && screening?.screeningColumns && (
            <SeatChart
              rows={screening.screeningRows}
              cols={screening.screeningColumns}
              takenSeats={takenSeats}
            />
          )}
        </div>
      </div>
      <strong className={styles.price}>
        Price: {screening?.ticketPrice} RSD
      </strong>
    </div>
  );
};

export default ScreeningDetailsPage;
