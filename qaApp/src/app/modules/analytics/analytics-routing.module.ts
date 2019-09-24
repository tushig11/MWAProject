import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SimpleComponent } from './components/simple.component';

const routes: Routes = [
  { path: "", component: DashboardComponent,
    children:[
      { path: "simple", component: SimpleComponent},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
