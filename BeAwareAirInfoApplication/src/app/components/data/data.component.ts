import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import { Observable } from 'rxjs/Observable';
import { Chart } from 'chart.js';
import { StacjePobliskie } from '../../models/StacjePobliskie';
import { StacjaZHistoria } from '../../models/StacjaZHistoria';
import { AuthService } from '../../services/auth.service';
import { SessionStorageService } from 'ngx-webstorage';
import { User } from '../../models/User';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  wszystkieStacje;
  pobliskaStacja;
  chart1data;
  heatmap;
  chart1 = [];
  chart2 = [];
  chart3 = [];
  chart4 = [];

  stacjaID = 129;
  stacjaPobrana;

  zalogowany = false;
  defaultLocation;
  userIDtoShow;
  users: User[];
  i;

  constructor(private httpService: HttpService, public authService: AuthService, private sessionSt: SessionStorageService) {
    this.getStacjeObszar('48.903136', '14.196732', '54.632825', '24.030281');
  }

  ngOnInit() {
    this.getStacjaPobliska('50.064650', '19.9449807');
    this.getStacjaID('758');
    this.users = this.sessionSt.retrieve('users');
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.userIDtoShow = auth.uid;

        for (this.i = 0; this.i < this.users.length; this.i++) {
          if (this.userIDtoShow === this.users[this.i].myID) {
            this.defaultLocation = this.users[this.i].defaultLocation;
          }
        }

        this.zalogowany = true;
      } else { this.zalogowany = false; }
    });



  }

  getStacjeObszar(latSW: string, longSW: string, latNE: string, longNE: string) {
    this.httpService.getStacjeObszar(latSW, longSW, latNE, longNE).retry(3).subscribe(stacje => {
      this.wszystkieStacje = stacje;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }


  getStacjaPobliska(lat: string, long: string) {
    this.httpService.getStacjaPobliska(lat, long).retry(3).subscribe(stacja => {
      this.stacjaPobrana = stacja;
      //  console.log(this.pobliskaStacja);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }



  getStacjaID(id: string) {
    this.httpService.getStacjaID(id).retry(3).subscribe(stacja => {
      this.stacjaPobrana = stacja;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    }
    );

  }


  getCharts() {
    this.getChart1();
    this.getChart2();
    this.getChart3();
    this.getChart4();
  }

  getChart1() {
    this.chart1 = new Chart('chart1', {
      type: 'horizontalBar',
      data: {
        labels: ['air Quality', 'pm10', 'pm25'],
        datasets: [
          {

            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
            data: [
              this.stacjaPobrana.currentMeasurements.airQualityIndex,
              this.stacjaPobrana.currentMeasurements.pm10,
              this.stacjaPobrana.currentMeasurements.pm25
            ]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Air pollution - current state - pollution level: ' + this.stacjaPobrana.currentMeasurements.pollutionLevel
        }
      }
    });
  }


  getChart2() {
    this.chart2 = new Chart('chart2', {
      type: 'horizontalBar',
      data: {
        labels: ['air Quality', 'pm10', 'pm25'],
        datasets: [
          {

            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
            data: [
              this.stacjaPobrana.history[5].measurements.airQualityIndex,
              this.stacjaPobrana.history[5].measurements.pm10,
              this.stacjaPobrana.history[5].measurements.pm25
            ]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Air pollution - 6 hours ago - pollution level: ' + this.stacjaPobrana.history[5].measurements.pollutionLevel
        }
      }
    });
  }


  getChart3() {
    this.chart3 = new Chart('chart3', {
      type: 'horizontalBar',
      data: {
        labels: ['air Quality', 'pm10', 'pm25'],
        datasets: [
          {

            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
            data: [
              this.stacjaPobrana.history[11].measurements.airQualityIndex,
              this.stacjaPobrana.history[11].measurements.pm10,
              this.stacjaPobrana.history[11].measurements.pm25
            ]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Air pollution -  12 hours ago - pollution level: ' + this.stacjaPobrana.history[11].measurements.pollutionLevel
        }
      }
    });
  }


  getChart4() {
    this.chart4 = new Chart('chart4', {
      type: 'horizontalBar',
      data: {
        labels: ['air Quality', 'pm10', 'pm25'],
        datasets: [
          {

            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
            data: [
              this.stacjaPobrana.history[23].measurements.airQualityIndex,
              this.stacjaPobrana.history[23].measurements.pm10,
              this.stacjaPobrana.history[23].measurements.pm25
            ]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Air pollution - 24 hours ago - pollution level: ' + this.stacjaPobrana.history[23].measurements.pollutionLevel
        }
      }
    });
  }




}





export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
