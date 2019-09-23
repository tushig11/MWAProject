import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Q&A</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a [routerLink]="['']">Home</a>
          </li>
          <li class="nav-item" >
            <a [routerLink]="['login']" *ngIf="!user; else elseBlock">Login/Signup</a>
          </li>
          <ng-template #elseBlock><a [routerLink]="['login']">{{"Hi "+user.firstname}}</a></ng-template>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  private user = null;

  constructor(private dataService: DataService) {}

  show: boolean = false;

  ngOnInit(){
    this.user = localStorage.getItem("user");
  }

  ngDoCheck(){
    this.user = this.dataService.isLoggedIn();
  }

}
