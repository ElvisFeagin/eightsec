import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [{ path: '', component: TabsPage }];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)]
})
export class TabsPageModule {}
