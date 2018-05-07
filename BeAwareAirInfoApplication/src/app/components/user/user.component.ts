import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';

import { SessionStorageService } from 'ngx-webstorage';

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


  @Input() title = 'Default title';

  constructor(
    private databaseService: DatabaseService,
    public authService: AuthService,
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
      defaultLocation: ''
    };
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
      console.log(users);
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


}
