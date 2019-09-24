import { QuestionsComponent } from './modules/user/components/questions.component';
import { SignupComponent } from './components/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './analytics/dashboard/dashboard.component';
import { LoginComponent } from './components/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: "", component: DashboardComponent, },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "statistics", component: DashboardComponent, canActivate: [AuthGuard]},
  { path: "user", loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
