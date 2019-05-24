import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clips', pathMatch: 'full' },
  { path: 'clips', loadChildren: './clips/clips.module#ClipsPageModule' },
  { path: 'view', loadChildren: './clips/view/view.module#ViewPageModule' },
  {
    path: 'upload',
    loadChildren: './clips/upload/upload.module#UploadPageModule'
  },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
