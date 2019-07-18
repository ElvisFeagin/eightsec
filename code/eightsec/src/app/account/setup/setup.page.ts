import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SetupService } from 'src/app/services/setup.service';

@Component({
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss']
})
export class SetupPage implements OnInit {
  constructor(private setupService: SetupService, private router: Router) {}

  ngOnInit() {}

  onLogout() {
    this.setupService.logout();
    this.router.navigateByUrl('/tabs/account/login');
  }
}
