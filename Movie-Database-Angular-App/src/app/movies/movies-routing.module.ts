import { GenresComponent } from './genres/genres.component';
import { MoviesGenresComponent } from './movies-genres/movies-genres.component';
import { MoviesComponent } from './movies.component';
import { TabComponent } from './tab/tab.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { Tab1Component } from './tab2/tab1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MoviesComponent, children: 
  [
    {
      path:'', component: Tab1Component
    },
  {
    path: 'popular', component: Tab1Component
  },
  {
    path: 'top-rated', component: CatalogueComponent
  }, 
  {
    path: 'upcoming', component: TabComponent
  },
  {
    path: 'genres', component: GenresComponent
  },
  {
    path: 'genres/:genreId',
    component: MoviesGenresComponent
  },
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
