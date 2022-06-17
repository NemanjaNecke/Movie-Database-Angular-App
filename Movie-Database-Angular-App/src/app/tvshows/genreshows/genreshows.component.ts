import { TvshowsService } from './../tvshows.service';
import { TvGenre } from './../tvshow';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genreshows',
  templateUrl: './genreshows.component.html',
  styleUrls: ['./genreshows.component.scss']
})
export class GenreshowsComponent implements OnInit {

  genres: TvGenre[] = [];
  constructor(private shows: TvshowsService) { }

  ngOnInit(): void {
    this.shows.getShowsGenres().subscribe((genreData) => {
      this.genres = genreData.genres;
    })
  }

  pageLoad() {
    setInterval(() => {window.location.reload()}, 500)
  }

}
