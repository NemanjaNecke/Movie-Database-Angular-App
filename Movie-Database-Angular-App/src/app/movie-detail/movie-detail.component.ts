import { MoviesService } from './../movies/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie, MovieCredits, MovieImages, MovieVideo } from '../movies/movie';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie | null = null;
  movieVideos: MovieVideo[] = []
  movieImages!: MovieImages;
  imgPath = 'http://image.tmdb.org/t/p/w1280/';
  mybreakpoint!: number;
  movieCredits!: MovieCredits;


  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    })
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 12;

  }

  getMovie(id: string){
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
     
    })
  }

  getMovieVideos(id: string) {
    this.movieService.geMoviesVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData.results;
      
    })
  }

  getMovieImages(id:string) {
    this.movieService.getMovieImages(id).subscribe((movieImages) => {
      this.movieImages = movieImages;
    })
  }

  getMovieCredits(id:string){
    this.movieService.getMovieCredits(id).subscribe((creditsData) => {
      this.movieCredits = creditsData;
    })
  }
  
}
