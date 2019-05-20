import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipsPage } from './clips.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ClipsPage,
    children: [
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: './history/history.module#HistoryPageModule'
          },
          {
            path: ':clipId',
            loadChildren: './view/view.module#ViewPageModule'
          }
        ]
      },
      {
        path: 'heat',
        children: [
          {
            path: '',
            loadChildren: './heat/heat.module#HeatPageModule'
          },
          {
            path: ':clipId',
            loadChildren: './view/view.module#ViewPageModule'
          }
        ]
      }
      // {
      //   path: 'upload',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: './clips/upload/upload.module#UploadPageModule'
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   redirectTo: '/clips/tabs/history',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/clips/tabs/history',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClipsRoutingModule {}
