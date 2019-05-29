import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clips', pathMatch: 'full' },
  { path: 'clips', loadChildren: './clips/clips.module#ClipsPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule'},
  { path: 'heat', loadChildren: './clips/heat/heat.module#HeatPageModule' },
  { path: 'past', loadChildren: './clips/past/past.module#PastPageModule' },
  { path: 'heat-detail', loadChildren: './clips/heat/detail/detail.module#DetailPageModule' },
  { path: 'past-detail', loadChildren: './clips/past/detail/detail.module#DetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
