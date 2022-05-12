import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { switchMap } from 'rxjs';
import { MovieDto } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3/';
  apiKey = '?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d';
  upcMovies = 'https://api.themoviedb.org/3/movie/upcoming?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d';
  popMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US';
  topRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US';
  latestMovies = 'https://api.themoviedb.org/3/movie/now_playing?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US';
  img = 'https://api.themoviedb.org/3/configuration?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d';
  tvShowsPopular = 'https://api.themoviedb.org/3/tv/popular?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US'
  
  constructor(private http: HttpClient) { }

  getUpcMovies(page:number,type:string,category: string) {
   
    return this.http.get<MovieDto>(this.baseUrl+type+'/'+category+this.apiKey+'&page='+page);
  }

}
