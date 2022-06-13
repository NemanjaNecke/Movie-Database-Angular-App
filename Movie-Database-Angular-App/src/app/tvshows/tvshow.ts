import { Genre } from "../movies/movie";

export interface Tvshow {
    adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
}

export interface TvShowDto {
    page: number,
    results: Tvshow[],
    total_results: number,
    total_pages: number;
}
