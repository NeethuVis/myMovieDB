import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = 'all',
  movie = 'movie'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url='https://api.themoviedb.org/3/search/movie?';
  apiKey='api_key=a642b1daedb853591c14a4e3f9c2023a';
 


  constructor(private http: HttpClient) { }

  searchData(movieType:String): Observable<any> {
    return null;
  }

  getdetails() {

  }
}
