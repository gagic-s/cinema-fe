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
      <img
        src={image} //TODO: add image when ready on BE
        alt={movie.name}
      />
      <h2>{movie.name}</h2>
      {movie.genres.length > 0 && <p>Genres: {movie.genres.join(", ")}</p>}
      {movie.screenings && movie.screenings.length > 0 ? (
        <ul>
          {movie.screenings.map((screening: Screening) => (
            <ScreeningTile screening={screening} />
          ))}
        </ul>
      ) : (
        <p>No screenings available</p>
      )}
    </div>
  );
};

export default MovieCard;
