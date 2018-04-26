import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visibleHome = true;
  visibleUser = false;
  visibleLocation = false;
  visibleData = false;
  visibleHelp = false;






  toggleHome() {
    this.visibleHome = true;
    this.visibleHelp = false;
    this.visibleUser = false;
    this.visibleLocation = false;
    this.visibleData = false;
  }
  toggleUser() {
    this.visibleUser = true;
    this.visibleHome = false;
    this.visibleHelp = false;
   this.visibleLocation = false;
    this.visibleData = false;
  }

  toggleLocation() {
    this.visibleLocation = true;
    this.visibleHome = false;
    this.visibleHelp = false;
    this.visibleUser = false;

    this.visibleData = false;
  }

  toggleData() {
    this.visibleData = true;
    this.visibleHome = false;
    this.visibleHelp = false;
    this.visibleUser = false;
    this.visibleLocation = false;


  }
  toggleHelp() {
    this.visibleHelp = true;
    this.visibleHome = false;
    this.visibleUser = false;
    this.visibleLocation = false;
    this.visibleData = false;
  }


}
