import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  public isCollapsedMail1 = true;
  public isCollapsedMail2 = true;

  constructor() { }

  ngOnInit() {
  }

}
