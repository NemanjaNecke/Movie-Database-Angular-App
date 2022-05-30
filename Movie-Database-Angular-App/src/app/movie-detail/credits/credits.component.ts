import { MovieCredits } from './../../movies/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  @Input() actors!: MovieCredits; 
  imgPath = 'http://image.tmdb.org/t/p/w500/';

  constructor() { }

  ngOnInit(): void {
  }

}
