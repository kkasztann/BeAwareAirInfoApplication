import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

@Injectable()
export class DatabaseService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(public afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('name', 'asc'));
    this.users = this.afs.collection('users').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getUser() {
    return this.users;
  }

  addUser(user: User) {
    this.usersCollection.add(user);
  }

  updateUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }
}


