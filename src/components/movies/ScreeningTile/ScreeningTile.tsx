import { Link } from "react-router-dom";
import { dateFormatter } from "../../../util/dateTimeFormatter";
import styles from "./ScreeningTile.module.css";
import { Screening } from "../../../types/Screenings";

interface ScreeningTileProps {
  screening: Screening;
}

const ScreeningTile: React.FC<ScreeningTileProps> = ({ screening }) => {
  return (
    <Link to={`/screenings/${screening.screening_id}`}>
      <li className={styles.screeningTileContainer}>
        {dateFormatter(screening.screeningDate)} at
        <strong> {screening.screeningTime.slice(0, 5)}</strong>
      </li>
    </Link>
  );
};

export default ScreeningTile;
