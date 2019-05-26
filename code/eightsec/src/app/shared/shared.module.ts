import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AppTabsComponent } from './app-tabs/app-tabs.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [AppTabsComponent],
  imports: [CommonModule, IonicModule, SharedRoutingModule],
  exports: [AppTabsComponent]
})
export class SharedModule {}
