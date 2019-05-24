import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipsPageModule } from './clips.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: ClipsPageModule,
    children: [
      // {
      //   path: 'clips',
      //   children: [{ path: '', loadChildren: './clips.module#ClipsPageModule' }]
      // },
      // {
      //   path: 'help',
      //   children: [
      //     { path: '', loadChildren: '../help/help.module#HelpPageModule' }
      //   ]
      // },
      // {
      //   path: '',
      //   redirectTo: 'clips/tabs/clips',
      //   pathMatch: 'full'
      // }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: 'clips/tabs/clips',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipsRoutingModule {}
