import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {MatInputModule} from '@angular/material/input';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    RouterModule,
    MatSnackBarModule
  ]
})
export class SearchModule { }
