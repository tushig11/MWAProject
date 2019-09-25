import { Component, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-overview',
  template: `
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="24">
      <h2>Dashboard</h2>
    </div>  
  </div>
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="16">
     <p class="fRight">17 Sep 2019 18:00 – 24 Sep 2019 17:00</p>
    </div>  
    <div nz-col [nzSpan]="8">
      <nz-button-group class="fRight">
        <button nz-button nzType="primary" >Week</button>
        <button nz-button nzType="default" >Month</button>
        <button nz-button nzType="default">Year</button>
        <button nz-button nzType="default">All time</button>
      </nz-button-group>
    </div>
  </div>
  <br/>
  <div style="background: #ECECEC;padding:30px;">
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="12">
      <nz-card nzTitle="Top Users by Reputation">
         <!-- Top Users -->
        <ul *ngIf="(users$ | async)?.length; else loading">
          <li *ngFor="let user of (users$ | async)">{{user.name}} {{user.reputation}}</li> 
        </ul>
      </nz-card>
    </div>
    <div nz-col [nzSpan]="12">
      <nz-card nzTitle="Most Used Tags">
        <!-- Top Tags -->
        <ul *ngIf="(tags$ | async)?.length; else loading">
          <li *ngFor="let tag of (tags$ | async)">{{tag.name}} {{tag.count}}</li> 
        </ul>
      </nz-card>
    </div>
  </div>
  </div>
  <div nz-row [nzGutter]="gutterSize">
  <div nz-col [nzSpan]="24">
    <img src="assets/dashboard.jpg" width="100%" />
  </div>
  </div>
  
  `,
  styles: []
})
export class OverviewComponent implements OnInit {
  gutterSize: number = 24;
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
