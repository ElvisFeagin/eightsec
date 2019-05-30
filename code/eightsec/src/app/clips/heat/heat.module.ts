import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeatPage } from './heat.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HeatPage
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [HeatPage]
})
export class HeatPageModule {
  constructor() {
    console.log('IN: HeatPageModule -> constructor');
  }
}
