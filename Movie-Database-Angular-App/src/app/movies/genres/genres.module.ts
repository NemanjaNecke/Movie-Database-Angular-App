
import { RouterModule } from '@angular/router';
import { GenresComponent } from './genres.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [GenresComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    RouterModule
  ],
  exports: [GenresComponent]
})
export class GenresModule { }
