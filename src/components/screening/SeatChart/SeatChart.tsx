import styles from "./SeatChart.module.css";
interface SeatChartProps {
  rows: number;
  cols: number;
  getSeatStatus: (row: number, col: number) => string;
  toggleSeat: (row: number, col: number) => void;
}

const SeatChart: React.FC<SeatChartProps> = ({
  rows,
  cols,
  getSeatStatus,
  toggleSeat,
}) => {
  return (
    <div className={styles.seatChartContainer}>
      <div className={styles.seatChart}>
        <div className={styles.screen}>screen</div>
        {Array.from({ length: rows }).map((_, row) => (
          <div key={row} className={styles.row}>
            {Array.from({ length: cols }).map((_, col) => {
              const status = getSeatStatus(row, col);
              return (
                <div
                  key={`${row}-${col}`}
                  className={`${styles.seat} ${styles[status]}`}
                  onClick={() => toggleSeat(row, col)}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        {" "}
        <div key={1} className={`${styles.seat} ${styles.taken}`} />{" "}
        <strong>taken</strong>
        <div key={2} className={`${styles.seat} ${styles.available}`} />{" "}
        <strong>available</strong>
        <div key={3} className={`${styles.seat} ${styles.selected}`} />{" "}
        <strong>selected</strong>
      </div>
    </div>
  );
};

export default SeatChart;
