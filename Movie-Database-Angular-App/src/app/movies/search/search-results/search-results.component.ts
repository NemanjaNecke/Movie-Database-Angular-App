import { Movie } from './../../movie';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  imgPath = 'http://image.tmdb.org/t/p/w780/';
  @Input() results: Movie[] = [];
  @Input() currPage!: number;
  @Input() totPages!: number;
  @Output() goTo: EventEmitter<string> = new EventEmitter();
  @Output() currPageChange: EventEmitter<any> = new EventEmitter();
  @Output() previous = new EventEmitter<string>();
  values!: number;
  constructor() { }

  ngOnInit(): void {
  }

goToPage() {
  this.goTo.emit();
}

previousPage() {
  this.previous.emit();

}

public navigateToSection(section: string) {
  window.location.hash = '';
  window.location.hash = section;
}
getValue(event: number) {

this.currPageChange.emit(event);
}

onKey(value: string){
this.values = parseInt(value);
}
}
