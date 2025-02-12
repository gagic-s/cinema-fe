import { useState, useEffect } from "react";
import { fetchMovies } from "../../services/movies/movie-service";
import Movie from "../../types/Movie";
import MovieCard from "../../components/movies/MovieCard/MovieCard";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const data = await fetchMovies({});
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <ul className={styles.movieListContainer}>
        {movies.map((movie) => (
          <MovieCard key={movie.movie_id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
