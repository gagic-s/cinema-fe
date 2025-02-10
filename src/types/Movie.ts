import Screening from "./Screenings";

interface Movie {
  movie_id: string;
  name: string;
  originalName: string;
  posterImage: string;
  createdAt: string;
  updatedAt: string;
  duration: number;
  genres: string[];
  screenings: Screening[];
}

export default Movie;
