import { Component, OnInit } from '@angular/core';

import { AccountService } from '../services/account.service';

@Component({
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
  public userIsAuthenticated = false;
  public userIsSubscribed = false;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.userIsAuthenticated = this.accountService.userIsAuthenticated;
  }
}
