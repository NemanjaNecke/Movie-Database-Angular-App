import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


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
  
  imgPath = 'http://image.tmdb.org/t/p/w1280/';
  @Input() items: any[] = [] ;
  currentIndex: number = 0;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = ++this.currentIndex % this.items.length;
    }, 4000);
  }
}
