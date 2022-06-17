

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
  genres: TvGenre[];
}

export interface ShowsVideo {
  site: string;
  key: string;
}

export interface TvShowDto {
    page: number,
    results: Tvshow[],
    total_results: number,
    total_pages: number;
}

export interface ShowsVideoDto {
  id: number;
  results: ShowsVideo[];
}


export interface TVShowImages {
  id: number;
  backdrops: {
    file_path: string;
  }[];
}

export interface TVShowCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export interface TvGenreDto {
  genres: TvGenre[];
}

export interface TvGenre {
  name: string;
  id: number;
}