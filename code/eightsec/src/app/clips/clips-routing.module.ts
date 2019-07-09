import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPage } from '../help/help.page';
import { ClipsPage } from './clips.page';
import { AccountPage } from '../account/account.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ClipsPage,
    children: [
      {
        path: 'clips-list',
        children: [
          {
            path: '',
            loadChildren: './top/top.module#TopPageModule'
          },
          {
            path: 'heat',
            loadChildren: './heat/heat.module#HeatPageModule'
          },
          {
            path: 'heat/clip/:clipId',
            // canLoad: [AuthGuard],
            loadChildren:
              './heat/heat-detail/heat-detail.module#HeatDetailPageModule'
          },
          {
            path: 'upload',
            // canLoad: [AuthGuard],
            loadChildren: './upload/upload.module#UploadPageModule'
          },
          {
            path: 'past/:weekNum',
            loadChildren: './past/past.module#PastPageModule'
          },
          {
            path: 'past/:weekNum/:clipId',
            loadChildren:
              './past/past-detail/past-detail.module#PastDetailPageModule'
          }
        ]
      },
      {
        path: 'help',
        component: HelpPage
      },
      {
        path: 'account',
        component: AccountPage,
        children: [
          {
            path: '',
            loadChildren: '../account/account.module#AccountPageModule'
          },
          {
            path: 'signup',
            loadChildren: '../account/signup/signup.module#SignupPageModule'
          },
          {
            path: 'setup',
            loadChildren: '../account/setup/setup.module#SetupPageModule'
          },
          {
            path: 'subscribe',
            loadChildren: '../account/subscribe/subscribe.module#SubscribePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/clips/tabs/clips-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/clips/tabs/clips-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipsRoutingModule {}
