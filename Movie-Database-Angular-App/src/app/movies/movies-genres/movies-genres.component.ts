import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie, MovieDto } from '../movie';
import { MoviesService } from '../movies.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies-genres',
  templateUrl: './movies-genres.component.html',
  styleUrls: ['./movies-genres.component.scss']
})
export class MoviesGenresComponent implements OnInit {


  genres: Movie[] = [];

  currentPage = 1;
  totalPages = 0;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }


  ngOnInit(): void {
  this.route.params.pipe(take(1)).subscribe((genreId) => {
    this.getMoviesByGenre(genreId['genreId']);
  })
  

  }
  getNextpage(category:string){
    this.currentPage++;

    this.moviesService.getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {
  
        this.genres = [];
      this.genres = [...response.results]
    
   });
  }
  
  getPreviousPage(category: string) {
    this.currentPage--;
    console.log(this.currentPage);
    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {

      this.genres = [];
      this.genres = [...response.results]
  
   });
}

goToPage(event: any){
  let page = event[0];
  let category = event[1];

  this.moviesService. getUpcMovies(page, 'movie',category).subscribe((response: MovieDto) => {
  
      this.currentPage = page;
      this.genres = [];
    this.genres = [...response.results]
 });
}
getMoviesByGenre(id: string) {
  this.moviesService.getMoviesByGenre(id).subscribe((data) => {
    this.genres = data.results;
    console.log(data.results)
  })
}

}
