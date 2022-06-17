import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = 'https://api.themoviedb.org/3/person/1?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US'
  baseUrl = 'https://api.themoviedb.org/3/person/'
  apiKey = '?api_key=71c246bf9a9a4d673dd3e68aabe7dc4d&language=en-US'
  constructor(private http: HttpClient) { }

  getPerson(id:number){
    return this.http.get<Person>(this.baseUrl + id + this.apiKey);
  }
}
