import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/movies/catalogue/tabs';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tvTabs: Tab[] = [
  
  {
    title: 'Top Rated Tv Shows',
    content :``,
  route: '/tv-shows/top-rated',
  },
    {
      title: 'Popular shows',
      content: ` `,
  route: '/tv-shows/popular',
    },
   {
     title: 'Latest Tv Shows',
    content : ``,
    route: '/tv-shows/latest',
  
   },
   {
     title: 'Tv Shows By Genres',
     content:``,
     route: '/tv-shows/genres'
   },
   {
     title: 'Search Tv Shows',
     content:``,
     route: '/tv-shows/search'
   }
  ] 
}
