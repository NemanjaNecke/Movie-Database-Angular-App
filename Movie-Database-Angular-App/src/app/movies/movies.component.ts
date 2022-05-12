import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movie, MovieDto } from './movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  popular: Movie[] = [];
  topRatedMovies: Movie[] = [];
  latestMovies: Movie[] = [];
  currentPage = 1;
  totalPages = 0;
  constructor(private moviesService: MoviesService) { }


  ngOnInit(): void {
    this.moviesService.getUpcMovies(this.currentPage, 'movie','popular').subscribe((response: MovieDto) => {
      this.popular = response.results;
      this.totalPages = response.total_pages;
   });

   this.moviesService.getUpcMovies(this.currentPage, 'movie','top_rated').subscribe((response: MovieDto) => {
     this.topRatedMovies = response.results
   });

   this.moviesService.getUpcMovies(this.currentPage, 'movie','now_playing').subscribe((response: MovieDto) => {
    this.latestMovies = response.results;
   });
  }
  getNextpage(category:string){
    this.currentPage++;

    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {
      if(category == 'popular')
      {
        this.popular = [];
      this.popular = [...response.results]
      }
      else if(category == 'top_rated'){
        this.topRatedMovies = [];
      this.topRatedMovies = [...response.results]
      }
      else if(category == 'now_playing'){
        this.latestMovies = [];
      this.latestMovies = [...response.results]
      }
   });
  }
  
  getPreviousPage(category: string) {
    this.currentPage--;
    console.log(this.currentPage);
    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {
      if(category == 'popular')
      {
        this.popular = [];
      this.popular = [...response.results]
      }
      else if(category == 'top_rated'){
        this.topRatedMovies = [];
      this.topRatedMovies = [...response.results]
      }
      else if(category == 'now_playing'){
        this.latestMovies = [];
      this.latestMovies = [...response.results]
      }
   });
}

goToPage(event: any){
  let page = event[0];
  let category = event[1];

  this.moviesService. getUpcMovies(page, 'movie',category).subscribe((response: MovieDto) => {
    if(category == 'popular')
    { 
      this.currentPage = page;
      this.popular = [];
    this.popular = [...response.results]
    }
    else if(category == 'top_rated'){
      this.currentPage = page;
      this.topRatedMovies = [];
    this.topRatedMovies = [...response.results]
    }
    else if(category == 'now_playing'){
      this.currentPage = page;
      this.latestMovies = [];
    this.latestMovies = [...response.results]
    }
 });
}
}
