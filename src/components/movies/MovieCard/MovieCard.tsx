/* eslint-disable @typescript-eslint/no-explicit-any */

import Screening from "../../../types/Screenings";
import image from "../../../assets/movie.jpg";
import styles from "./MovieCard.module.css";
import ScreeningTile from "../ScreeningTile/ScreeningTile";

interface MovieCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.movieCardContainer}>
      <div className={styles.poster}>
        <img
          src={image} //TODO: add image when ready on BE
          alt={movie.name}
        />
      </div>

      <h2>{movie.name}</h2>
      {movie.genres.length > 0 &&
        movie.genres.map((genre: any) => (
          <strong className={styles.genreTile} key={genre}>
            {" "}
            {genre}{" "}
          </strong>
        ))}

      {movie.screenings && movie.screenings.length > 0 ? (
        <ul>
          {movie.screenings.map((screening: Screening) => (
            <ScreeningTile key={screening.id} screening={screening} />
          ))}
        </ul>
      ) : (
        <p>No screenings available :( </p>
      )}
    </div>
  );
};

export default MovieCard;
