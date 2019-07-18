import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs/tabs.page';
import { LoginGuard } from './account/login/login.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'clips',
        children: [
          {
            path: '',
            loadChildren: './clips/clips.module#ClipsPageModule'
          }
        ]
      },
      {
        path: 'help',
        children: [
          {
            path: '',
            loadChildren: './help/help.module#HelpPageModule'
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            redirectTo: '/tabs/account/setup',
            pathMatch: 'full'
          },
          {
            path: 'setup',
            canLoad: [LoginGuard],
            loadChildren: './account/setup/setup.module#SetupPageModule'
          },
          {
            path: 'signup',
            loadChildren: './account/signup/signup.module#SignupPageModule'
          },
          {
            path: 'login',
            loadChildren: './account/login/login.module#LoginPageModule'
          },
          {
            path: 'subscribe',
            canLoad: [LoginGuard],
            loadChildren:
              './account/subscribe/subscribe.module#SubscribePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/clips',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/clips',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [TabsPage],
  imports: [IonicModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
