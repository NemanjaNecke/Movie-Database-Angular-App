import { Tvshow } from './../../tvshow';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab1-view',
  templateUrl: './tab1-view.component.html',
  styleUrls: ['./tab1-view.component.scss']
})
export class Tab1ViewComponent implements OnInit {
  imgPath = 'http://image.tmdb.org/t/p/w780/';
  values!: number;
  @Input() upcoming: Tvshow[] = [];
 @Input() currPage!: number;
  @Input() totPages!: number;
  @Output() goTo: EventEmitter<string> = new EventEmitter();
  @Output() currPageChange: EventEmitter<any> = new EventEmitter();
  @Output() previous = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  } 
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
