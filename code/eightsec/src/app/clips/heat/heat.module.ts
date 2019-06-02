import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { HeatPage } from './heat.page';

const routes: Routes = [
  {
    path: '',
    component: HeatPage
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [HeatPage]
})
export class HeatPageModule {}
