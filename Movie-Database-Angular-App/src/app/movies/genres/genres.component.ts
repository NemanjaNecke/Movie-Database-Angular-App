import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from '../movie';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.geMoviesGenres().subscribe((genreData) => {
      this.genres = genreData.genres;
    })
  }

}
