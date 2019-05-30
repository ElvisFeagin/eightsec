import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clips', pathMatch: 'full' },
  { path: 'clips', loadChildren: './clips/clips.module#ClipsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
