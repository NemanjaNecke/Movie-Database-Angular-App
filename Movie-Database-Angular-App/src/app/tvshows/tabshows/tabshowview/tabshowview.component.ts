import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tvshow } from '../../tvshow';

@Component({
  selector: 'app-tabshowview',
  templateUrl: './tabshowview.component.html',
  styleUrls: ['./tabshowview.component.scss']
})
export class TabshowviewComponent implements OnInit {

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
