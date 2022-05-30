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
  genreId: string = '';
  currentPage = 1;
  totalPages = 0;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }


  ngOnInit(): void {
  this.route.params.pipe(take(1)).subscribe((genreId) => {
    this.getMoviesByGenre(genreId['genreId']);
    this.genreId = genreId['genreId']
  })
  }

  getNextpage(){
    this.currentPage++;

    this.moviesService.getGenreNextPage(this.currentPage, this.genreId).subscribe((response: MovieDto) => {
  
        this.genres = [];
      this.genres = [...response.results]
    
   });
  }
  
  getPreviousPage() {
    this.currentPage--;
  
    this.moviesService. getGenreNextPage(this.currentPage, this.genreId).subscribe((response: MovieDto) => {

      this.genres = [];
      this.genres = [...response.results]
  
   });
}

goToPage(event: number){
  
  this.moviesService. getGenreNextPage(event, this.genreId).subscribe((response: MovieDto) => {
  
      this.currentPage = event;
      this.genres = [];
    this.genres = [...response.results]
 });
}
getMoviesByGenre(id: string) {
  this.moviesService.getMoviesByGenre(id).subscribe((data) => {
    this.genres = data.results;
    this.totalPages = data.total_pages
  })
}

}
