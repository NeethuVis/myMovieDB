import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Platform } from '@ionic/angular'
//import { platform } from 'os';
import { browser } from 'protractor';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  [x: string]: any;
  movieType:String;
  results: Observable<any>;
  currentscreenOrientation:string;

  constructor(private router: Router, private screenOrientation: ScreenOrientation,private platform: Platform) { 

    if (this.platform.is('tablet')) {
         if (this.screenOrientation.type === 'portrait-primary') {
           //Uncomment below line for screen orientation to landscape 
          //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
        }
       }
    }
    

  ngOnInit() {
    
  }

  showMovieList() {
    
    this.router.navigate(['movie-details'], {
      queryParams: {
        id: this.movieType
      }
    });




    
  }

}
