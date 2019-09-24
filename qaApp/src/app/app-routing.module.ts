import { DashboardComponent } from './analytics/dashboard/dashboard.component';
import { LoginComponent } from './components/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: DashboardComponent},
  { path: "login", component: LoginComponent },
  { path: "user", loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
