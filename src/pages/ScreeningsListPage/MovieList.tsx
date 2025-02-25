 
import { Link } from "react-router-dom";
import MovieCard from "../../components/movies/MovieCard/MovieCard";

import styles from "./MovieList.module.css";
import { useMovies } from "../../context/MovieContext/MovieContext";
import { useAuth } from "../../context/AuthContext/AuthContext";

const MovieList = () => {
  const { filteredMovies } = useMovies();
  const { user } = useAuth();
  return (
    <div>
     {user?.isAdmin && <Link to={"/create-movie"}>
        <button className={styles.createMovieButton}>Add movie</button>
      </Link>}
      <ul className={styles.movieListContainer}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.movie_id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
