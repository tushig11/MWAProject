import { FollowingComponent } from './components/following.component';
import { FollowersComponent } from './components/followers.component';
import { QuestionsComponent } from './components/questions.component';
import { AllTimeComponent } from './components/all-time.component';
import { MostRecentComponent } from './components/most-recent.component';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnswersComponent } from './components/answers.component';

const routes: Routes = [
  { path: "", component: ProfileComponent,
    children:[
      { path: "", component: MostRecentComponent},
      { path: "most", component: MostRecentComponent},
      { path: "all-time", component: AllTimeComponent},
      { path: "dashboard", component: DashboardComponent},
      { path: "answers", component: AnswersComponent},
      { path: "questions", component: QuestionsComponent},
      { path: "followers", component: FollowersComponent},
      { path: "following", component: FollowingComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
