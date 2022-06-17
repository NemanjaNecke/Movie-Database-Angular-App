import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies/movie';
import { Tvshow } from '../../tvshow';

@Component({
  selector: 'app-item-show',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemShowComponent implements OnInit {

  innerWidth!: any;
  row!:any;
  @Input() isBanner: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize() {
  //for testing responsivnes
  this.innerWidth = window.innerWidth;
} 
  imgPath = 'http://image.tmdb.org/t/p/w1280/';
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
   
    this.getRowHeight();
  }
}
