import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clips', pathMatch: 'full' },
  { path: 'clips', loadChildren: './clips/clips.module#ClipsPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
