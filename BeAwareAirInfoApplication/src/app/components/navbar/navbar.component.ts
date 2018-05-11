import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {


  public isLogin: boolean;
  public userName: string;
  public userEmail: string;
  public userPhoto: string;
  // tslint:disable-next-line:max-line-length
  public logo = 'https://firebasestorage.googleapis.com/v0/b/beawareairinfoapplication.appspot.com/o/logo.jpg?alt=media&token=af968afb-e23d-4ec3-8a70-3356e63fff3d';

  constructor(
    public authService: AuthService,
    public flashMessages: FlashMessagesService,
    private sessionSt: SessionStorageService
  ) { }

  ngDoCheck(): void {
    this.userName = this.sessionSt.retrieve('name');
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        if (this.userName === null) { this.userName = this.sessionSt.retrieve('name'); }
        this.userEmail = auth.email;
        this.userPhoto = auth.photoURL;
        // tslint:disable-next-line:max-line-length
        if (this.userPhoto === null) {this.userPhoto = 'https://firebasestorage.googleapis.com/v0/b/beawareairinfoapplication.appspot.com/o/user.svg?alt=media&token=b0c444cd-485c-4f7c-ab2a-5c20d664059a'; }
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout() {
    this.flashMessages.show('Wylogowano :(',
        { cssClass: 'alert-warning', timeout: 4000 });
    this.authService.logout();

  }

}
