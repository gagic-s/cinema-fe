import { Screening } from "./Screenings";

export type Movie = {
  movie_id: string;
  name: string;
  originalName: string;
  posterImage: string;
  createdAt: string;
  updatedAt: string;
  duration: number;
  genres: string[];
  screenings: Screening[];
};

export type CreateMovieRequest = {
  name: string;
  originalName: string;
  duration: number;
  genreNames: string[];
  poster: File | null;
};

export type CreateMovieResponse = {
  movie_id: string;
  name: string;
  originalName: string;
  duration: number;
  posterImage: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Genre = {
  name: string;
};
export type GetAllMoviesResponse = {
  createdAt: string;
  duration: string;
  movie_id: string;
  name: string;
  originalName: string;
  posterImage: string;
  updatedAt: string;
  screenings: Screening[];
  genres: Genre[];
};
