/* eslint-disable @typescript-eslint/no-explicit-any */
import MovieCard from "../../components/movies/MovieCard/MovieCard";
import { useMovies } from "../../context/MovieContext";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const { filteredMovies } = useMovies();
  return (
    <div>
      <ul className={styles.movieListContainer}>
        {filteredMovies.map((movie: any) => (
          <MovieCard key={movie.movie_id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
