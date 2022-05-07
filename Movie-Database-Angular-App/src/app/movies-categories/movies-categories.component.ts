import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-movies-categories',
  templateUrl: './movies-categories.component.html',
  styleUrls: ['./movies-categories.component.scss']
})
export class MoviesCategoriesComponent {
  @Input() films: any[] = [];
  imgPath = 'http://image.tmdb.org/t/p/w185/';


  constructor(private breakpointObserver: BreakpointObserver) {}
}
