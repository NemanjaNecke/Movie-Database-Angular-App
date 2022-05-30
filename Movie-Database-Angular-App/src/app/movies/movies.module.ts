import { MoviesComponent } from './movies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import {  RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    RouterModule,
    MatTabsModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }
