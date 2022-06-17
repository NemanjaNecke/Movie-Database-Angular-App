

import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './tvshows/details/details.component';
import { AllSearchResultsComponent } from './search-results/search-results/search-results.component';

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
    path: 'tv-shows',
    loadChildren: () => import('./tvshows/tvshows/tvshows.module').then((m)=>m.TvshowsModule)
  },
  {
    path: 'tv-shows/:id',
    component: DetailsComponent
  },
 {
  path: 'search-results/:query', component: AllSearchResultsComponent
 },
  { 
    path: 'person/:id', loadChildren: () => import('./person/person.module').then(m => m.PersonModule) 
},
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
