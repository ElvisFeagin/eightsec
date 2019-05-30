import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { ClipsPage } from './clips.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ClipsPage,
    children: [
      {
        path: 'heat',
        loadChildren: './heat/heat.module#HeatPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClipsPage]
})
export class ClipsPageModule {
  constructor() {
    console.log('IN: ClipsPageModule -> constructor');
  }
}
