import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies/movies.service';
import { Tvshow, TvShowDto } from '../tvshow';

@Component({
  selector: 'app-tabshows',
  templateUrl: './tabshows.component.html',
  styleUrls: ['./tabshows.component.scss']
})
export class TabshowsComponent implements OnInit {

  popularShows: Tvshow[] = [];
  currentPage = 1;
  totalPages = 0;
  constructor(private tvs: MoviesService) { }


  ngOnInit(): void {
   this.tvs.getUpcShows(this.currentPage, 'tv','top_rated').subscribe((response: TvShowDto) => {
    this.popularShows = response.results;
    this.totalPages = response.total_pages
   });
  }
  getNextpage(category:string){
    this.currentPage++;

    this.tvs. getUpcShows(this.currentPage, 'tv',category).subscribe((response: TvShowDto) => {
 
        this.popularShows = [];
      this.popularShows = [...response.results]
   });
  }
  
  getPreviousPage(category: string) {
    this.currentPage--;
    console.log(this.currentPage);
    this.tvs. getUpcShows(this.currentPage, 'tv',category).subscribe((response: TvShowDto) => {
    
        this.popularShows = [];
      this.popularShows = [...response.results]
   });
}

goToPage(event: any){
  let page = event[0];
  let category = event[1];

  this.tvs. getUpcShows(page, 'tv',category).subscribe((response: TvShowDto) => {
  
      this.currentPage = page;
      this.popularShows = [];
    this.popularShows = [...response.results];
 });
}
}
