import Movie from "../../../types/Movie";
import Screening from "../../../types/Screenings";
import image from "../../../assets/movie.jpg";
import styles from "./MovieCard.module.css";
import ScreeningTile from "../ScreeningTile/ScreeningTile";

interface MovieCardProps {
  movie: Movie;
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
        movie.genres.map((genre) => (
          <strong className={styles.genreTile} key={genre}>
            {" "}
            {genre}{" "}
          </strong>
        ))}

      {movie.screenings && movie.screenings.length > 0 ? (
        <ul>
          {movie.screenings.map((screening: Screening) => (
            <ScreeningTile key={screening.screening_id} screening={screening} />
          ))}
        </ul>
      ) : (
        <p>No screenings available :( </p>
      )}
    </div>
  );
};

export default MovieCard;
