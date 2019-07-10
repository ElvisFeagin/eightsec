// import { Injectable } from '@angular/core';
// import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AccountService } from '../services/account.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanLoad {
//   constructor(private accountService: AccountService, private router: Router) {}

//   canLoad(
//     route: Route,
//     segments: UrlSegment[]
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     if (!this.accountService.userIsAuthenticated) {
//       this.router.navigateByUrl('/auth');
//     }
//     return this.accountService.userIsAuthenticated;
//   }
// }
