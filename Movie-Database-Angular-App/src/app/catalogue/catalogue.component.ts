
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Movie, MovieDto } from '../movies/movie';
 

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent {
  imgPath = 'http://image.tmdb.org/t/p/w780/';
  values!: number;
  @Input() cards: Movie[] = [];
  @Input() topRated: Movie[] =[];
  @Input() upcoming: Movie[] = [];
  @Input() currPage!: number;
  @Input() totPages!: number;
  @Output() goTo: EventEmitter<string> = new EventEmitter();
  @Output() currPageChange: EventEmitter<any> = new EventEmitter();
  @Output() previous = new EventEmitter<string>();
  
  constructor() {}
  

  goToPage(category: string) {
    this.goTo.emit(category);
  }

  previousPage(category: string) {
    this.previous.emit(category);

  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
}
getValue(event: number, category: string) {
  let x = event;
  this.currPageChange.emit([x,category]);
}

onKey(value: string){
  this.values = parseInt(value);
}


}
