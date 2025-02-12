import { Link } from "react-router-dom";
import Screening from "../../../types/Screenings";
import { dateFormatter } from "../../../util/dateTimeFormater";
import styles from "./ScreeningTile.module.css";

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
