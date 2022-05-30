import { RouterModule } from '@angular/router';
import { Tab1Component } from './tab1.component';
import { Tab1ViewComponent } from './tab1-view/tab1-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    Tab1Component,
    Tab1ViewComponent
  ],
  imports: [
    CommonModule, 
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [

]
})
export class Tab1Module { }
