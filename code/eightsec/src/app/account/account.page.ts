import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../services/account.service';

@Component({
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage {
  public userIsAuthenticated = true;
  public userIsSubscribed = false;

  constructor(private accountService: AccountService, private router: Router) {
    this.userIsAuthenticated = this.accountService.userIsAuthenticated;
    console.log('this.userIsAuthenticated =', this.userIsAuthenticated);
    if (this.userIsAuthenticated) {
      this.router.navigateByUrl('/tabs/account/status/setup');
    } else if (!this.userIsAuthenticated) {
      this.router.navigateByUrl('/tabs/account/status/signup');
    }
  }
}
