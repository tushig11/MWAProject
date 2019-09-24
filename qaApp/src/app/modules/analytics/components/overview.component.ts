import { Component, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-overview',
  template: `

  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="24">
      <nz-button-group class="fRight">
        <button nz-button nzType="primary" >Week</button>
        <button nz-button nzType="default" >Month</button>
        <button nz-button nzType="default">Year</button>
        <button nz-button nzType="default">All</button>
      </nz-button-group>
    </div>
  </div>
  <br/>
  <div style="background: #ECECEC;padding:30px;">
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="12">
      <nz-card nzTitle="Top Users">
         <!-- Top Users -->
        <ul *ngIf="(users$ | async)?.length; else loading">
          <li *ngFor="let user of (users$ | async)">{{user.name}} {{user.reputation}}</li> 
        </ul>
      </nz-card>
    </div>
    <div nz-col [nzSpan]="12">
      <nz-card nzTitle="Top Tags">
        <!-- Top Tags -->
        <ul *ngIf="(tags$ | async)?.length; else loading">
          <li *ngFor="let tag of (tags$ | async)">{{tag.name}} {{tag.count}}</li> 
        </ul>
      </nz-card>
    </div>
  </div>
  </div>
  
  `,
  styles: [
    `
    p {
      margin: 0;
    }
    `
  ]
})
export class OverviewComponent implements OnInit {
  gutterSize: number = 16;
  userinfo;
  tags$;
  users$;

  constructor(private calcService: CalculationService){}

  testService() {
    this.calcService.getUserAnalytics(2)
      .subscribe(userinfo => this.userinfo = userinfo);
  }

  ngOnInit() {
    this.calcService.getUserAnalytics(2)
    .subscribe(userinfo => this.userinfo = userinfo);
    this.tags$ = this.calcService.getTopTags();
    this.users$ = this.calcService.getTopUsers();

  }
}
