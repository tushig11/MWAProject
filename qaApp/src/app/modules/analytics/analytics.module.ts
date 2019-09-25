import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsRoutingModule } from './analytics-routing.module';

import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzListModule } from 'ng-zorro-antd/list';

import { DashboardComponent } from './dashboard.component';
import { SimpleComponent } from './components/simple.component';
import { TagsComponent } from './components/tags.component';
import { UsersComponent } from './components/users.component';
import { OverviewComponent } from './components/overview.component';



@NgModule({
  declarations: [DashboardComponent, SimpleComponent, TagsComponent, UsersComponent, OverviewComponent],
  imports: [
    CommonModule, HttpClientModule, AnalyticsRoutingModule,
     //ng-zorro modules
    NzPopoverModule, NzAvatarModule, NzButtonModule, NzGridModule, NzIconModule, NzInputModule, NzMenuModule, NzCommentModule,
    NzCardModule, NzBadgeModule, NzListModule 

  ],
  exports: [
    DashboardComponent
  ]
})
export class AnalyticsModule { }
