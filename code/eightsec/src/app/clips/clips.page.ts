import { Component, OnInit, DoCheck } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './clips.page.html',
  styleUrls: ['./clips.page.scss']
})
export class ClipsPage implements DoCheck {
  isUserAuthenticated = false;

  constructor(private authService: AuthService) {}

  onButtonClick() {
    this.authService.onTabButtonClick();
  }

  ngDoCheck() {
    this.isUserAuthenticated = this.authService.userIsAuthenticated;
  }
}
