import { TabshowsComponent } from './../tabshows/tabshows.component';
import { CatalogueshowsComponent } from './../../catalogueshows/catalogueshows.component';
import { SearchgenresComponent } from './../searchgenres/searchgenres.component';
import { TvshowsgenresComponent } from './../tvshowsgenres/tvshowsgenres.component';
import { GenreshowsComponent } from './../genreshows/genreshows.component';

import { Tab1ShowsComponent } from './../tab1shows/tab1shows.component';
import { TvshowsComponent } from './tvshows.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TvshowsComponent, children: 
  [
    {
      path:'', component: Tab1ShowsComponent
    },
  {
    path: 'top-rated', component: Tab1ShowsComponent
  },
  { 
    path: 'latest', component: TabshowsComponent 
  }, 
  {
    path: 'popular', component: CatalogueshowsComponent
  },
  {
    path: 'genres', component: GenreshowsComponent
  },
  {
    path: 'genres/:genreId',
    component: TvshowsgenresComponent
  },

  {
    path: 'search',
    component: SearchgenresComponent
  },
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowsRoutingModule { }
