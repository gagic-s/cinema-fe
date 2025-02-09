import Movie from "../../../types/Movie";
import Screening from "../../../types/Screenings";
import image from "../../../assets/movie.jpg";
import styles from "./MovieCard.module.css";
import ScreeningTile from "../ScreeningTile/ScreeningTile";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const genreNames = movie.Genres?.map((genre) => genre.name) || [];

  return (
    <div className={styles.movieCardContainer}>
      <img
        src={image} //TODO: add image when ready on BE
        alt={movie.name}
      />
      <h2>{movie.name}</h2>
      {genreNames.length > 0 && <p>Genres: {genreNames.join(", ")}</p>}
      {movie.Screenings && movie.Screenings.length > 0 ? (
        <ul>
          {movie.Screenings.map((screening: Screening) => (
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
