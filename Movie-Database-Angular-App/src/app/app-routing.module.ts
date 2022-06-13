import { TvshowsModule } from './tvshows/tvshows/tvshows.module';
import { TvshowsRoutingModule } from './tvshows/tvshows/tvshows-routing.module';
import { GenresComponent } from './movies/genres/genres.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then((m)=>m.MoviesModule)
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: 'tv/:id',
    component: MovieDetailComponent
  },
  {
    path: 'tv-shows',
    loadChildren: () => import('./tvshows/tvshows/tvshows.module').then((m)=>m.TvshowsModule)
  },
  { path: 'tvshows/tabshows', loadChildren: () => import('./tvshows/tabshows/tabshowview/tabshowview.module').then(m => m.TabshowviewModule) },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
