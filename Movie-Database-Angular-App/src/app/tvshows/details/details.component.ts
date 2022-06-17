import { TVShowCredits, Tvshow, TVShowImages, ShowsVideo } from './../tvshow';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

import { TvshowsService } from '../tvshows.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  show: Tvshow | null = null;
  showVideos: ShowsVideo[] = []
  showImages!: TVShowImages;
  imgPath = 'http://image.tmdb.org/t/p/w1280/';
  mybreakpoint!: number;
  showCredits!: TVShowCredits;


  constructor(private route: ActivatedRoute, private showsService: TvshowsService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.getShow(id);
      this.getShowVideos(id);
      this.getShowImages(id);
      this.getShowCredits(id);
    })
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 12;

  }

  getShow(id: string){
    this.showsService.getShows(id).subscribe((showsData) => {
      this.show = showsData;
     
    })
  }

  getShowVideos(id: string) {
    this.showsService.getShowsVideos(id).subscribe((showVideosData) => {
      this.showVideos = showVideosData.results;
      
    })
  }

  getShowImages(id:string) {
    this.showsService.getShowsImages(id).subscribe((showImages) => {
      this.showImages = showImages;
    })
  }

  getShowCredits(id:string){
    this.showsService.getShowsCredits(id).subscribe((creditsData) => {
      this.showCredits = creditsData;
    })
  }
  
}
