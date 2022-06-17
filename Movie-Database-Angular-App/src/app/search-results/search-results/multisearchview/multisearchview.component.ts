import { Person } from './../search-results.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Movie } from 'src/app/movies/movie';
import { Tvshow } from 'src/app/tvshows/tvshow';

@Component({
  selector: 'app-multisearchview',
  templateUrl: './multisearchview.component.html',
  styleUrls: ['./multisearchview.component.scss']
})
export class MultisearchviewComponent implements OnInit {
  imgPath = 'http://image.tmdb.org/t/p/w500/';
  personImg = 'http://image.tmdb.org/t/p/w500/'
  @Input() searchResults!: any[];
 @Input() currPage!:number;
 @Input() totPages!: number;
 values!: number;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() goTo: EventEmitter<string> = new EventEmitter();
  @Output() currPageChange: EventEmitter<any> = new EventEmitter();
  @Output() previous = new EventEmitter<string>();
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
