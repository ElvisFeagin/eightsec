import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPage } from './account/account.page';

const routes: Routes = [
  { path: '', redirectTo: 'clips', pathMatch: 'full' },
  { path: 'clips', loadChildren: './clips/clips.module#ClipsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
