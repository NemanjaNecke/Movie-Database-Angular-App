import { Component, Input, OnInit } from '@angular/core';
import { Movie, MovieDto } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {
  popular: Movie[] = [];

  currentPage = 1;
  totalPages = 0;
  constructor(private moviesService: MoviesService) { }


  ngOnInit(): void {
    this.moviesService.getUpcMovies(this.currentPage, 'movie','popular').subscribe((response: MovieDto) => {
      this.popular = response.results;
      this.totalPages = response.total_pages;
   });
  }
  getNextpage(category:string){
    this.currentPage++;

    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {
      this.popular = [];
      this.popular = [...response.results]
   });
  }
  
  getPreviousPage(category: string) {
    this.currentPage--;
    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {
        this.popular = [];
      this.popular = [...response.results]

   });
}

goToPage(event: any){
  let page = event[0];
  let category = event[1];

  this.moviesService. getUpcMovies(page, 'movie',category).subscribe((response: MovieDto) => {
    this.currentPage = page;
    this.popular = [];
    this.popular = [...response.results]

 });
}

}
