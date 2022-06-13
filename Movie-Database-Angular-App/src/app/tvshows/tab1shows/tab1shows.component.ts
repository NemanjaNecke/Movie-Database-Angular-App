import { MoviesService } from './../../movies/movies.service';

import { Component, OnInit } from '@angular/core';

import { Tvshow, TvShowDto } from '../tvshow';


@Component({
  selector: 'app-tab1shows',
  templateUrl: './tab1shows.component.html',
  styleUrls: ['./tab1shows.component.scss']
})
export class Tab1ShowsComponent implements OnInit {

  latestShows: Tvshow[] = [];
  currentPage = 1;
  totalPages = 0;
  constructor(private tvs: MoviesService) { }


  ngOnInit(): void {
   this.tvs.getUpcShows(this.currentPage, 'tv','popular').subscribe((response: TvShowDto) => {
    this.latestShows = response.results;
    this.totalPages = response.total_pages
   });
  }
  getNextpage(category:string){
    this.currentPage++;

    this.tvs. getUpcShows(this.currentPage, 'tv',category).subscribe((response: TvShowDto) => {
 
        this.latestShows = [];
      this.latestShows = [...response.results]
   });
  }
  
  getPreviousPage(category: string) {
    this.currentPage--;
    console.log(this.currentPage);
    this.tvs. getUpcShows(this.currentPage, 'tv',category).subscribe((response: TvShowDto) => {
    
        this.latestShows = [];
      this.latestShows = [...response.results]
   });
}

goToPage(event: any){
  let page = event[0];
  let category = event[1];

  this.tvs. getUpcShows(page, 'tv',category).subscribe((response: TvShowDto) => {
  
      this.currentPage = page;
      this.latestShows = [];
    this.latestShows = [...response.results];
 });
}
}
