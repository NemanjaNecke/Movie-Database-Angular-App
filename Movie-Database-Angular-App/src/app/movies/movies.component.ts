
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from './catalogue/tabs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent  {
  constructor() {}

  movieTabs: Tab[] = [
    {
      title: 'Popular movies',
      content: ` `,
  route: '/movies/popular',
    },
  {
    title: 'Top Rated Movies',
    content :``,
  route: '/movies/top-rated',
  },
   {
     title: 'Upcoming movies',
    content : ``,
    route: '/movies/upcoming',
  
   },
   {
     title: 'Movies By Genres',
     content:``,
     route: '/movies/genres'
   },
   {
     title: 'Search Movies',
     content:``,
     route: '/movies/search'
   }
  ] 
}
