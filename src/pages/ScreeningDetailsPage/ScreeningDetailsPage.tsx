import { useParams } from "react-router-dom";
import styles from "./ScreeningDetails.module.css";

const ScreeningDetailsPage = () => {
  const { id } = useParams();

  return <div className={styles.container}>Details for screening ID: {id}</div>;
};

export default ScreeningDetailsPage;
