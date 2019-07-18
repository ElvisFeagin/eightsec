import { Injectable } from '@angular/core';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  constructor(private loginService: LoginService) {}

  logout() {
    this.loginService.userIsLoggedIn = false;
  }
}
