import { Tvshow } from './../tvshows/tvshow';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    trigger('fade',[
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1s')]),

    ])
  ]
})
export class ItemComponent implements OnInit {
  innerWidth!: any;
  row!:any;
  @Input() isBanner: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize() {
  //for testing responsivnes
  this.innerWidth = window.innerWidth;
} 
  imgPath = 'http://image.tmdb.org/t/p/w1280/';
  @Input() items: Movie[] = [] ;
  @Input() shows: Tvshow [] = [];
  currentIndex: number = 0;

  constructor() {}

  getRowHeight(){
    if(this.innerWidth > 600) {
      this.row = '561px';
    } else {
      this.row = '250px';
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if(!this.isBanner){
       setInterval(() => {
      this.currentIndex = ++this.currentIndex % this.items.length;
    }, 4599);
    }
   
    this.getRowHeight();
  }

}
