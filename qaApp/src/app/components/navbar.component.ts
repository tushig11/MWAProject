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
          <button nz-button nzType="primary" *ngIf="user; else addElse" [nzSize]="size" (click)="showModal()">Add Question</button>
        </li>
        <li nz-menu-item class="fRight" *ngIf="!user">
          <a [routerLink]="['signup']">Signup</a>
        </li>
        <li nz-menu-item class="fRight">
          <nz-avatar *ngIf="user; else elseBlock" nzIcon="user" nz-popover [nzContent]="contentTemplate" nzPlacement="bottom" [routerLink]="['user']"></nz-avatar>
          <ng-template #elseBlock><a [routerLink]="['login']">Login</a></ng-template>
        </li>
        <ng-template #contentTemplate>
          <a (click)="logout()">Logout</a>
        </ng-template>
    </ul>

    <nz-modal
      [(nzVisible)]="isVisible"
      nzTitle="Add Question"
      (nzOnCancel)="handleCancel()"
      (nzOnOk)="handleOk()"
      [nzOkLoading]="isOkLoading"
    >
      <input nz-input placeholder="Basic usage" [(ngModel)]="title" />    
      <br />
      <br />
      <textarea rows="4" nz-input [(ngModel)]="content"></textarea>
      
    </nz-modal>    
  </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  private size: string = "medium";
  private user = null;

  //modal
  isVisible = false;
  isOkLoading = false;

  //question Modal
  title: String = " ";
  content: String = " ";

  constructor(private dataService: DataService) {}

  show: boolean = false;

  ngOnInit(){
    this.user = this.dataService.isLoggedIn();
  }

  ngDoCheck(){
    if(localStorage.getItem("access_token"))
      this.user = true;
    else
      this.user = false;
  }

  logout(){
    this.dataService.logout();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    console.log(this.title);
    console.log(this.content);
    this.title = "";
    this.content = "";
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
