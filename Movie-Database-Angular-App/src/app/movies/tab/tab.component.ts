import { Component, OnInit } from '@angular/core';
import { Movie, MovieDto } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  latestMovies: Movie[] = [];
  currentPage = 1;
  totalPages = 0;
  constructor(private moviesService: MoviesService) { }


  ngOnInit(): void {
   this.moviesService.getUpcMovies(this.currentPage, 'movie','now_playing').subscribe((response: MovieDto) => {
    this.latestMovies = response.results;
   });
  }
  getNextpage(category:string){
    this.currentPage++;

    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {
 
        this.latestMovies = [];
      this.latestMovies = [...response.results]
   });
  }
  
  getPreviousPage(category: string) {
    this.currentPage--;
    console.log(this.currentPage);
    this.moviesService. getUpcMovies(this.currentPage, 'movie',category).subscribe((response: MovieDto) => {
    
        this.latestMovies = [];
      this.latestMovies = [...response.results]
   });
}

goToPage(event: any){
  let page = event[0];
  let category = event[1];

  this.moviesService. getUpcMovies(page, 'movie',category).subscribe((response: MovieDto) => {
  
      this.currentPage = page;
      this.latestMovies = [];
    this.latestMovies = [...response.results];
 });
}


}
