import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  url='https://api.themoviedb.org/3/search/movie?';
  apiKey='api_key=a642b1daedb853591c14a4e3f9c2023a';
  query:String;
 data: Observable<any>;
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    
      this.activatedRoute.queryParams.subscribe(params => {
        
        this.query='&query='+params.id;
      });
      this.http.get<any>(this.url+this.apiKey +this.query)
      .subscribe(data=> {
       
        this.data = data.results;
      })
      
    }
  }

