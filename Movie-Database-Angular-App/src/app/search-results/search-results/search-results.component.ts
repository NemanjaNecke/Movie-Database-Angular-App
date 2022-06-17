import { SearchDto } from './../search';
import { MultiSearchService } from './../multi-search.service';
import { Tvshow } from './../../tvshows/tvshow';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies/movie';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';


export interface Person {
  name: string;
  img: string;
}

@Component({
  selector: 'app-allsearch-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class AllSearchResultsComponent implements OnInit {
  value!: string;
  searchResults!:  [] ;
  currentPage = 1;
  totalPages = 0;
  constructor(private search: MultiSearchService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.search.onMessage().subscribe((value) => {
      this.value = value.text
      
    })
    this.route.params.pipe(take(1)).subscribe((query) => {
      this.getAll(query['query']);
      //this.value = query
    })

    
  }
getAll(value: string){
  this.search.searchAll(value,1).subscribe((searchResults) => {
      this.searchResults = searchResults.results;
      this.totalPages = searchResults.total_pages;
    })
}


getNextpage(){
  this.currentPage++;

  this.search.searchAll(this.value, this.currentPage).subscribe((response: SearchDto) => {

      this.searchResults = [];
    this.searchResults = response.results;
  
 });
}
//napraviti person component module r
getPreviousPage() {
  this.currentPage--;

  this.search.searchAll(this.value, this.currentPage).subscribe((response: SearchDto) => {

    this.searchResults = [];
    this.searchResults = response.results;

 });
}

goToPage(event: number){

this.search.searchAll(this.value, event).subscribe((response: SearchDto) => {

    this.currentPage = event;
    this.searchResults = [];
  this.searchResults = response.results
});
}
}
