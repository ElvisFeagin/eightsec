import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClipsPage } from './clips.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ClipsPage,
    children: [
      {
        path: 'listing',
        component: ClipsPage,
        children: [
          {
            path: 'select',
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
                path: 'heat/:clipId',
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
            path: '',
            redirectTo: '/tabs/clips/listing/select',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/clips/listing/select',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [ClipsPage]
})
export class ClipsPageModule {}
