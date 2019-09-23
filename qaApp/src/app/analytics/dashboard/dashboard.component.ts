import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationService } from '../calculation.service';


@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      My Dashboard works!
    </p>
    <button (click)="fetchTags()">Tags</button>
    <button (click)="fetchUsers()">Users</button>
    
    <hr/>




  <!-- Using direct http response -->
  <ul *ngIf="(tags$ | async)?.length; else loading">
    <li *ngFor="let tag of (tags$ | async)">{{tag.name}} {{tag.count}}</li> 
  </ul>
    <!--
    <ul *ngIf="(users$ | async)?.length; else loading">
      <li *ngFor="let user of (users$ | async)">{{user.name.first}} {{user.name.last}}, {{user.gender}}</li> 
    </ul>
    -->
    <ul *ngIf="(users$ | async)?.length; else loading">
    <li *ngFor="let user of (users$ | async)">{{user.name}} {{user.reputation}}</li> 
  </ul>
    <ng-template #loading>
    <div>Loading ... (Click the Fetch button)</div>
    </ng-template>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  tags$;
  users$;

  constructor(private calcService: CalculationService){}

  fetchTags() {
    this.tags$ = this.calcService.getObservableData("tags");
  }
  
  fetchUsers() {
    this.users$ = this.calcService.getObservableData("users");
    
    //this.calcService.getOnlineData();
    //this.users$ = this.calcService.getCachedData();

  }


  ngOnInit() {
  }

}
