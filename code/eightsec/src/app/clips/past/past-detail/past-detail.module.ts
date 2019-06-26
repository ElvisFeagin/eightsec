import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PastDetailPage } from './past-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PastDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PastDetailPage]
})
export class PastDetailPageModule {}
