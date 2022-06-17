import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MultisearchviewComponent } from './search-results/multisearchview/multisearchview.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSearchResultsComponent } from './search-results/search-results.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllSearchResultsComponent,
    MultisearchviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    RouterModule
  ],
  exports: [AllSearchResultsComponent, 
    MultisearchviewComponent]
})
export class SearchResultsModule { }
