import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
    <ul nz-menu nzMode="horizontal" class="p16">
        <li nz-menu-item>
          Q&A application
        </li>
        <li nz-menu-item nzSelected>
          <a [routerLink]="['']"><i nz-icon nzType="home"></i>Home</a>
        </li>
        <li nz-menu-item>
          <a [routerLink]="['statistics']"><i nz-icon nzType="form"></i>Statistics</a>
        </li>
        <li nz-menu-item class="fRight">
          <button nz-button nzType="primary" [nzSize]="size">Add Question</button>
        </li>
        <li nz-menu-item class="fRight">
          <nz-avatar *ngIf="user; else elseBlock" nzIcon="user" nz-popover nzTitle="Title" [nzContent]="contentTemplate" nzPlacement="bottom"
          nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></nz-avatar>
          <ng-template #elseBlock><a [routerLink]="['login']">Login</a></ng-template>
        </li>
    </ul>
  </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  private size: string = "medium";
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
