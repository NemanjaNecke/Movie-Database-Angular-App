import { TvshowsService } from './../tvshows.service';
import { Tvshow, TvShowDto } from './../tvshow';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-searchgenres',
  templateUrl: './searchgenres.component.html',
  styleUrls: ['./searchgenres.component.scss']
})
export class SearchgenresComponent implements OnInit {
  value!: string;
  searchResults: Tvshow[] = [];
  currentPage = 1;
  totalPages = 0;
  constructor(private shows: TvshowsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  searchMovies(search: string) {

    this.shows.getSearchShows(search, 1).subscribe((searchResults) => {
      this.searchResults = searchResults.results;
      this.totalPages = searchResults.total_pages;
    })
  }

  openSnackBar() {
    this._snackBar.open('There are no results for your search term');
  }

  getNextpage(){
    this.currentPage++;

    this.shows.getSearchShows(this.value, this.currentPage).subscribe((response: TvShowDto) => {
  
        this.searchResults = [];
      this.searchResults = response.results;
    
   });
  }
  
  getPreviousPage() {
    this.currentPage--;
  
    this.shows. getSearchShows(this.value, this.currentPage).subscribe((response: TvShowDto) => {

      this.searchResults = [];
      this.searchResults = response.results;
  
   });
}

goToPage(event: number){
  
  this.shows. getSearchShows(this.value, event).subscribe((response: TvShowDto) => {
  
      this.currentPage = event;
      this.searchResults = [];
    this.searchResults = [...response.results]
 });
}
}
