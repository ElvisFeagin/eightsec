import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeatPage } from './heat.page';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [HeatPage]
})
export class HeatPageModule {
  constructor() {
    console.log('IN: HeatPageModule -> constructor');
  }
}
