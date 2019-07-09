import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'clips', loadChildren: '../clips/clips.module#ClipsPageModule' },
      { path: 'help', loadChildren: '../help/help.module#HelpPageModule' },
      {
        path: 'account',
        loadChildren: '../account/account.module#AccountPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/clips',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [TabsPage]
})
export class TabsPageModule {}
