import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';


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

  @HostListener('window:resize', ['$event'])
onResize() {
  this.innerWidth = window.innerWidth;
}
  imgPath = 'http://image.tmdb.org/t/p/w1280/';
  @Input() items: any[] = [] ;
  currentIndex: number = 0;

  constructor() {}

  getRowHeight(){
    if(this.innerWidth > 600) {
      this.row = '561px';
    } else {
      this.row = '900px';
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    setInterval(() => {
      this.currentIndex = ++this.currentIndex % this.items.length;
    }, 4599);
    this.getRowHeight();
  }

}
