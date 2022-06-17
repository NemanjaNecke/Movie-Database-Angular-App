import { Tvshow } from './../../tvshow';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-genreshowsview',
  templateUrl: './genreshowsview.component.html',
  styleUrls: ['./genreshowsview.component.scss']
})
export class GenreshowsviewComponent implements OnInit {
  imgPath = 'http://image.tmdb.org/t/p/w780/';
  values!: number;
  @Input() cards: Tvshow[] = [];
  @Input() topRated: Tvshow[] =[];
  @Input() upcoming: Tvshow[] = [];
  @Input() currPage!: number;
  @Input() totPages!: number;
  @Output() goTo: EventEmitter<string> = new EventEmitter();
  @Output() currPageChange: EventEmitter<any> = new EventEmitter();
  @Output() previous = new EventEmitter<string>();
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
