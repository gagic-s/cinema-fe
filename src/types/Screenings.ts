interface Screening {
  screening_id: string;
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
}

export default Screening;
