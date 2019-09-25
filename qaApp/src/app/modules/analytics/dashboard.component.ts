import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationService } from '../../services/calculation.service';


@Component({
  selector: 'app-dashboard',
  template: `

  <div nz-row [nzAlign]="middle" [nzGutter]="gutterSize">
  <div nz-col nzSpan="5">
      <ul nz-menu>
          <li nz-menu-item [routerLink]="['overview']">Overview</li>
          <li nz-menu-item [routerLink]="['tags']">Tags</li>
          <li nz-menu-item [routerLink]="['users']">Users</li>
      </ul>
  </div>

  <div nz-col nzSpan="19">
      <router-outlet></router-outlet>
  </div> 
</div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  userinfo;
  tags$;
  users$;

  constructor(private calcService: CalculationService){}

  testService() {
    this.calcService.getUserAnalytics(2)
      .subscribe(userinfo => this.userinfo = userinfo);
  }

  fetchTags() {
    this.tags$ = this.calcService.getTopTags();
  }
  
  fetchUsers() {
    this.users$ = this.calcService.getTopUsers();
    
    //this.calcService.getOnlineData();
    //this.users$ = this.calcService.getCachedData();

  }

  ngOnInit() {
  }

}