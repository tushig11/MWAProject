import { DashboardComponent } from './modules/analytics/dashboard.component';
import { LoginComponent } from './components/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';



const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "login", component: LoginComponent },
  { path: "analytics", loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule)}
 // { path: "user", loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
