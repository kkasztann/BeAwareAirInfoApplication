import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';

import { SessionStorageService } from 'ngx-webstorage';
import { HttpService } from '../../services/http.service';
import { Stacje } from '../../models/Stacje';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, DoCheck {


  bezimienny: User;
  users: User[];
  editState = false;
  userToEdit: User;
  userIDtoShow: string;


  // healthInfo
  alergia = false;
  astma = false;
  oskrzela = false;
  pluca = false;
  inne = false;

  // healthInfoC CheckBoxStatus
  alergiaStan: '';
  astmaStan: '';
  oskrzelaStan: '';
  plucaStan: '';
  inneStan: '';


  i: number;
  userToCreate = false;

  wszystkieStacje;

  @Input() title = 'Default title';

  constructor(
    private databaseService: DatabaseService,
    public authService: AuthService,
    private httpService: HttpService,
    private sessionSt: SessionStorageService) {
    this.alergiaStan = this.getSessionStorage('alergia');
    this.astmaStan = this.getSessionStorage('astma');
    this.oskrzelaStan = this.getSessionStorage('oskrzela');
    this.plucaStan = this.getSessionStorage('pluca');
    this.inneStan = this.getSessionStorage('inne');

    this.bezimienny = {
      name: 'Bezimienny',
      myID: '',
      sex: '',
      defaultLocation: '1081'
    };

    this.getStacjeObszar('48.903136', '14.196732', '54.632825', '24.030281');
  }

  ngDoCheck(): void {
    this.users = this.getSessionStorage('users');
  }

  ngOnInit() {




    this.users = this.getSessionStorage('users');

    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.userIDtoShow = auth.uid;
      }
    });

    this.databaseService.getUser().subscribe(users => {
      this.users = users;

      for (this.i = 0; this.i < users.length; this.i++) {
        if (this.userIDtoShow === users[this.i].myID) {
          this.setSessionStorage('name', users[this.i].name);
          this.userToCreate = false; break;
        } else {
          this.userToCreate = true;
        }
      }
      if (this.userToCreate) {
        this.bezimienny.myID = this.userIDtoShow;
        this.databaseService.addUser(this.bezimienny);
        this.userToCreate = false;
      }


      this.setSessionStorage('users', users);
    });

  }

  clearState() {
    this.userToEdit = null;
  }

  updateUser(user: User) {
    user.myID = this.userIDtoShow;
    this.databaseService.updateUser(user);
    this.clearState();
  }

  setSessionStorage(key, value) {
    this.sessionSt.store(key, value);
  }

  getSessionStorage(key) {
    return this.sessionSt.retrieve(key);
  }


  getStacjeObszar(latSW: string, longSW: string, latNE: string, longNE: string) {
    this.httpService.getStacjeObszar(latSW, longSW, latNE, longNE).retry(3).subscribe(stacje => {
      this.wszystkieStacje = stacje;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }


}
