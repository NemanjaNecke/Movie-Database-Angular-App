import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  upcMovies = 'https://api.themoviedb.org/3/movie/upcoming?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d';
  popMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US&page=1';
  topRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US&page=1';
  latestMovies = 'https://api.themoviedb.org/3/movie/now_playing?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US&page=1';
  img = 'https://api.themoviedb.org/3/configuration?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d';


  constructor(private http: HttpClient) { }

  getUpcMovies() {
    return this.http.get(this.upcMovies);
  }

  getPopMovies() {
    return this.http.get(this.popMovies);
  }

  getTopMovies() {
    return this.http.get(this.topRated);
  }

  getLatestMovies() {
    return this.http.get(this.latestMovies);
  }
}
