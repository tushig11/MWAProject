import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TagsComponent } from './components/tags.component';
import { UsersComponent } from './components/users.component';
import { OverviewComponent } from './components/overview.component';

const routes: Routes = [
  { path: "", component: DashboardComponent,
    children:[
      { path: "", component: OverviewComponent},
      { path: "overview", component: OverviewComponent},
      { path: "tags", component: TagsComponent},
      { path: "users", component: UsersComponent},

    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
