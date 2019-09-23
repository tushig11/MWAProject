import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationService } from '../calculation.service';


@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      My Dashboard works!
    </p>
    <button (click)="fetchUsers()">Fetch users</button>
    <hr/>
    <ul *ngIf="(users$ | async)?.length; else loading">
      <li *ngFor="let user of (users$ | async)">{{user.name.first}} {{user.name.last}}</li> 
    </ul>
    <ng-template #loading>
    <div>Loading ... (Click the Fetch user button)</div>
    </ng-template>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  users$;

  constructor(private calcService: CalculationService){}

  fetchUsers() {
    //this.users$ = this.userService.getObservableData();
    this.users$ = this.calcService.getCachedData();

  }

  ngOnInit() {
    this.calcService.getOnlineData();
  }

}
