import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  protected _userIsLoggedIn = false;

  get userIsLoggedIn(): boolean {
    return this._userIsLoggedIn;
  }

  set userIsLoggedIn(newValue: boolean) {
    this._userIsLoggedIn = newValue;
  }

  constructor() {}

  login() {
    this._userIsLoggedIn = true;
  }
}
