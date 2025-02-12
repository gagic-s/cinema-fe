import { useState } from "react";
import styles from "./SeatChart.module.css";

type SeatStatus = "available" | "taken" | "selected";

interface SeatChartProps {
  rows: number;
  cols: number;
  takenSeats?: Set<string>; // Set of taken seat IDs (e.g., "2-3")
}

const SeatChart: React.FC<SeatChartProps> = ({
  rows,
  cols,
  takenSeats = new Set(),
}) => {
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

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

  return (
    <div className={styles.seatChart}>
      <div className={styles.screen}> screen</div>

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
  );
};

export default SeatChart;
