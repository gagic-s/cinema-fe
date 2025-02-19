export type Screening = {
  screening_id?: string;
  screeningDate: string;
  screeningTime: string;
  ticketPrice: string;
  screeningRows?: number;
  screeningColumns?: number;
  movie?: {
    movie_id?: string;
    name: string;
    posterImage?: string;
    duration?: string;
  };
  tickets?: string[];
};

export type AddScreeningRequest = {
  movie_id: string;
  screeningDate: string;
  screeningTime: string;
  ticketPrice: number;
  screeningRows: number;
  screeningColumns: number;
};

export type AddScreeningResponse = {
  screening_id: string;
  movie_id: string;
  screeningDate: string;
  screeningTime: string;
  ticketPrice: number;
  screeningRows: number;
  screeningColumns: number;
  createdAt: Date;
  updatedAt: Date;
};

type GetOneScreeningMovieResponse = {
  movie_id: string;
  name: string;
  duration: number;
  posterImage: string;
};

export type GetOneScreeningResponse = {
  screening_id: string;
  movie_id: string;
  screeningDate: string;
  screeningTime: string;
  ticketPrice: number;
  screeningRows: number;
  screeningColumns: number;
  createdAt: Date;
  updatedAt: Date;
  tickets: string[];
  movie: GetOneScreeningMovieResponse;
};
