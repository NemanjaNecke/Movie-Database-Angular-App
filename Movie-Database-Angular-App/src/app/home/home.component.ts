import { MoviesService } from './../movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];  
  tvShows: Movie[] = [];
  topRatedMovies: Movie[] = [];
  latestMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
   this.moviesService.getUpcMovies(1, 'movie','upcoming').subscribe((response) => {
      this.movies = response.results;

   });
    this.moviesService.getUpcMovies(1, 'tv','popular').subscribe((response: any) => {
      this.tvShows = response.results;
   });

   this.moviesService.getUpcMovies(1, 'movie','top_rated').subscribe((response: any) => {
     this.topRatedMovies = response.results
   });

   this.moviesService.getUpcMovies(1, 'movie','now_playing').subscribe((response: any) => {
    this.latestMovies = response.results;
   });
  }

}
