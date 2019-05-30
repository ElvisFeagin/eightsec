import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClipsPage } from './clips.page';

// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: ClipsPage,
//     children: [
//       {
//         path: 'clip-listing',
//         children: [
//           {
//             path: '',
//             loadChildren: './clips.module#ClipsPageModule'
//           },
//           {
//             path: 'heat',
//             loadChildren: './heat/heat.module#HeatPageModule'
//           },
//           {
//             path: 'upload',
//             loadChildren: './upload/upload.module#UploadPageModule'
//           },
//           {
//             path: 'week/:weekNum',
//             loadChildren: './past/past.module#PastPageModule'
//           },
//           {
//             path: '',
//             redirectTo: '/clips/tabs/clip-listing',
//             pathMatch: 'full'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/clips/tabs/clip-listing',
//     pathMatch: 'full'
//   }
// ];

const routes: Routes = [
  {
    path: 'tabs',
    component: ClipsPage,
    children: [
      {
        path: 'clip-listing',
        children: [
          {
            path: '',
            loadChildren: './clips.module#ClipsPageModule'
          },
          {
            path: 'heat',
            loadChildren: './heat/heat.module#HeatPageModule'
          },
          {
            path: 'upload',
            loadChildren: './upload/upload.module#UploadPageModule'
          },
          {
            path: 'week/:weekNum',
            loadChildren: './past/past.module#PastPageModule'
          },
          {
            path: '',
            redirectTo: '/clips/tabs/clip-listing',
            pathMatch: 'full'
          }
        ]
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
export class ClipsRoutingModule {}
