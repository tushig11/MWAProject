import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
    <ul nz-menu nzMode="horizontal" class="pl20">
        <li nz-menu-item>
          Q&A application
        </li>
        <li nz-menu-item nzSelected>
          <i nz-icon nzType="home"></i>
          Home
        </li>
        <li nz-menu-item>
          <i nz-icon nzType="form"></i>
          Answers
        </li>
        <li nz-menu-item nz-popover nzTitle="Title" [nzContent]="contentTemplate" nzPlacement="bottom">
          Login
        </li>
    </ul>
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
