import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClipsPage } from './clips.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ClipsPage,
    children: [
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: './clips.module#ClipsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/clips/tabs/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/clips/tabs/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipsRoutingModule {}
