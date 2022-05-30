import { RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CatalogueViewComponent } from './catalogue-view/catalogue-view.component';


@NgModule({
  declarations: [
    CatalogueComponent,
    CatalogueViewComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: []
})
export class CatalogueModule { }
