import { Tvshow, TvShowDto } from './../tvshow';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-tvshowsgenres',
  templateUrl: './tvshowsgenres.component.html',
  styleUrls: ['./tvshowsgenres.component.scss']
})
export class TvshowsgenresComponent implements OnInit {

 
  genres: Tvshow[] = [];
  genreId: string = '';
  currentPage = 1;
  totalPages = 0;
  constructor(private shows: TvshowsService, private route: ActivatedRoute) { }


  ngOnInit(): void {
  this.route.params.pipe(take(1)).subscribe((genreId) => {
    this.getShowsByGenre(genreId['genreId']);
    this.genreId = genreId['genreId']
  })
  }

  getNextpage(){
    this.currentPage++;

    this.shows.getGenreNextPage(this.currentPage, this.genreId).subscribe((response: TvShowDto) => {
  
        this.genres = [];
      this.genres = [...response.results]
    
   });
  }
  
  getPreviousPage() {
    this.currentPage--;
  
    this.shows. getGenreNextPage(this.currentPage, this.genreId).subscribe((response: TvShowDto) => {

      this.genres = [];
      this.genres = [...response.results]
  
   });
}

goToPage(event: number){
  
  this.shows. getGenreNextPage(event, this.genreId).subscribe((response: TvShowDto) => {
  
      this.currentPage = event;
      this.genres = [];
    this.genres = [...response.results]
 });
}
getShowsByGenre(id: string) {
  this.shows.getShowsByGenre(id).subscribe((data) => {
    this.genres = data.results;
    this.totalPages = data.total_pages
  })
}

}
