import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClipsPage } from './clips.page';
import { HelpPage } from '../help/help.page';

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
            loadChildren: './all/all.module#AllPageModule'
          },
          {
            path: 'heat',
            loadChildren: './heat/heat.module#HeatPageModule'
          },
          {
            path: 'heat/clip/:clipId',
            loadChildren:
              './heat/heat-detail/heat-detail.module#HeatDetailPageModule'
          },
          {
            path: 'upload',
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
  },
  { path: 'all', loadChildren: './all/all.module#AllPageModule' },
  {
    path: 'heat-detail',
    loadChildren: './heat/heat-detail/heat-detail.module#HeatDetailPageModule'
  },
  {
    path: 'past-detail',
    loadChildren: './past/past-detail/past-detail.module#PastDetailPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipsRoutingModule {}
