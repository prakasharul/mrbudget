import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { } from './auth/auth.module#AuthModule';

const routes: Routes = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
