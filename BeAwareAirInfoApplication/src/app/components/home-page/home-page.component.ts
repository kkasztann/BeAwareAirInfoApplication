import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  home1 = 'https://firebasestorage.googleapis.com/v0/b/beawareairinfoapplication.appspot.com/o/home1.png?alt=media&token=74e6a7ea-cd17-4cfe-b74c-03be05165365';
  // tslint:disable-next-line:max-line-length
  home2 = 'https://firebasestorage.googleapis.com/v0/b/beawareairinfoapplication.appspot.com/o/home2.png?alt=media&token=aa0218b1-f5b6-4618-8daf-2e6ac51fdad3';

  constructor() { }

  ngOnInit() {
  }

}
