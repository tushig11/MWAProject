import { AnswersComponent } from './components/answers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { UserRoutingModule } from './user-routing.module';

import { MostRecentComponent } from './components/most-recent.component';
import { AllTimeComponent } from './components/all-time.component';
import { QuestionsComponent } from './components/questions.component';
import { FollowersComponent } from './components/followers.component';
import { FollowingComponent } from './components/following.component';

import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCommentModule } from 'ng-zorro-antd/comment';



@NgModule({
  declarations: [ ProfileComponent, DashboardComponent, AnswersComponent, MostRecentComponent, AllTimeComponent, QuestionsComponent, FollowersComponent, FollowingComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    //ng-zorro modules
    NzPopoverModule, NzAvatarModule, NzButtonModule, NzGridModule, NzIconModule, NzInputModule, NzMenuModule, NzCommentModule
  ],
  bootstrap: [ProfileComponent]
})

export class UserModule { }
