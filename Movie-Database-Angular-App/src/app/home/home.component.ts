import { MoviesService } from './../movies/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any = [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
   this.moviesService.getUpcMovies().subscribe((response) => {
      this.movies = response.results;
   console.log(this.movies);
   });

  }

}
