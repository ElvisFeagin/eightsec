import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClipsPage } from './clips.page';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ClipsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [ClipsPage]
})
export class ClipsPageModule {}
