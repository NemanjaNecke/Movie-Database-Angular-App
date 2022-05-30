import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit {

  imgPath = 'http://image.tmdb.org/t/p/w780/';
  values!: number;
  @Input() upcoming: Movie[] = [];
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
