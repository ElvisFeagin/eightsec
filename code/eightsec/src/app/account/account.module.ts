import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      {
        path: 'status',
        component: AccountPage,
        children: [
          {
            path: '',
            loadChildren: './status/status.module#StatusPageModule'
          },
          {
            path: 'setup',
            loadChildren: './setup/setup.module#SetupPageModule'
          },
          {
            path: 'signup',
            loadChildren: './signup/signup.module#SignupPageModule'
          },
          {
            path: 'subscribe',
            loadChildren: './subscribe/subscribe.module#SubscribePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/account/status'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AccountPage]
})
export class AccountPageModule {}
