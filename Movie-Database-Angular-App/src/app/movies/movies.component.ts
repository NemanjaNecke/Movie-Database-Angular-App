import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  topRatedMovies: any[] = [];
  latestMovies: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopMovies().subscribe((response: any) => {
      this.movies = response.results;
   });

   this.moviesService.getTopMovies().subscribe((response: any) => {
     this.topRatedMovies = response.results
   });

   this.moviesService.getLatestMovies().subscribe((response: any) => {
    this.latestMovies = response.results;
   });

  }

}
