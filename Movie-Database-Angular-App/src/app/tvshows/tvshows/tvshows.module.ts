import { MatTabsModule } from '@angular/material/tabs';
import { TvshowsComponent } from './tvshows.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvshowsRoutingModule } from './tvshows-routing.module';


@NgModule({
  declarations: [TvshowsComponent],
  imports: [
    CommonModule,
    TvshowsRoutingModule,
    MatTabsModule
  ]
})
export class TvshowsModule { }
