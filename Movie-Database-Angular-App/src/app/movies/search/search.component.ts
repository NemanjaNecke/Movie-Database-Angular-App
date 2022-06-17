import { Movie, MovieDto } from './../movie';
import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value: string = '';
  searchResults: Movie[] = [];
  currentPage = 1;
  totalPages = 0;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }
  searchMovies(search: string) {
    this.moviesService.getSearchMovies(search, 1).subscribe((searchResults) => {
      this.searchResults = searchResults.results;
      this.totalPages = searchResults.total_pages;
    })
  }


  getNextpage(){
    this.currentPage++;

    this.moviesService.getSearchMovies(this.value, this.currentPage).subscribe((response: MovieDto) => {
  
        this.searchResults = [];
      this.searchResults = [...response.results]
    
   });
  }
  
  getPreviousPage() {
    this.currentPage--;
  
    this.moviesService. getSearchMovies(this.value, this.currentPage).subscribe((response: MovieDto) => {

      this.searchResults = [];
      this.searchResults = [...response.results]
  
   });
}

goToPage(event: number){
  
  this.moviesService. getSearchMovies(this.value, event).subscribe((response: MovieDto) => {
  
      this.currentPage = event;
      this.searchResults = [];
    this.searchResults = [...response.results]
 });
}
}
