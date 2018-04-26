import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-help',
  templateUrl: './m-help.component.html',
  styleUrls: ['./m-help.component.css']
})
export class MHelpComponent implements OnInit {

  visibleAbout = false;
  visibleSupport = false;
  visibleRate = true;

  constructor() { }

  ngOnInit() {
  }

   toggleAbout() {
    this.visibleAbout = true;
    this.visibleSupport = false;
    this.visibleRate = false;
  }
  toggleSupport() {
    this.visibleAbout = false;
    this.visibleSupport = true;
    this.visibleRate = false;
  }
  toggleRate() {
    this.visibleAbout = false;
    this.visibleSupport = false;
    this.visibleRate = true;
  }

}
