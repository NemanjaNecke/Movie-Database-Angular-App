import { Component, Input, OnInit } from '@angular/core';
import { MovieCredits } from 'src/app/movies/movie';

@Component({
  selector: 'app-credits-show',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsShowsComponent implements OnInit {
  @Input() actors!: MovieCredits; 
  imgPath = 'http://image.tmdb.org/t/p/w500/';
  constructor() { }

  ngOnInit(): void {
  }

}
