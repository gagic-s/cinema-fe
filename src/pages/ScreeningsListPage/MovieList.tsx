import { useState, useEffect } from "react";
import { fetchMovies } from "../../services/movies/movie-service";
import Movie from "../../types/Movie";
import MovieCard from "../../components/movies/MovieCard/MovieCard";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]); // State to store the fetched movies
  const [loading, setLoading] = useState(false); // State to track loading

  // Effect to fetch movies when the component mounts
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const data = await fetchMovies({}); // Fetch movies data from API
        setMovies(data); // Set the fetched movies data in the state
      } catch (error) {
        console.error("Failed to fetch movies", error); // Handle error
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    getMovies();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading message while data is being fetched
      ) : (
        <ul className={styles.movieListContainer}>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
