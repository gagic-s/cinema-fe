import { Link } from "react-router-dom";
import styles from "./HomeButton.module.css"; // Assuming you use CSS Modules

const HomeButton = () => (
  <Link to="/" aria-label="Go to homepage">
    <div className={styles.homeButton}></div>
  </Link>
);

export default HomeButton;
