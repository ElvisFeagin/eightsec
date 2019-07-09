import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _userIsAuthenticated = false;
  private _userId = null;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this._userIsAuthenticated = true;
      } else {
        this._userIsAuthenticated = false;
      }
    });
  }
}
