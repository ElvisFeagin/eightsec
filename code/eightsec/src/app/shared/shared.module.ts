import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppTabsComponent } from './app-tabs/app-tabs.component';

@NgModule({
  declarations: [AppTabsComponent],
  imports: [CommonModule, IonicModule],
  exports: [AppTabsComponent]
})
export class SharedModule {}
