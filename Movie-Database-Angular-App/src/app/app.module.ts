import { MultiSearchService } from './search-results/multi-search.service';
import { FormsModule } from '@angular/forms';
import { TabshowviewModule } from './tvshows/tabshows/tabshowview/tabshowview.module';
import { VideoShowsComponent } from './tvshows/details/video/video.component';
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
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogDataComponent } from './movie-detail/image-gallery/dialog-data/dialog-data.component';
import { CreditsComponent } from './movie-detail/credits/credits.component';


import { GenreshowsComponent } from './tvshows/genreshows/genreshows.component';
import { TvshowsgenresComponent } from './tvshows/tvshowsgenres/tvshowsgenres.component';
import { SearchgenresComponent } from './tvshows/searchgenres/searchgenres.component';
import { CatalogueshowsComponent } from './catalogueshows/catalogueshows.component';
import { Tab1showsModule } from './tvshows/tab1shows/tab1shows.module';
import { DetailsComponent } from './tvshows/details/details.component';
import { ImageGaleryShowsComponent } from './tvshows/details/image-galery/image-galery.component';
import { CreditsShowsComponent } from './tvshows/details/credits/credits.component';
import { DialogComponent } from './tvshows/details/image-galery/dialog/dialog.component';
import { ItemShowComponent } from './tvshows/details/item/item.component';
import { GenreshowsviewComponent } from './tvshows/tvshowsgenres/genreshowsview/genreshowsview.component';
import { SearchViewComponent } from './tvshows/searchgenres/search-view/search-view.component';
import { ShowsviewComponent } from './catalogueshows/showsview/showsview.component';
import { SearchdiagComponent } from './navigation/searchdiag/searchdiag.component';
import { SearchResultsModule } from './search-results/search-results.module';









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
    CreditsComponent,
    GenreshowsComponent,
    TvshowsgenresComponent,
    SearchgenresComponent,
    CatalogueshowsComponent,
    DetailsComponent,
    ImageGaleryShowsComponent,
    CreditsShowsComponent,
    VideoShowsComponent,
    DialogComponent,
    ItemShowComponent,
    GenreshowsviewComponent,
    SearchViewComponent,
    ShowsviewComponent,
    SearchdiagComponent
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
    Tab1showsModule,
    TabshowviewModule,
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
    FormsModule,
    SearchResultsModule,
  ],
  exports: [
    ImageGaleryShowsComponent,
    CreditsShowsComponent,
    VideoShowsComponent,
    DialogComponent,
    ItemShowComponent,
    GenreshowsviewComponent,
    GenreshowsComponent,
    TvshowsgenresComponent,
    SearchgenresComponent,
    CatalogueshowsComponent,
    SearchViewComponent,
    ShowsviewComponent
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }, 
MultiSearchService
],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataComponent]
})
export class AppModule { }
