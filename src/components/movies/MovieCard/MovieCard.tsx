import { Link } from "react-router-dom";

import { Screening } from "../../../types/Screenings";
import Button from "../../shared/Button/Button";
import ScreeningTile from "../ScreeningTile/ScreeningTile";
import styles from "./MovieCard.module.css";
import { GetAllMoviesResponse } from "../../../types/Movie";

type MovieCardProps = {
  movie: GetAllMoviesResponse;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.movieCardContainer}>
      <div className={styles.poster}>
        <img src={movie.posterImage} alt={movie.originalName} />
      </div>

      <h2>{movie.originalName}</h2>
      <div className={styles.genresContainer}>
      {movie.genres.length > 0 &&
        movie.genres.map((genre) => (
          <strong className={styles.genreTile} key={genre}>
            {genre}
          </strong>
        ))}

      </div>

      {movie.screenings && movie.screenings.length > 0 ? (
        <ul>
          {movie.screenings.map((screening: Screening) => (
            <ScreeningTile key={screening.screening_id} screening={screening} />
          ))}
        </ul>
      ) : (
        <div className={styles.addScreeningContainer}>
          <p>No screenings available :( </p>
          <Link to={`/${movie.movie_id}/create-screening`}>
            <Button variant="secondary" text={"Add screening"} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
