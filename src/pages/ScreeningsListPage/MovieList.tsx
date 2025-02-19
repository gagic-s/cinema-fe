/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import MovieCard from "../../components/movies/MovieCard/MovieCard";
import { useMovies } from "../../context/MovieContext";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const { filteredMovies } = useMovies();
  return (
    <div>
      <Link to={"/create-movie"}>
        <button className={styles.createMovieButton}>Add movie</button>
      </Link>
      <ul className={styles.movieListContainer}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.movie_id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
