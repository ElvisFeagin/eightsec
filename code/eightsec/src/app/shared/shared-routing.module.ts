import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppTabsComponent } from './app-tabs/app-tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: AppTabsComponent,
    children: [
      {
        path: 'clip-listing',
        loadChildren: '../clips/clips.module#ClipsPageModule'
      },
      {
        path: 'help-listing',
        loadChildren: '../help/help.module#HelpPageModule'
      },
      {
        path: '',
        redirectTo: '/clips/tabs/clip-listing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/clips/tabs/clip-listing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
