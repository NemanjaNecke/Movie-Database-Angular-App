import { SearchModule } from './movies/search/search.module';
import { GenresModule } from './movies/genres/genres.module';
import { MoviesGenresModule } from './movies/movies-genres/movies-genres.module';
import { MoviesModule } from './movies/movies.module';
import { Tab1Module } from './movies/tab2/tab1.module';
import { CatalogueModule } from './movies/catalogue/catalogue.module';
import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { MatCardModule } from '@angular/material/card';
import { ItemComponent } from './item/item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MoviesCategoriesComponent } from './movies-categories/movies-categories.component';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { TabModule } from './movies/tab/tab.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { VideoComponent } from './movie-detail/video/video.component';
import { SafePipe } from './safe.pipe';
import { ImageGalleryComponent } from './movie-detail/image-gallery/image-gallery.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogDataComponent } from './movie-detail/image-gallery/dialog-data/dialog-data.component';
import { CreditsComponent } from './movie-detail/credits/credits.component';







@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    ItemComponent,
    MoviesCategoriesComponent,
    MovieDetailComponent,
    VideoComponent,
    SafePipe,
    ImageGalleryComponent,
    DialogDataComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ScrollingModule,
    CommonModule,
    CatalogueModule,
    Tab1Module,
    TabModule,
    MoviesModule,
    MoviesGenresModule,
    GenresModule,
    SearchModule,
    //material
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataComponent]
})
export class AppModule { }
