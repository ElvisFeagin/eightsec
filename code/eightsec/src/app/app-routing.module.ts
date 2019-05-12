import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'clips', loadChildren: './clips/clips.module#ClipsPageModule' },
  { path: 'history', loadChildren: './clips/history/history.module#HistoryPageModule' },
  { path: 'this-week', loadChildren: './clips/this-week/this-week.module#ThisWeekPageModule' },
  { path: 'upload', loadChildren: './clips/upload/upload.module#UploadPageModule' },
  { path: 'view', loadChildren: './clips/view/view.module#ViewPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
