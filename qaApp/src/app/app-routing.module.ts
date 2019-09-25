import { DashboardComponent } from './analytics/dashboard/dashboard.component';
import { LoginComponent } from './components/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { QuestionComponent } from './question/question.component';



const routes: Routes = [
  { path: "", component: QuestionComponent},
  { path: "answers/:id", component: AnswersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
