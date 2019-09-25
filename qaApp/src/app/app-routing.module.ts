import { SignupComponent } from './components/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './modules/analytics/dashboard.component';
import { LoginComponent } from './components/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: "", component: QuestionComponent, canActivate: [AuthGuard]},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "statistics", component: DashboardComponent, canActivate: [AuthGuard]},
  { path: "user", loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard]},
  { path: "answers/:id", component: AnswersComponent, canActivate: [AuthGuard]},
  { path: "analytics", loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
