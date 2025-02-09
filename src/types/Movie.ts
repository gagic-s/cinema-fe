import Genre from "./Genre";
import Screening from "./Screenings";

interface Movie {
  movie_id: string;
  name: string;
  originalName: string;
  posterImage: string;
  createdAt: string;
  updatedAt: string;
  duration: number;
  Genres: Genre[];
  Screenings: Screening[];
}

export default Movie;
