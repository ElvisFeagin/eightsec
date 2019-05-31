import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClipsPage } from './clips.page';
import { ClipsRoutingModule } from './clips-routing.module';
import { HelpPage } from '../help/help.page';

@NgModule({
  imports: [CommonModule, IonicModule, ClipsRoutingModule],
  declarations: [ClipsPage, HelpPage]
})
export class ClipsPageModule {}
