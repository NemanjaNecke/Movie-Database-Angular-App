
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from './tabs';

import { Movie, MovieDto } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {


  topRatedMovies: Movie[] = [];

  currentPage = 1;
  totalPages = 0;
  constructor(private moviesService: MoviesService) { }


  ngOnInit(): void {
  
   this.moviesService.getUpcMovies(this.currentPage, 'movie','top_rated').subscribe((response: MovieDto) => {
     this.topRatedMovies = response.results
   });

  }
  getNextpage(category:string){
    this.currentPage++;

    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {
  
        this.topRatedMovies = [];
      this.topRatedMovies = [...response.results]
    
   });
  }
  
  getPreviousPage(category: string) {
    this.currentPage--;
    console.log(this.currentPage);
    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {

      this.topRatedMovies = [];
      this.topRatedMovies = [...response.results]
  
   });
}

goToPage(event: any){
  let page = event[0];
  let category = event[1];

  this.moviesService. getUpcMovies(page, 'movie',category).subscribe((response: MovieDto) => {
  
      this.currentPage = page;
      this.topRatedMovies = [];
    this.topRatedMovies = [...response.results]
 });
}

}
