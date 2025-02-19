import React, { createContext, useContext, useState, useEffect } from "react";
import { GetAllMoviesResponse } from "../types/Movie";
import { getAllMovies } from "../services/movies/movie-service";

interface MovieContextType {
  movies: GetAllMoviesResponse[];
  filteredMovies: GetAllMoviesResponse[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  loading: boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [movies, setMovies] = useState<GetAllMoviesResponse[]>([]);
  const [filteredMovies, setFilteredMovies] =
    useState<GetAllMoviesResponse[]>(movies);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch movies (mocked or from API)
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const data = await getAllMovies({});
        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  // Filter movies based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMovies(movies);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = movies.filter((movie) =>
        movie.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

  return (
    <MovieContext.Provider
      value={{ movies, loading, filteredMovies, searchQuery, setSearchQuery }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
};
