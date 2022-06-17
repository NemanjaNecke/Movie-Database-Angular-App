import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowsVideoDto, TvGenreDto, TvShowDto, Tvshow, TVShowCredits, TVShowImages } from './tvshow';


@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  baseUrl = 'https://api.themoviedb.org/3/';
  apiKey = '?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d';
  genres = 'https://api.themoviedb.org/3/genre/tv/list?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d'
  constructor(private http: HttpClient) { }

  getUpcShows(page:number,type:string,category: string) {
   
    return this.http.get<TvShowDto>(this.baseUrl+type+'/'+category+this.apiKey+'&page='+page);
  }

  getShowsVideos(id: string) {
   
    return this.http.get<ShowsVideoDto>(this.baseUrl+'tv/'+id+'/videos'+this.apiKey);
  }

  getShowsGenres() {
    return this.http.get<TvGenreDto>(this.genres);
  }

 getShowsByGenre(id:string) {
   return this.http.get<TvShowDto>(this.baseUrl + 'discover/tv?with_genres='+id+'&api_key=71c246bf9a9a4d673dd3e68aabe7dc4d')
 }

 getGenreNextPage(page: number, id:string) {
   return this.http.get<TvShowDto>(this.baseUrl+'discover/tv?with_genres='+id+'&api_key=71c246bf9a9a4d673dd3e68aabe7dc4d'+'&page='+page)
 }

  getShows(id: string){
    return this.http.get<Tvshow>(this.baseUrl+'tv/'+id+this.apiKey)
  }

  getShowsImages(id: string) {
    return this.http.get<TVShowImages>(this.baseUrl+'tv/'+id+'/images'+this.apiKey)
  }

  getShowsCredits(id:string) {
    return this.http.get<TVShowCredits>(this.baseUrl+'tv/' + id+ '/credits' +this.apiKey)
  }

  getSearchShows(search: string, page: number) {
    return this.http.get<TvShowDto>(this.baseUrl+'search/tv'+this.apiKey+'&language=en-US&query='+search+'&page='+page)
  }
}
