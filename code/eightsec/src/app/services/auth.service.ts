import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  login(email: string, password: string) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  signup(email: string, password: string) {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  onTabButtonClick() {
    if (this._userIsAuthenticated) {
      this.logout();
    }
  }

  async logout() {
    await this.afAuth.auth
      .signOut()
      .then(() => {
        this._userIsAuthenticated = false;
        console.log(
          'auth.service.ts > logout > this._userIsAuthenticated =',
          this._userIsAuthenticated
        );
      })
      .catch(err => console.error(err));
  }
}
