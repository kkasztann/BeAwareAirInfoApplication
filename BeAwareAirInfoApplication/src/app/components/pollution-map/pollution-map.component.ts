import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import { Observable } from 'rxjs/Observable';
import { Stacje } from '../../models/Stacje';

@Component({
  selector: 'app-pollution-map',
  templateUrl: './pollution-map.component.html',
  styleUrls: ['./pollution-map.component.scss']
})
export class PollutionMapComponent implements OnInit {


  myLat = 0;
  myLng = 0;

 wszystkieStacje;
 goWorkWithMap = false;

 lvl0 = 'white';
 lvl1 = 'lime';
 lvl2 = 'yellow';
 lvl3 = 'orange';
 lvl4 = 'red';
 lvl5 = 'black';




  constructor(private httpService: HttpService) {
    this.getMyPosition();
  }
  ngOnInit(): void {
    this.getStacjeObszar('48.903136', '14.196732', '54.632825', '24.030281');
    console.log(this.wszystkieStacje);

  }

  getStacjeObszar(latSW: string, longSW: string, latNE: string, longNE: string) {
    this.httpService.getStacjeObszar(latSW, longSW, latNE, longNE).retry(3).subscribe(stacje => {
       console.log(stacje);
      this.wszystkieStacje = stacje;
      this.goWorkWithMap = true;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  getMyPosition() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition( pos => {
          this.myLng = pos.coords.longitude;
          this.myLat = pos.coords.latitude;
          console.log(this.myLat);
          console.log(this.myLng);
        });
     }
  }
}
