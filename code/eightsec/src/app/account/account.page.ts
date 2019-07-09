import { Component, OnInit } from '@angular/core';

import { AccountService } from '../services/account.service';

@Component({
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage  {
  // public userIsAuthenticated = false;

  // constructor(private accountService: AccountService) {}

  // ngOnInit() {
  //   console.log('userIsAuthenticated = ', this.accountService.userIsAuthenticated);
  //   this.userIsAuthenticated = this.accountService.userIsAuthenticated;
  // }
}
