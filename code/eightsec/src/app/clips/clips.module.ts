import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClipsPage } from './clips.page';
import { ClipsRoutingModule } from './clips-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, IonicModule, ClipsRoutingModule, SharedModule],
  declarations: [ClipsPage]
})
export class ClipsPageModule {}
