import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClipsPage } from './clips.page';
import { ClipsRoutingModule } from './clips-routing.module';
import { HelpPage } from '../help/help.page';
import { AccountPageModule } from '../account/account.module';
import { AccountPage } from '../account/account.page';

@NgModule({
  imports: [CommonModule, IonicModule, ClipsRoutingModule],
  declarations: [ClipsPage, HelpPage, AccountPage]
})
export class ClipsPageModule {}
