import { Link } from "react-router-dom";
import Screening from "../../../types/Screenings";
import { dateFormatter } from "../../../util/dateTimeFormater";
import styles from "./ScreeningTile.module.css";

interface ScreeningTileProps {
  screening: Screening;
}

const ScreeningTile: React.FC<ScreeningTileProps> = ({ screening }) => {
  return (
    <li className={styles.screeningTileContainer}>
      <Link to={`/${screening.screening_id}`}>
        {dateFormatter(screening.screeningDate)} at
        <strong> {screening.screeningTime.slice(0, 5)}</strong> -{" "}
        {screening.ticketPrice} RSD
      </Link>
    </li>
  );
};

export default ScreeningTile;
