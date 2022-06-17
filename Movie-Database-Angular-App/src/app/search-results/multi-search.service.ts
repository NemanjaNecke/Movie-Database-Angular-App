import { SearchDto } from './search';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiSearchService {
  baseUrl = 'https://api.themoviedb.org/3/search/multi?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&query='
  page = '&page='
  private subject = new Subject<any>();
  constructor( private http: HttpClient) { }
  sendQuery(value:string){
     this.subject.next({text: value})
      }

  onMessage():  Observable<any>{
    return this.subject.asObservable();
  }

  searchAll(query: string, page: number) {
   return this.http.
   get<SearchDto>(this.baseUrl +query+this.page+page +'&include_adult=false')
  }

}
