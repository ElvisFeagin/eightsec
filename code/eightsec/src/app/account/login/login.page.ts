import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.loginService.login();
    this.router.navigateByUrl('/tabs/clips');
  }
}
