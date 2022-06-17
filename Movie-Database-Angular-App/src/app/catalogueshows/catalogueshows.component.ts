import { Tvshow, TvShowDto } from './../tvshows/tvshow';
import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../tvshows/tvshows.service';

@Component({
  selector: 'app-catalogueshows',
  templateUrl: './catalogueshows.component.html',
  styleUrls: ['./catalogueshows.component.scss']
})
export class CatalogueshowsComponent implements OnInit {


  latestShows: Tvshow[] = [];

  currentPage = 1;
  totalPages = 0;
  constructor(private shows: TvshowsService) { }


  ngOnInit(): void {
  
   this.shows.getUpcShows(this.currentPage, 'tv','on_the_air').subscribe((response: TvShowDto) => {
     this.latestShows = response.results;
     this.totalPages = response.total_pages;
   });

  }
  getNextpage(category:string){
    this.currentPage++;

    this.shows. getUpcShows(this.currentPage, 'tv',category).subscribe((response: TvShowDto) => {
  
        this.latestShows = [];
      this.latestShows = [...response.results];
    
   });
  }
  
  getPreviousPage(category: string) {
    this.currentPage--;

    this.shows. getUpcShows(this.currentPage, 'tv',category).subscribe((response: TvShowDto) => {

      this.latestShows = [];
      this.latestShows = [...response.results];
  
   });
}

goToPage(event: any){
  let page = event[0];
  let category = event[1];

  this.shows. getUpcShows(page, 'tv',category).subscribe((response: TvShowDto) => {
  
      this.currentPage = page;
      this.latestShows = [];
    this.latestShows = [...response.results];
 });
}

}
