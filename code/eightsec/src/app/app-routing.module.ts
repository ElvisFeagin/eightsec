import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'clips', pathMatch: 'full' },
      {
        path: 'clips',
        children: [
          { path: '', redirectTo: 'top', pathMatch: 'full' },
          {
            path: 'heat',
            loadChildren: './clips/heat/heat.module#HeatPageModule'
          },
          { path: 'top', loadChildren: './clips/top/top.module#TopPageModule' },
          {
            path: 'upload',
            loadChildren: './clips/upload/upload.module#UploadPageModule'
          },
          {
            path: 'past/:weekNum',
            loadChildren: './clips/past/past.module#PastPageModule'
          },
          {
            path: 'heat-clip/:clipId',
            loadChildren:
              './clips/heat/clip-heat-detail/clip-heat-detail.module#ClipHeatDetailPageModule'
          },
          {
            path: 'past-clip/:clipId',
            loadChildren:
              './clips/past/clip-past-detail/clip-past-detail.module#ClipPastDetailPageModule'
          }
        ]
      },
      {
        path: 'help',
        loadChildren: './help/help.module#HelpPageModule'
      },
      {
        path: 'account',
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          {
            path: 'login',
            loadChildren: './account/login/login.module#LoginPageModule'
          },
          {
            path: 'setup',
            loadChildren: './account/setup/setup.module#SetupPageModule'
          },
          {
            path: 'signup',
            loadChildren: './account/signup/signup.module#SignupPageModule'
          },
          {
            path: 'subscribe',
            loadChildren:
              './account/subscribe/subscribe.module#SubscribePageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [TabsPage],
  imports: [IonicModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
