import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [ProfileComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})

export class UserModule { }
